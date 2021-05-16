import { components } from '../view/index.js';
import { onAuthStateChanged } from '../controller/firebase-auth.js';
import { getDataUser } from '../controller/firebase-firestore.js';

const changeView = (route) => {
  console.log('test changeView', route);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': {
      container.appendChild(components.login());
      break;
    }
    case '#/': {
      container.appendChild(components.login());
      break;
    }
    case '#/login': {
      container.appendChild(components.login());
      break;
    }
    case '#/timeline': {
      onAuthStateChanged((user) => {
        // Se llama al onAuthStateChanged para verificar si el usuario esta logeado
        if (user !== null) {
          // identificar documento por uid de una colección
          getDataUser(user.uid).then((doc) => {
            // resolver promesa para acceder a los datos del documento (doc.data())
            container.appendChild(components.timeline(doc.data()));
          });
        }
      });
      break;
    }
    default:
      break;
  }
};

export {
  changeView,
};
