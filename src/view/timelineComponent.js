import {
  addPost,
  getPosts,
  uploadImage,
  deletePost,
} from '../controller/firebase-firestore.js';

export default () => {
  const viewTimeLine = document.createElement('section');
  viewTimeLine.classList.add('section-TimeLine');
  viewTimeLine.innerHTML = `
    <!--Header-->  
      <header class="header">
        <h1>FindMyPaw</h1>
        <div class="user">
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

  /* inputFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    uploadImage(file, 'profilePhotos');
  }); */

  // const btnSingOut = viewTimeLine.querySelector("button");

  // btnSingOut.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   console.log("LOG OUT ENVIADO");

  //   logOut().then(() => {
  //     window.location.hash = "#/login";
  //   });
  // });

  // Capturar el USER ID actual
  const userId = firebase.auth().currentUser.uid;
  const currentUser = firebase.auth().currentUser.displayName;
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
    console.log('objeto de imagen', imageFile);
    const uploadTask = uploadImage(imageFile, 'profilePhotos');
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
          addPost(userId, currentUser, privacy, inputContent, downloadURL)
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
              <li><a class="post-edit">edit</a></li>
              <li><a class= "post-delete-${x.id}">delete</a></li>
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
      const btnDelete = singlePost.querySelector(`.post-delete-${x.id}`);
      btnDelete.addEventListener('click', () => {
        deletePost(x.id).then(() => {
          console.log('Document successfully deleted!');
        }).catch((error) => {
          console.error('Error removing document: ', error);
        });
      });
      return containerPost.appendChild(singlePost);
      // singlePost.deletePost();
    });
  });

  return viewTimeLine;
};