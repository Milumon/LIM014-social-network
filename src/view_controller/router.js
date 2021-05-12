import {
  components,
} from '../view/index.js';
import {
  currentUser,
  getDataUser,
} from '../controller/firebase-auth.js';
// aqui exportaras las funciones que necesites

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
      const user = currentUser((userd) => {
        console.log("primer ", userd);
      });
      console.log("gaaaaaaaaaaaa", user);
      if (user !== null) {
        getDataUser(user.uid).then((doc) => {
          container.appendChild(components.timeline(doc.data()));
        });
      }
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