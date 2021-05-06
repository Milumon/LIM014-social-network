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
  <div class="content-circles">
  <div class="circle"></div>
  <div class="semi-circle"></div>
  </div>
  <header>
    <h1 class="text">Find my Pawn!</h1>
  </header>
  <img src= "./img/fotoRegister.png" width = "300px">
  <div class="content-formSignUp">
  <form class="signUp-form" id="register-form" >
  <div> 
    <input type="text" class="inputForm" id="username" placeholder="Username" required />
  </div>
  <div>
    <input type="email" class="inputForm" id="email" placeholder="E-mail" required />
  </div>
  <div>
    <input type="password" class="inputForm" id="password" placeholder="Password" required />
  </div>
  <div class="msg">
  </div>
    <button type="submit" class="btn-signUp"><a href="#/login">Sign Up</a></button>
  </form>
  </div>
  <div class="content-google">
  <div class="content-Googletext">
  <h6>Or join us with</h6>
  </div>
  <button type="submit" class="btn-signUpGoogle" id="btnGoogle"></button>
  </div>
  <div class="content-returnLogin">
  <h6>Have an account?</h6>
  <button type="submit" class="btn-return-login"> <a href="#/login">Login</a></button>
  </div>
`;

  const registerForm = viewSignUp.querySelector('#register-form');
  const btnRegister = viewSignUp.querySelector('.btn-signUp');
  const inputForm = viewSignUp.querySelectorAll('.inputForm');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    // Obtener valores de datos de registros ingresados
    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;
    const contentMsg = viewSignUp.querySelector('.msg');
    // Registrar usuario
    createUser(email, password)
      .then(() => {
        registerForm.reset();
        sendEmail();
        logOut();
      })
      .catch((err) => {
        contentMsg.innerHTML = `<p>${err.message}</p>`;
        return contentMsg;
      });
  });

  const btnGoogle = viewSignUp.querySelector('#btnGoogle');
  console.log(document);

  btnGoogle.addEventListener('click', () => {
    signInGoogle();
  });

  return viewSignUp;
  /* ------------------------------handle back to Sign In----------------------------------- */
};
