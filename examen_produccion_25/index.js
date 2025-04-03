import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";

function caregarDOM() {

    let DOM = document.querySelector('#root');

    DOM.appendChild(cargarMenu());
    DOM.appendChild(cargarBloques());

    return DOM;

}

caregarDOM();


export { caregarDOM }