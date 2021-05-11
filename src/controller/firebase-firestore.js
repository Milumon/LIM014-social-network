const db = firebase.firestore();
export const addUser = (name, email, password) => {
  db.collection('user').add({
    name,
    email: email || 'noEmail',
    password: password || 'noPassword',
  });
};

export const addUserInfo = (photo, birthday, description) => {
  db.collection('user').set({
    photo,
    birthday,
    description,
  });
};

export const addPost = (userId, name, privacy, description, imageURL) => db.collection('post').add({
  userId,
  name,
  description,
  privacy,
  date: firebase.firestore.FieldValue.serverTimestamp(),
  imageURL,
  likes: '2',
});

export const getPosts = (callback) => {
  db.collection('post').orderBy('date', 'desc')
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

export const deletePost = (idPost) => db.collection('post').doc(idPost.id).delete();

export const uploadImage = (file, location) => {
  const storageRef = firebase.storage().ref(`${location}/${file.name}`);
  return storageRef.put(file);
};

/* export const uploadImage = (file, uid, determinate) => {
  const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);
  const task = refStorage.put(file);

  task.on('state_changed', (snapshot) => {
    const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    determinate.style.width = `${porcentaje}px`;
  },

  (err) => {
    alert(err);
  },
  () => {
    task.snapshot.ref
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        sessionStorage.setItem('imgNewPost', url);
      })
      .catch((err) => {
        alert(err);
      });
  });
};
 */