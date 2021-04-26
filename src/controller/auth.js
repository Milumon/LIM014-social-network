export const createUser = (email, password, username) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
    // resetear el formulario una vez ingresado los datos
      console.log(`enviando ${email} password ${password} username ${username}`);
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
    .catch((error) => console.error(error));

  // creando método para autenticar email y password
  // Nota; para autenticar el usuario, habilitar en el proyecto de SN Laboratoria/autenticacion
};
