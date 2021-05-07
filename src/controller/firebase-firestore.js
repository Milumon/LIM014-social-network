const db = firebase.firestore();
export const addUser = (name, username, email, password) => {
  db.collection('user').add({
    name,
    username,
    email,
    password,
  });
};

export const addUserInfo = (photo, birthday, description) => {
  db.collection('user').set({
    photo,
    birthday,
    description,
  });
};

export const addPost = (UserId, description) => db.collection('post').add({
  userId: UserId,
  Description: description,
  Date: firebase.firestore.FieldValue.serverTimestamp(),
  imageURL: 'imagen',
  likes: '2',
});

export const getPosts = (callback) => {
  db.collection('post').orderBy('Date', 'desc')
    .onSnapshot((querySnapshot) => {
      console.log('Colección(querySnapshot)', querySnapshot);
      const post = [];
      querySnapshot.forEach((doc) => {
        console.log('info de los posts (doc) dentro del querySnapshot', doc.data());
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log('array de post', post);
      callback(post);
    });
};

export const uploadImage = (file, uid) => {
  const refStorage = firebase.storage().ref(`imgsPost/${uid}/${file.name}`);
  return refStorage.put(file);

  /* task.on('state_changed', (snapshot) => {
    const porcent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    $('.determinate').attr('style', `width: ${porcent}%`);
  },
  (err) => console.log(err),
  () => {
    task.snapshot.ref.getDownloadURL()
      .then((url) => {
        console.log(url);
        sessionStorage.setItem('imgNewPost', url);
      }).catch((err) => console.log(err));
  }); */
};
