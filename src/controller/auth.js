export const createUser = (email, password) => {
  console.log('ingresó a create');
  const user = firebase.auth();
  firebase.auth().signOut();
  return user.createUserWithEmailAndPassword(email, password);
};

/* .createUserWithEmailAndPassword(email, password), */
/* .then((result) => {
    // resetear el formulario una vez ingresado los datos
      result.user.updateProfile({
        displayName: username,
      });
      console.log(result);
      const configuration = {
        url: 'http://localhost:5000/#/timeline',
      };
      result.user.sendEmailVerification(configuration).catch((error) => console.log(error));

      firebase.auth().signOut();
      // Materialize.toast(`Welcome ${username}`);
    })
    .catch((error) => console.error(error)); */

export const sendEmail = () => {
  console.log('ingresó a sendemail');

  const configuration = {
    url: 'http://localhost:5000/#/login',
  };

  const user = firebase.auth().currentUser;
  return user.sendEmailVerification(configuration);
};

export const updateUsername = (username) => {
  console.log('ingresó a username');

  const user = firebase.auth().currentUser;

  return user.updateProfile({
    displayName: username,
  });
};

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => console.log('USUARIOOOOOOO', result.user.username))
    .catch((error) => console.error('ERROOOOOOOOR', error));
};
