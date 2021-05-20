import {
  getPosts,
  uploadImage,
  updateUser,
} from '../controller/firebase-firestore.js';

import {
  post,
} from '../components/post.js';

export default (userData) => {
  const viewProfile = document.createElement('section');
  viewProfile.classList.add('section-TimeLine');
  viewProfile.innerHTML = `<!--Header-->  
  <header class="header">
    <h1>FindMyPaw</h1>
    <div class="user">
      <img src = "../img/user.png">
      <li class="opc-select"><i class="fas fa-sort-down"></i>
        <ul class="submenu">
          <li><button class="profile"> Profile </button></li>
          <li><button class="logout"> Log out </button></li>
        </ul>
      </li>
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
  <!--Profile-->
    <div class="contentProfile-container">
      <article class="content-profile">
        <div class="profile">
         <div class="ProfileImg">
         <div class="imageContain"><img src="${userData.profilePhoto}" alt=""></div>
         </div>
           <div class="ProfileDes">
           <a class="profileTitle" title="">${userData.name}</a>
           <div class="profileInfo">${userData.descriptionProfile}</div>
           </div>
        </div>
      </article>
      <div class='edit-profile'>
        <form class='form-share' id='form-edit'>
          <div class = "progress-panel" >
            <input type = "file" value = "upload" id = "btnUploadPhoto" />
            <div class = "progress" >
            <div class = "determinate" style = "width" > </div> 
            </div >
          </div>
        <input class="post-description" id='profile-description' placeholder="Profile description" required></input>
        <button type="submit" class="btn-share" id='save-profile'> Save </button>
        </form>
      </div>
    <!--Posts-->   
    <article class= "content-posts">
    </article>  

    
  </div>
  `;

  const inputPhoto = viewProfile.querySelector('#btnUploadPhoto');
  const btnSaveProfile = viewProfile.querySelector('#save-profile');

  btnSaveProfile.addEventListener('click', (e) => {
    e.preventDefault();

    const formEdit = viewProfile.querySelector('#form-edit');

    const inputDescription = viewProfile.querySelector('#profile-description').value;
    console.log('Descripciooooooon', inputDescription);

    const imgProfile = inputPhoto.files[0];

    const uploadUser = imgProfile ? uploadImage(imgProfile, 'Users') : null;
    console.log('queeee seraaaaa', uploadUser);

    if (imgProfile) {
      uploadUser.on(
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
          uploadUser.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(
              'se está enviando la siguiente data: userID ',
              downloadURL,
            );
            updateUser(userData.userId, downloadURL, inputDescription)
              .then((refDoc) => {
                window.location.reload();
                console.log('Info del user => ', refDoc);
              })
              .catch((error) => {
                console.log(`Error actualizando el user => ${error}`);
              });
          });
        },
      );
    }

    /* else {
      addPost(userId, userName, privacy, inputContent)
        .then((refDoc) => {
          console.log('Info del post => ', refDoc);
        })
        .catch((error) => {
          console.log(`Error creando el post => ${error}`);
        });
    } */
    /* Resetear los inputs del FORM */
    formEdit.reset();
  });

  const containerPost = viewProfile.querySelector('.content-posts');

  getPosts((dataPost) => {
    const filterPost = dataPost.filter((data) => data.userId === userData.userId);
    containerPost.innerHTML = '';
    post(userData, filterPost, containerPost);
    console.log(dataPost);
  });

  return viewProfile;
};
