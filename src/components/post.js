import {
  deletePost,
  editPost,
  countLikes,
} from '../controller/firebase-firestore.js';

export const post = (userData, dataPost, containerPost) => {
  dataPost.forEach((x) => {
    // containerPost.appendChild(x.Description);
    const singlePost = document.createElement('div');
    singlePost.classList.add('post-user');
    singlePost.innerHTML += /* html */ `
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
              <li><button class="post-save" value="${x.id}">save</button></li>
              <li><button class="post-edit" value="${x.id}">edit</button></li>
              <li><button class= "post-delete" value="${x.id}">delete</button></li>
            </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div class="user-post-description">
        <img src="${x.imageURL}">
        <div class="like-comment">
        <a><i class="far fa-heart ${(x.likes.indexOf(userData.userId) === -1) ? 'unliked' : 'liked'}" value="${x.id}" id="btn-like"></i></a>
        <a><i class="far fa-comment"></i></a>
        </div>
      <textarea class="description" readonly>${x.description}</textarea>
        <!-- <input type="text" class="description" value="${x.description}" readonly>  -->
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
          .then(() => {})
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      });

      btnCancelDeletePost.addEventListener('click', () => {
        modal.classList.toggle('hide');
      });
    });
    const btnSave = singlePost.querySelector('.post-save');
    const btnEdit = singlePost.querySelector('.post-edit');
    const textInput = singlePost.querySelector('.description');

    btnEdit.addEventListener('click', () => {
      textInput.removeAttribute('readonly');
    });

    btnSave.addEventListener('click', () => {
      textInput.setAttribute('readonly', true);
      editPost(btnEdit.value, textInput.value);
    });

    // update likes
    // const userId = firebase.auth.currentUser;
    const likes = singlePost.querySelector('#btn-like');
    likes.addEventListener('click', () => {
      const result = x.likes.indexOf(userData.userId);
      console.log('aaa', x.userId);
      if (result === -1) {
        x.likes.push(x.userId);
        likes.setAttribute('style', 'color: red !important;');
        countLikes(x.id, x.likes);
        console.log('kkkkk', x.likes);
        console.log('ooooo', x.id);
      } else {
        likes.removeAttribute('style');
        x.likes.splice(result, 1);
        countLikes(x.id, x.likes);
      }
    });

    return containerPost.appendChild(singlePost);
    singlePost.deletePost();
  });
};
