import { loginUser } from '../controller/firebase-auth.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container-login');
  viewLogin.innerHTML = `
  <header>
    <h1 class="text">Find my Pawn!</h1>
  </header>
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
  <div class="content-googleLogin">
  <h6>or enter with ...</h6>
  <button type="submit" class="btn-signUpGoogle" id="btnGoogle"></button>
  </div>
  <div class="content-returnLogin">
  <h6>Don´t Have an account?</h6>
  <button type="submit"  class="newAccount" id="btnRegister"><a href="#/register">Create an account</a></button>
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
