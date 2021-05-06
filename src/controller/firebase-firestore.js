export const addPost = (UserId, description) => {
  const db = firebase.firestore();
  return db.collection('post').add({
    userId: UserId,
    Description: description,
    Date: new Date().toLocaleString(),
    imageURL: 'imagen',
    likes: '2',
  });
};

export const getPosts = (callback) => {
  const db = firebase.firestore().OrderBy('Date');
  db.collection('post')
    .onSnapshot((querySnapshot) => {
      console.log('Colección(querySnapshot)', querySnapshot);
      const post = [];
      querySnapshot.forEach((doc) => {
        console.log('info de los posts (doc) dentro del querySnapshot', doc.data());
        post.push({ id: doc.id, ...doc.data() });
      });
      console.log('array de post', post);
      callback(post);
    });
};
