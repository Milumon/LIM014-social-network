/* ********DATA USER********* */
export const addUser = (userId, name, email, password) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  // Para crear un documento en la colección user con ID generado manualmente
  return db.collection('user').doc(userId).set({
    userId,
    name,
    mail: email,
    password,
    profilePhoto: '',
    descriptionProfile: '',
  });
};

export const getDataUser = (currentUserId) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  // .get() obtener los datos del documento de una colección
  return db.collection('user').doc(currentUserId).get();
};

export const updateUser = (idUser, profilePhoto, descriptionProfile) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(idUser)
    .update({ profilePhoto, descriptionProfile });
};

/* ********POST********* */
export const addPost = (userId, name, privacy, description, imageURL) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  // Para crear un documento en la colección post
  return db.collection('post').add({
    userId,
    name,
    description,
    privacy,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    imageURL: imageURL || '',
    likes: [],
  });
};

export const getPosts = (callback) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  return db.collection('post').orderBy('date', 'desc')
    // querySnapshot es una colección de post (doc)
    // Obtener en tiempo real los datos del doc
    .onSnapshot((querySnapshot) => {
      // console.log('Colección(querySnapshot)', querySnapshot);
      const post = [];
      // Se rrecore el querySnapshot
      querySnapshot.forEach((doc) => {
        // console.log( 'info de los posts (doc) dentro del querySnapshot',
        //     doc.data(),
        //   );
      // Se agrega los valores que obtiene de cada post
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log('array de post', post);
      callback(post);
    });
};

export const editPost = (idPost, description) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  return db.collection('post').doc(idPost).update({
    description,
  });
};

export const deletePost = (idPost) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  return db.collection('post').doc(idPost).delete();
};

export const countLikes = (idPost, likes) => {
  // Obtener acceso a Firestore
  const db = firebase.firestore();
  return db.collection('post').doc(idPost).update({ likes });
};

export const addComment = (userId, idPost, comment) => {
  const db = firebase.firestore();
  return db.collection('post').doc(idPost).collection('comments').add({
    userId,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    comment,
  });
};

/* ******** STORAGE ********* */
export const uploadImage = (file, location) => {
  const storageRef = firebase.storage().ref(`${location}/${file.name}`);
  return storageRef.put(file);
};
