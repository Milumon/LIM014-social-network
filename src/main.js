// Este es el punto de entrada de tu aplicacion
import { changeView } from './controller/router.js';

// 36.20

const init = () => {
  window.addEventListener('hashchange', () => {
    console.log('init', window.location.hash);
    changeView(window.location.hash);
  });
};

window.addEventListener('load', init);
