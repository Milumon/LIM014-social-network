const firestore = () => ({
  collection: (nameCollection) => ({
    add: (objData) => new Promise((resolve, reject) => {
      resolve('la nota fue agregada');
    }),
  }),
});

const firebase = {
  firestore,
};

export default jest.fn(() => firebase);
