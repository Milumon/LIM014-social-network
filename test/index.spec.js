import MockFirebase from 'mock-cloud-firestore';

import { addPost, getPosts, deletePost } from '../src/controller/firebase-firestore.js';

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
          likes: ['001'],
          imageURL: 'src/img/perrito3.0.png',
        },
        Post002: {
          userId: '002',
          name: 'Bri',
          description: 'Toda una bichota',
          privacy: 'Publico',
          date: '22 de mayo 2021',
          likes: ['001', '002'],
          imageURL: 'src/img/perrito3.0.png',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Add Post', () => {
  it('Debería de poder agregar un post ', (done) => addPost('003').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.title === 'comprar pan');
      expect(result.title).toBe('comprar pan');
      done();
    };
    getPosts(callback);
  }));
});

describe('', () => {
  it('Debería poder eliminar un post con id: abc123', (done) => deletePost('abc123').then(() => {
    const callback = (notes) => {
      const result = notes.find((element) => element.id === 'abc123');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));
});
