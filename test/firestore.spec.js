import MockFirebase from 'mock-cloud-firestore';

import {
  addPost,
  getPosts,
  deletePost,
  editPost,
  countLikes,
  addComment,
  getComments,
} from '../src/controller/firebase-firestore.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        Post001: {
          userId: '001',
          name: 'Chio',
          description: 'No me testeen',
          privacy: 'Publico',
          date: '20 de mayo 2021',
          likes: [],
          imageURL: 'src/img/perrito3.0.png',
        },
        Post002: {
          userId: '002',
          name: 'Bri',
          description: 'GG',
          privacy: 'Publico',
          date: '22 de mayo 2021',
          likes: ['001', '002'],
          imageURL: 'src/img/perrito3.0.png',
        },
      },
    },
    comments: {
      __doc__: {
        comment001: {
          comment: 'well',
          date: '20 may 2021',
          imageURL: 'src/img/perrito3.0.png',
          userId: '002',
          username: 'Thais',
        },
      },
    },
  },
};

// Instancia de la libreria 
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Add Post', () => {
  it('Debería de poder agregar un post ', (done) => addPost('003', 'Milu', 'Publico', 'Gucci', 'src/img/perrito3.0.png').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.description === 'Gucci');
      expect(result.description).toBe('Gucci');
      done();
    };
    getPosts(callback);
  }));
});

describe('Delete Post', () => {
  it('Debería poder eliminar un post con id: 001', (done) => deletePost('001').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.id === '001');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));
});

describe('Edit Post', () => {
  it('Debería poder editar un post con id: 001', (done) => editPost('Post001', 'successful').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.description === 'successful');
      expect(result.description).toBe('successful');
      done();
    };
    getPosts(callback);
  }));
});

describe('Likes', () => {
  it('Debería poder dar like al post con id: 001', (done) => countLikes('Post001', '001').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.likes === '001');
      expect(result.likes).toBe('001');
      done();
    };
    getPosts(callback);
  }));
});

describe('Comentarios', () => {
  it('Debería poder comentar', (done) => addComment('002', 'Post002', 'hello', 'Milumon', 'src/img/perrito3.0.png').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.comment === 'hello');
      expect(result.comment).toBe('hello');
      done();
    };
    getComments(callback, 'Post002');
  }));
});
