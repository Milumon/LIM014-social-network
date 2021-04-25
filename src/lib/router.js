import { components } from '../view/index.js'

// aqui exportaras las funciones que necesites


const changeView = (route) => {
    console.log('test changeView', route);
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (route){
        case '#/': {
            return container.appendChild(components.login())
        }
        case '#/login': {
            return container.appendChild(components.login())
        }
        case '#/register': {
            return container.appendChild(components.register())
        }
        case '#/timeline': {
            console.log('TIMELINE')
            return container.appendChild(components.timeline())
        }
        default:
            break;
    }
 
};

export {changeView}