export const createUser = (email, password) => {
  console.log('ingresó a create');
  const user = firebase.auth();
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

/* export const updateUsername = (username) => {
  console.log('ingresó a username');

  const user = firebase.auth().currentUser;

  return user.updateProfile({
    displayName: username,
  });
};
 */
export const loginUser = (email, password) => {
  const user = firebase.auth();
  return user.signInWithEmailAndPassword(email, password);
};

export const sendRecoverPass = (email) => {
  const auth = firebase.auth();
  return auth.sendPasswordResetEmail(email);
};

export const logOut = () => firebase.auth().signOut();

export const signInGoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
