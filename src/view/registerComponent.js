import {
  createUser, sendEmail, signInGoogle, // updateUsername,
} from '../controller/auth.js';

export default () => {
  console.log('ENTRÓ');
  const viewRegister = `
  <header>
    <img src="" class="title">
    <p class="text">Find my Pawn!</p>
  </header>
  <form id="register-form" class="signup-form">
    <input type="text" id="username" placeholder="Username" required />
    <input type="email" id="email" placeholder="E-mail" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit" class="btn-signUp"><a href="#/login">Sign Up</a></button> 
  </form>

  
  <button type="submit" class="btn-signUpGoogle" id="btnGoogle">Login with Google</button>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  const registerForm = divElement.querySelector('#register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = registerForm.querySelector('#email').value;
    const password = registerForm.querySelector('#password').value;
    const username = registerForm.querySelector('#username').value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        // updateUsername(username).catch((err) => console.log('UPDATE ', err));
        registerForm.reset();
        sendEmail();
        firebase.auth().signOut();
      })
      .catch((err) => console.log('CREATE ', err));

    /* const db = firebase.firestore();
    db.collection('users').add({
      User: username,
      Email: email,
      Password: password,
    })
      .then(); */
  });

  const btnGoogle = divElement.querySelector('#btnGoogle');
  console.log(document);

  btnGoogle.addEventListener('click', () => {
    // Accede al servicio auth de firebase para validar datos ingresados
    /* const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider); */

    signInGoogle();
  });

  return divElement;
  /* ------------------------------handle back to Sign In----------------------------------- */
};
