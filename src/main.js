// Este es el punto de entrada de tu aplicacion
import {
  changeView,
} from './view_controller/router.js';

// 36.20

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};

window.addEventListener('load', init);
