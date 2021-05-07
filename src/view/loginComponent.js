import {
  loginUser
} from '../controller/firebase-auth.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container-login');
  viewLogin.innerHTML = `
  <div class="content-circles">
  <div class="circle"></div>
  <div class="semi-circle"></div>
  </div>
  <header>
    <h1 class="text">Find my Pawn!</h1>
  </header>
  <div class='content-images'>
  <div class='firstgato'>
  <img src= "./img/gato miau.png" width = "230px" >
  </div>
  <div class='secondgato'>
  <img src= "./img/gato miau 2.png" width = "130px" >
  </div>
  </div>
  <div class="container-formLogin">
  <form id="login-form">
  <div>
    <input type="email" id="email" placeholder="E-mail" required />
  </div>
  <div>
    <input type="password" id="password" placeholder="Password" required />
  </div> 
  <button type="submit" class="btn-login"><a href="#/timeline">Log in</a></button>
  </form>
  </div>
  <div class="content-google">
  <div class="content-Googletext">
  <h6>or enter with ...</h6> 
  <button type="submit" class="btn-signInGoogle" id="btnGoogle"></button>
  </div>
  <div class="content-returnSignUp">
  <h6>Don´t Have an account?</h6>
  <button type="submit" class="btn-register"><a href="#/register">Create an account</a></button>
  </div>
    `;

  // const loginForm = divElement.querySelector('#login-form');
  const btnLogin = viewLogin.querySelector('.btn-login');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('SUBMIT ENVIADO');

    const email = viewLogin.querySelector('#email').value;
    const password = viewLogin.querySelector('#password').value;

    loginUser(email, password).then((data) => {
        if (data.user.emailVerified) {
          window.location.hash = '#/timeline';
        } else {
          alert('user no verificó');
        }
      })
      .catch((err) => alert(err));
  });

  return viewLogin;
};