import {
  getPosts,
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
         <div class="imageContain"><img src="../img/user.png" alt=""></div>
         </div>
           <div class="ProfileDes">
           <a class="profileTitle" href="" title="">${userData.name}</a>
           <div class="profileInfo">Description</div>
           </div>
        </div>
      </article>
    <!--Posts-->   
    <article class= "content-posts">
    </article>  

    
  </div>
  `;
  const containerPost = viewProfile.querySelector('.content-posts');

  getPosts((dataPost) => {
    const filterPost = dataPost.filter(post => post.userId == userData.userId)
    containerPost.innerHTML = '';
    post(userData, filterPost, containerPost);
    console.log(dataPost);
  });

  return viewProfile;
};
