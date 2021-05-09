import {
  components,
} from '../view/index.js';

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
    case '#/register': {
      container.appendChild(components.register());
      break;
    }
    case '#/timeline': {
      console.log('TIMELINE');
      // container.appendChild(components.header());
      container.appendChild(components.timeline());
      break;
    }
    default:
      break;
  }
};

export {
  changeView,
};
