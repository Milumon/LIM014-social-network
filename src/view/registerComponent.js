import {
  createUser,
  sendEmail,
  signInGoogle,
  logOut, // updateUsername,
} from '../controller/firebase-auth.js';

export default () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.classList.add('container-SignUp');
  viewSignUp.innerHTML = `
  <header>
    <h1 class="text">Find my Pawn!</h1>
  </header>
  <form id="register-form" class="signup-form">
  <div> 
  <input type="text" id="username" placeholder="Username" required />
  </div>
  <div>
    <input type="email" id="email" placeholder="E-mail" required />
  </div>
  <div>
    <input type="password" id="password" placeholder="Password" required />
  </div>
    <button type="submit" class="btn-signUp"><a href="#/login">Sign Up</a></button>
  </form>
  <div class="content-google">
  <h6>Or join us with</h6>
  <button type="submit" class="btn-signUpGoogle" id="btnGoogle"></button>
  </div>
`;

  const registerForm = viewSignUp.querySelector('#register-form');
  const btnRegister = viewSignUp.querySelector('.btn-signUp');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();

    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;
    // const username = divElement.querySelector('#username').value;

    createUser(email, password)
      .then((result) => {
        console.log('se registró ', result);
        // updateUsername(username).catch((err) => console.log('UPDATE ', err));
        registerForm.reset();
        sendEmail();
        logOut();
        console.log('salio', result, firebase.auth());
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

  const btnGoogle = viewSignUp.querySelector('#btnGoogle');
  console.log(document);

  btnGoogle.addEventListener('click', () => {
    // Accede al servicio auth de firebase para validar datos ingresados
    /* const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider); */

    signInGoogle();
  });

  return viewSignUp;
  /* ------------------------------handle back to Sign In----------------------------------- */
};
