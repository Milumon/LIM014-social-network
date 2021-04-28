import {
  logOut,
} from '../controller/auth.js';

export default () => {
  const viewHome = ` 
    <h2>WORKS</h2>
    
    <button type="submit" id="btnRegister" class="newAccount"><a href="">Salir</a></button>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const btnSingOut = divElement.querySelector('button');

  btnSingOut.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('LOG OUT ENVIADO');

    logOut().then(() => {
      window.location.hash = '#/login';
    });
  });

  return divElement;
};
