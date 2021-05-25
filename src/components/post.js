import {
  addComment,
  deletePost,
  editPost,
  countLikes,
  getComments,
} from '../controller/firebase-firestore.js';

export const post = (userData, dataPost, containerPost) => {
  dataPost.forEach((objPost) => {
    // containerPost.appendChild(objPost.Description);
    const singlePost = document.createElement('section');
    singlePost.classList.add('post-user');
    singlePost.innerHTML += /* html */ `
      <div id="modalContainer" class="modal hide">
        <input type="button" id="btnCancelDeletePost" value="Cancelar">
        <input type="button" id="btnDeletePost" value="Aceptar">
      </div>
      <header class="header-post-user">
        <figure class="img-user">
          <img src="">
          <p>${objPost.name}</p>
        </figure>
        <nav class="nav-edit">
          <ul class= "ul-content"> 
            <li>   
            <a class="fas fa-grip-vertical" id="icon-edit"></a>
            <ul class= "ul-second">
              <li><button class="post-edit" value="${
  objPost.id
}">edit</button></li>
              <li><button class= "post-delete" value="${
  objPost.id
}">delete</button></li>
            </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div class="user-post-description">
        <img class="img-user-post-description" src="${objPost.imageURL}">
      <div id="content-description">
        <textarea class="description" readonly>${objPost.description}</textarea>
        <button class="post-save" value="${objPost.id}" hidden="">save</button>
      </div>
      <div class="like-comment">
        <a><i class="far fa-heart ${objPost.likes.includes(userData.userId) ? 'liked' : 'unliked'}" value="${objPost.id}" id="btn-like"></i></a>
        <a><i class="far fa-comment" id="btn-comment"></i></a>
        <p>${objPost.likes.length}</p>
      </div>
      <section id ="boxComment" class="hide">
        <form class="formComment">
          <textarea class="comment" placeholder="Add a comment" required></textarea>
          <button type="submit" class="fas fa-paper-plane"></button>
        </form>
        <div id = "content-comments"></div>
      </section>  
      </div>
 
      `;

    // Modal opc delete
    const btnDelete = singlePost.querySelector('.post-delete');
    const modal = singlePost.querySelector('#modalContainer');
    const btnDeleteConfirm = singlePost.querySelector('#btnDeletePost');
    const btnCancelDeletePost = singlePost.querySelector(
      '#btnCancelDeletePost',
    );

    btnDelete.addEventListener('click', () => {
      modal.classList.toggle('hide');
      btnDeleteConfirm.addEventListener('click', () => {
        if (userData.userId === objPost.userId) {
          deletePost(btnDelete.value)
            .then(() => {})
            .catch(() => {
              // console.error('Error removing document: ', error);
            });
        } else {
          // alert('no puedes borrar post ajeno oyeeee');
          window.location.reload();
        }
      });

      btnCancelDeletePost.addEventListener('click', () => {
        modal.classList.toggle('hide');
      });
    });

    // Opc edit post
    const btnSave = singlePost.querySelector('.post-save');
    const btnEdit = singlePost.querySelector('.post-edit');
    const textInput = singlePost.querySelector('.description');
    const contentDescription = singlePost.querySelector('#content-description');

    btnEdit.addEventListener('click', () => {
      textInput.removeAttribute('readonly');
      contentDescription.setAttribute('class', 'show-edit');
      btnSave.removeAttribute('hidden');
    });

    btnSave.addEventListener('click', () => {
      textInput.setAttribute('contentEditable', false);
      contentDescription.removeAttribute('class', 'show-edit');
      btnSave.setAttribute('hidden', 'true');
      if (userData.userId === objPost.userId) {
        editPost(btnEdit.value, textInput.value);
      } else {
        // alert('no es tu post, no lo edites');
        window.location.reload();
      }
      btnSave.setAttribute('hidden', 'true');
      contentDescription.setAttribute('style', 'border: 1px solid white');
    });

    // update likes
    const likes = singlePost.querySelector('#btn-like');

    likes.addEventListener('click', () => {
      const result = objPost.likes.indexOf(userData.userId);
      // console.log('aaa', objPost.userId);
      if (result === -1) {
        objPost.likes.push(userData.userId);
        countLikes(objPost.id, objPost.likes);
        // console.log('kkkkk', objPost.likes);
        // console.log('ooooo', objPost.id);
      } else {
        objPost.likes.splice(result, 1);
        countLikes(objPost.id, objPost.likes);
      }
    });

    // comments
    const boxComment = singlePost.querySelector('#boxComment');
    const btnComment = singlePost.querySelector('#btn-comment');
    btnComment.addEventListener('click', () => {
      boxComment.classList.toggle('hide');
    });

    // add comments

    const btnShareComment = singlePost.querySelector('.fa-paper-plane');

    btnShareComment.addEventListener('click', () => {
      const textComment = singlePost.querySelector('.comment').value;
      /* userId, idPost, comment */
      addComment(userData.userId, objPost.id, textComment, userData.name, userData.profilePhoto);
    });

    // get comments
    getComments((comment) => {
      console.log(comment);
      const commentsContainer = singlePost.querySelector('#content-comments');
      commentsContainer.innerHTML = '';
      comment.forEach((element) => {
        console.log('GAAAAAAAAAAA', element);
        commentsContainer.innerHTML += `
        <div class="single-comment">
          <img class="img" src= "${element.imageURL}"/>
          <h4 class="name">${element.username}</h4>
          <p class="description">
          ${element.comment}
          </p>
        </div>
        `;
      });
    }, objPost.id);

    return containerPost.appendChild(singlePost);
  });
};
