import {
  logOut,
} from '../controller/firebase-auth.js';
import {
  addPost,
  getPosts,
  uploadImage,
} from '../controller/firebase-firestore.js';

export default () => {
  const viewTimeLine = ` 
    <section class = "user_header">
    <figure> 
    <img class= "img_profile" src = "">
    <img class= "img_icon">
    </figure>
    </section>
    <section class = "user_opcion">
    <img class= "img_search" src = "">
    <img class= "img_home" src = "">
    <img class= "img_share" src = "">
    </section>
    <section id ="container-share" class="hide">
      <form class="form-share">
      <input type="text" class="description" placeholder="Add" required>
      <button type="input"> foto </button>
      <button type="submit" class="btn-share"> Compartir </button>
      </form>
    </section>
    <section class="container-post">
    </section> 

 < div class = "progress-panel" >
   <input type = "file" value = "upload" id = "btnUploadFile">
   <div class = "progress" >
   <div class = "determinate"style = "width: 0%" > < /div> 
   </div> 
   </div>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeLine;

  const inputFile = divElement.querySelector('#btnUploadFile');

  inputFile.addEventListener('change', (e) => {
  // const uploader = divElement.querySelector('#uploader');
  // const fileButton = divElement.querySelector('#fileButton');
  // fileButton.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const task = uploadImage(file, firebase.auth().currentUser);
    task.on('state_changed', (snapshot) => {
      const porcent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      ('.determinate').attr('style', `width: ${porcent}%`);
    },
    (err) => console.log(err),
    () => {
      task.snapshot.ref.getDownloadURL()
        .then((url) => {
          console.log(url);
          sessionStorage.setItem('imgNewPost', url);
        }).catch((err) => console.log(err));
    });
  //   const storage = firebase.storage();
  //   const storageRef = storage.ref(`img/${file.name}`);
  //   task.on('state_changed', (snapshot) => {
  //     const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     uploader.value = percentage;
  //   });
  // });
  });

  const btnSingOut = divElement.querySelector('button');

  btnSingOut.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('LOG OUT ENVIADO');

    logOut().then(() => {
      window.location.hash = '#/login';
    });
  });

  const userId = firebase.auth().currentUser.uid;
  const btnShare = divElement.querySelector('.btn-share');
  btnShare.addEventListener('click', (e) => {
    e.preventDefault();
    const inputContent = divElement.querySelector('.description').value;
    const formShare = divElement.querySelector('.form-share');
    formShare.reset();
    console.log('ENVIANDO DATOS: ', userId, inputContent);
    addPost(userId, inputContent)
      .then((refDoc) => {
        console.log(`Id del post => ${refDoc.id}`);
      })
      .catch((error) => {
        console.log(`Error creaando el post => ${error}`);
      });
  });

  const containerPost = divElement.querySelector('.container-post');

  getPosts((post) => {
    containerPost.innerHTML = '';
    console.log('POOOOOOOOOOOOOOOOOOOOOOOST', post);
    post.forEach((x) => {
      // containerPost.appendChild(x.Description);
      const singlePost = document.createElement('div');
      singlePost.innerHTML += x.Description;
      containerPost.appendChild(singlePost);
    });
  });

  return divElement;
};
