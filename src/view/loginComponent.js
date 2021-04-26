import {
  loginUser,
} from '../controller/auth.js';

export default () => {
  const viewLogin = `
  <section class="logIn">
    <header>
      <img src="" class="title">
      <p class="text">¡ Find my Pawn !</p>
    </header>
    <form id="login-form">
      <input type="email" id="email" placeholder="E-mail" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit" class=""><a href="#/timeline">Log in</a></button>
    </form>
    <p class="text">or enter with ...</p>
    <section class="option">
      <img src="" class="gmail">
      <img src="" class="facebook">
    </section>
    <p class="text">¿Don't you have an account in Find my Pawn?</p>
    <button type="submit" id="btnRegister" class="newAccount"><a href="#/register">Create an account</a></button>
  </section>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  const loginForm = divElement.querySelector('#login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('SUBMIT ENVIADO');

    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;

    loginUser(email, password);
  });

  return divElement;
};
