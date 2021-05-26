import {
  addPost,
  getPosts,
  uploadImage,
} from '../controller/firebase-firestore.js';

import {
  logOut,
} from '../controller/firebase-auth.js';
import {
  post,
} from '../components/post.js';

export default (userData) => {
  // Capturar el USER ID actual
  const userId = userData.userId; // firebase.firestore
  const userName = userData.name; // firebase.auth()

  const viewTimeLine = document.createElement('section');
  viewTimeLine.classList.add('section-TimeLine');
  viewTimeLine.innerHTML = /* html */ ` 
    <!--Header-->  
      <header class="header">
        <h1>FindMyPaw</h1>
        <div class="user">
          <img src = "${userData.profilePhoto}">
          <nav class="opc-select"><i class="fas fa-sort-down" id="userOpc"></i>
            <ul class="submenu" id="subMenuUser">
              <li><button class="profile" id = "profile"> Profile </button></li>
              <li><button class="logout" id = "logout"> Log out </button></li>
            </ul>
          </nav>
        </div>
      </header>
    <!--Menu-->  
      <nav class="nav">
        <ul class="list-options"> 
          <li><a><i class="fas fa-search"></i></a></li>
          <li><a><i class="fas fa-home"></i></a></li>
          <li class= "opc-addpost" ><i class="fas fa-edit"></i></li>
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
  // console.log('sectionnnnnnn', viewTimeLine);
  // user menu
  const userOpc = viewTimeLine.querySelector('#userOpc');
  const subMenuUser = viewTimeLine.querySelector('#subMenuUser');
  userOpc.addEventListener('click', () => {
    if (subMenuUser.style.display === 'none') {
      subMenuUser.style.display = 'block';
    } else {
      subMenuUser.style.display = 'none';
    }
  });

  // profile
  const opcProfile = viewTimeLine.querySelector('.profile');
  opcProfile.addEventListener('click', () => {
    window.location.hash = '#/profile';
  });
  // home
  const btnHome = viewTimeLine.querySelector('.fa-home');
  btnHome.addEventListener('click', () => {
    window.location.hash = '#/timeline';
  });
  // Log out
  const btnLogOut = viewTimeLine.querySelector('.logout');
  btnLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    // viewTimeLine.innerHTML = '';
    // console.log(viewTimeLine);
    logOut().then(() => {
      window.location.hash = '#/login';
      // console.log('user salió');
    });
  });
  // Capturar la opción que contiene el add post
  const contenteShare = viewTimeLine.querySelector('.content-share');

  const createPost = viewTimeLine.querySelector('.opc-addpost');
  createPost.addEventListener('click', () => {
    if (contenteShare.style.display === 'none') {
      contenteShare.style.display = 'block';
    } else {
      contenteShare.style.display = 'none';
    }
  });

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

    const uploadTask = imageFile ? uploadImage(imageFile, 'Photos') : null;
    // Capturar el FORM
    const formShare = viewTimeLine.querySelector('.form-share');
    // PRIVACIDAD (reempalzar por input list value)
    const privacy = 'Publico';

    if (imageFile) {
      uploadTask.on(
        'state_changed',
        () => {
          // Observe state change events such as progress, pause, and resume
          // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
          // eslint-disable-next-line default-case
        },
        () => {
          // Handle unsuccessful uploads
          // console.error(error);
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // console.log(
            //   'se está enviando la siguiente data: userID ',
            //   userId,
            //   ' UserName ',
            //   userName,
            //   ' privacy ',
            //   privacy,
            //   ' inputContent ',
            //   inputContent,
            //   ' DOWNLOADurl ',
            //   downloadURL,
            // );
            addPost(userId, userName, privacy, inputContent, downloadURL)
              .then(() => {
                // console.log('Info del post => ', refDoc);
              })
              .catch(() => {
                // console.log(`Error creando el post => ${error}`);
              });
          });
        },
      );
    } else {
      addPost(userId, userName, privacy, inputContent)
        .then(() => {
          // console.log('Info del post => ', refDoc);
        })
        .catch(() => {
          // console.log(`Error creando el post => ${error}`);
        });
    }

    /* Resetear los inputs del FORM */
    formShare.reset();
    /* Enviar la info del userId y el texto del post */
  });

  const containerPost = viewTimeLine.querySelector('.content-posts');

  getPosts((dataPost) => {
    containerPost.innerHTML = '';
    post(userData, dataPost, containerPost);
  });

  return viewTimeLine;
};
