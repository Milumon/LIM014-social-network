import {
  logOut
} from '../controller/firebase-auth.js';
import {
  addPost,
  getPosts,
  uploadImage,
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

  const inputFile = viewTimeLine.querySelector('#btnUploadFile');

  inputFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    uploadImage(file, 'profilePhotos').then(() => {});
  });

  // const btnSingOut = viewTimeLine.querySelector("button");

  // btnSingOut.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   console.log("LOG OUT ENVIADO");

  //   logOut().then(() => {
  //     window.location.hash = "#/login";
  //   });
  // });

  const userId = firebase.auth().currentUser.uid;
  const btnShare = viewTimeLine.querySelector('.btn-share');
  btnShare.addEventListener('click', (e) => {
    e.preventDefault();
    const inputContent = viewTimeLine.querySelector('.post-description').value;
    const formShare = viewTimeLine.querySelector('.form-share');
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
          <img src="../img/user.png">
          <p>user 1</p>
        </figure>
        <div class="icon-edit">
          <a><i class="fas fa-grip-vertical"></i></a>
        </div>
      </header>
      <div class="user-post-description">
        <img src="">
        <div class="like-comment">
        <a><i class="far fa-heart"></i></a>
        <a><i class="far fa-comment"></i></a>
        </div>
        <p>
          ${x.Description}
        </p>
      </div>
      `;
      containerPost.appendChild(singlePost);
    });
  });

  return viewTimeLine;
};