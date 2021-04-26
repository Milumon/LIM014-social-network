import {
  createUser,
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
    <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
    <button type="submit" class="btn-signUp">Sign up</button>
  </form>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  const registerForm = divElement.querySelector('#register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = registerForm.querySelector('#email').value;
    const password = registerForm.querySelector('#password').value;
    const username = registerForm.querySelector('#username').value;

    createUser(email, password, username);
  });

  return divElement;
  /* ------------------------------handle back to Sign In----------------------------------- */
};
