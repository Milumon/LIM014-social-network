import {
  addPost,
  getPosts,
  uploadImage,
  deletePost,
} from '../controller/firebase-firestore.js';

export default (userData) => {
  // Capturar el USER ID actual
  const userId = userData.userId; // firebase.firestore
  const userName = userData.name; // firebase.auth()

  const viewTimeLine = document.createElement('section');
  viewTimeLine.classList.add('section-TimeLine');

  
  viewTimeLine.innerHTML = /*html*/ ` 
  
    <!--Header-->  
      <header class="header">
        <h1>FindMyPaw</h1>
        <div class="">
          <img src = "../img/user.png">
          <a href="#"><i class="fas fa-sort-down"></i></a>
        </div>
      </header>
    <!--Menu-->  
      <nav class="nav">
        <ul class="list-options"> 
          <li><a href="#"><i class="fas fa-search"></i></a></li>
          <li><a href="#"><i class="fas fa-home"></i></a></li>
          <li><a href="#"><i class="fas fa-edit"></i></a></li>
        </ul>
      </nav>
    <!--Share-->
    <div class="contentPosts-container">
 
      <article class="content-share">
        <div class="share">
          <form class="form-share">
            <div class = "progress-panel" >
            <input type = "file" value = "upload" id = "btnUploadFile" />
            <div class = "progress" >
            <div class = "determinate" style = "width" > </div> 
            </div >
          </div>
            <input class="post-description" placeholder="Share something" required></input>
            <button type="submit" class="btn-share"> Compartir </button>
          </form>
        </div>
      </article>
    <!--Posts-->   
      <article class= "content-posts">
      </article>  
    </div>
  `;

  // Capturar el botón de compartir
  const btnShare = viewTimeLine.querySelector('.btn-share');
  // Capturar el botón de subir archivo
  const inputFile = viewTimeLine.querySelector('#btnUploadFile');

  // Todo lo que sucederá cuando le den a 'COMPARTIR'
  btnShare.addEventListener('click', (e) => {
    e.preventDefault();
    // Capturar el value del contenido del post
    const inputContent = viewTimeLine.querySelector('.post-description').value;
    // Capturar el archivo seleccionado
    const imageFile = inputFile.files[0];
    const uploadTask = uploadImage(imageFile, 'Photos');
    // Capturar el FORM
    const formShare = viewTimeLine.querySelector('.form-share');
    // PRIVACIDAD (reempalzar por input list value)
    const privacy = 'Publico';

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        // eslint-disable-next-line default-case
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('se está enviando la siguiente data: userID ', userId, ' UserName ', userName, ' privacy ', privacy, ' inputContent ', inputContent, ' DOWNLOADurl ', downloadURL );
          addPost(userId, userName, privacy, inputContent, downloadURL)
            .then((refDoc) => {
              console.log('Info del post => ', refDoc);
            })
            .catch((error) => {
              console.log(`Error creando el post => ${error}`);
            });
        });
      },
    );

    /* Resetear los inputs del FORM */
    formShare.reset();
    /* Enviar la info del userId y el texto del post */
  });

  const containerPost = viewTimeLine.querySelector('.content-posts');

  getPosts((post) => {
    containerPost.innerHTML = '';
    console.log('POOOOOOOOOOOOOOOOOOOOOOOST', post);
    post.forEach((x) => {
      // containerPost.appendChild(x.Description);
      const singlePost = document.createElement('div');
      singlePost.classList.add('post-user');
      singlePost.innerHTML += `

      <div id="modalContainer" class="modal hide">
      <input type="button" id="btnCancelDeletePost" value="Cancelar">
      <input type="button" id="btnDeletePost" value="Aceptar">
    </div>
      <header class="header-post-user">
        <figure class="img-user">
          <img src="">
          <p>${x.name}</p>
        </figure>
        <nav class="nav-edit">
          <ul class= "ul-content"> 
            <li>   
            <a class="fas fa-grip-vertical" id="icon-edit"></a>
            <ul class= "ul-second">
              <li><button class="post-edit">edit</button></li>
              <li><button class= "post-delete" value="${x.id}">delete</button></li>
             >
            </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div class="user-post-description">
        <img src="${x.imageURL}">
        <div class="like-comment">
        <a><i class="far fa-heart"></i></a>
        <a><i class="far fa-comment"></i></a>
        </div>
        <p>
          ${x.description}
        </p>
      </div>
      `;

      const btnDelete = singlePost.querySelector('.post-delete');
      const modal = singlePost.querySelector('#modalContainer');
      const btnDeleteConfirm = singlePost.querySelector('#btnDeletePost');
      const btnCancelDeletePost = singlePost.querySelector('#btnCancelDeletePost');

      btnDelete.addEventListener('click', () => {

        modal.classList.toggle('hide');

        btnDeleteConfirm.addEventListener('click', () => {
          deletePost(btnDelete.value).then(() => {
            alert('Document successfully deleted!');
          }).catch((error) => {
            console.error('Error removing document: ', error);
          });
        })

        btnCancelDeletePost.addEventListener('click', () => {
          modal.classList.toggle('hide')
        })


         
      });
      return containerPost.appendChild(singlePost);
      // singlePost.deletePost();
    });
  });

  return viewTimeLine;
};
