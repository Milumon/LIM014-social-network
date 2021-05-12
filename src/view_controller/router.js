import {
  components,
} from '../view/index.js';
import {
  getDataUser,
  onAuthStateChanged,
} from '../controller/firebase-auth.js';
// aqui exportaras las funciones que necesites

// const createChild = (element, child) => {
// element.appendChild(child);}
// createChild(container, components.login());

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
        if (user !== null) {
          console.log('USER IDDDDDDDDDDDD ', user.uid);
          getDataUser(user.uid).then((doc) => {
            console.log('dataaaaaaaaa ', doc);
            container.appendChild(components.timeline(doc.data()));
          });
        }
      });

      // container.appendChild(components.header());
      break;
    }
    default:
      break;
  }
};

export {
  changeView,
};
