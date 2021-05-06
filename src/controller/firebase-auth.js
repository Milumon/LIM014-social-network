// Acceso al servicio de Firebase auth
const user = firebase.auth();

// Registrar usuario
export const createUser = (email, password) => user.createUserWithEmailAndPassword(email, password);

export const sendEmail = () => {
  console.log('ingresó a sendemail');

  const configuration = {
    url: 'http://localhost:5000/#/',
  };
  // Enviar e-mail de verificación
  return user.currentUser.sendEmailVerification(configuration);
};

/* export const updateUsername = (username) => {
  console.log('ingresó a username');

  const user = firebase.auth().currentUser;

  return user.updateProfile({
    displayName: username,
  });
};
 */
export const loginUser = (email, password) => user.signInWithEmailAndPassword(email, password);

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