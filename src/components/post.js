import {
  deletePost,
} from '../controller/firebase-firestore.js';

export const post = (dataPost, containerPost) => {
  dataPost.forEach((x) => {
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
    const btnCancelDeletePost = singlePost.querySelector(
      '#btnCancelDeletePost',
    );

    btnDelete.addEventListener('click', () => {
      modal.classList.toggle('hide');

      btnDeleteConfirm.addEventListener('click', () => {
        deletePost(btnDelete.value)
          .then(() => {
            alert('Document successfully deleted!');
          })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      });

      btnCancelDeletePost.addEventListener('click', () => {
        modal.classList.toggle('hide');
      });
    });
    return containerPost.appendChild(singlePost);
    // singlePost.deletePost();
  });
};
