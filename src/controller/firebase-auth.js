/* ********ADMINISTRAR USUARIOS********* */
export const onAuthStateChanged = (cb) => {
  firebase.auth().onAuthStateChanged(cb);
};

export const getCurrentUser = () => firebase.auth().currentUser;

/* ********SIG UP********* */
export const createUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = firebase.auth();
  // Crear usuario con correo electrónico y contraseña
  return user.createUserWithEmailAndPassword(email, password);
};

export const sendEmail = () => {
  const configuration = {
    url: 'http://localhost:5000/#/',
  };
  // Enviar e-mail de verificación
  return getCurrentUser().sendEmailVerification(configuration);
};

/* ********LOG IN********* */

export const loginUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = firebase.auth();
  // Usuarios existentes puedan acceder con su dirección de correo electrónico y una contraseña
  return user.signInWithEmailAndPassword(email, password);
};

export const signInGoogle = () => {
  const user = firebase.auth();
  // Autenticar con Firebase a través del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  // Para acceder con una ventana emergente
  user.signInWithPopup(provider);
};

// Salir de sesión de un usuario
export const logOut = () => firebase.auth().signOut();
