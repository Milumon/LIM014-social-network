import {
  createUser,
  sendEmail,
  signInGoogle,
  logOut,
  loginUser,
} from '../controller/firebase-auth.js';
import { addUser } from '../controller/firebase-firestore.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container-login');
  viewLogin.innerHTML = `

  <div class="container"> <div class="containerTwo"> 
    <div class="forms-container">
      <div class="signin-signup">

        <form class="sign-in-form" id="login-form">
          <h2 class="title">Sign in</h2>
          <!-- CAMPO DE CORREO -->
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="email" id="email-login" placeholder="E-mail" required />
          </div>
          <!-- CAMPO DE CONTRASEÑA -->
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password-login" placeholder="Password" required />
          </div>
          <!-- MENSAJE DE ERROR -->
          <div class="msg">
          </div>
          <!-- BOTÓN DE ENVIAR -->
          <input type="submit" class="btn" id="btnSubmitLogin" value="Login"/>

          <p class="social-text">Or enter with ...</p>

          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-google" id="btnGoogle"></i>
            </a>
          </div> <!-- social-media -->

        </form> <!-- login-form -->


        <form class="sign-up-form" id="register-form">
          <h2 class="title">Sign up</h2>
          <!-- CAMPO DE USUARIO -->
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="username-register" placeholder="Username" required />
          </div>
          <!-- CAMPO DE CORREO -->
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email"id="email-register" placeholder="E-mail" required />
          </div>
          <!-- CAMPO DE CONTRASEÑA -->
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password-register" placeholder="Password" required />
          </div>
          <!-- MENSAJE DE ERROR -->
          <div class="msg">
          </div>
          <!-- BOTÓN DE ENVIAR -->
          <input type="submit" class="btn" id="btn-signUp" value="Sign Up" />

          <p class="social-text">Or Sign up with ...</p>

          <div class="social-media">
            <a href="#" class="social-icon">
            <i class="fab fa-google" id="btnGoogle"></i>
            </a>
          </div> <!-- social-media -->

        </form> <!-- register-form -->
 

      </div> <!-- signin-signup -->
    </div> <!-- container-forms --> 

  <div class="panels-container">

    <div class="panel left-panel">
      <div class="content">
        <h3>¿Aún no te registras?</h3>
        <p>
          Llena tus datos y podrás formar parte de nuestra comunidad
        </p>
        <button class="btn transparent" id="sign-up-btn">
          REGISTRARSE
        </button>
      </div>
      <img src="img/log.svg" class="image" alt="" />
    </div> <!-- left-panel -->

    <div class="panel right-panel">
      <div class="content">
        <h3>¿Te encuentras registrado?</h3>
        <p>
          Ingresa tus datos y accede a tu comunidad
        </p>
        <button class="btn transparent" id="sign-in-btn">
          INGRESAR
        </button>
      </div>
      <img src="img/register.svg" class="image" alt="" />
    </div> <!-- right-panel -->

  </div> <!-- panels-container --> 
</div> <!-- container -->
</div> <!-- container -->

  `;

  // const loginForm = divElement.querySelector('#login-form');

  const btnSubmitLogin = viewLogin.querySelector('#btnSubmitLogin');
  const btnLoginMode = viewLogin.querySelector('#sign-in-btn');
  const btnSignUpMode = viewLogin.querySelector('#sign-up-btn');
  const container = viewLogin.querySelector('.container');
  const containerTwo = viewLogin.querySelector('.containerTwo');

  btnSignUpMode.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    containerTwo.classList.add('sign-up-mode');
  });

  btnLoginMode.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
    containerTwo.classList.remove('sign-up-mode');
  });

  /* EVENTO DE LOGEO */

  btnSubmitLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = viewLogin.querySelector('#email-login').value;
    const password = viewLogin.querySelector('#password-login').value;
    loginUser(email, password).then((data) => {
      if (data.user.emailVerified) {
        window.location.hash = '#/timeline';
      } else {
        alert('user no verificó');
      }
    })
      .catch((err) => alert(err));
  });

  const registerForm = viewLogin.querySelector('#register-form');
  const btnRegister = viewLogin.querySelector('#btn-signUp');
  const email = viewLogin.querySelector('#email-register').value;
  const password = viewLogin.querySelector('#password-register').value;

  /* EVENTO DE REGISTRO */

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    // Obtener valores de datos de registros ingresados
    const contentMsg = viewLogin.querySelector('.msg');
    // Registrar usuario
    createUser(email, password)
      .then(() => {
        registerForm.reset();
        sendEmail();
        logOut();
        window.location.hash = '#/timeline';
      })
      .then(() => {
        addUser(firebase.auth().currentUser, email, password);
      })
      .catch((err) => {
        contentMsg.innerHTML = `<p>${err.message}</p>`;
        setTimeout(() => {
          contentMsg.innerHTML = '';
        }, 3000);
      });
  });

  const btnGoogle = viewLogin.querySelector('#btnGoogle');

  btnGoogle.addEventListener('click', () => {
    signInGoogle()
      .then(() => {
        addUser(firebase.auth().currentUser, email, password);
      })
      .then(() => {
        if (firebase.auth().currentUser) {
          window.location.hash = '#/timeline';
        }
      });
  });

  return viewLogin;
};
