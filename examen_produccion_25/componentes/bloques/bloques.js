import { bloque } from "./itemBloque.js";

function cargarBloques() {

    let bloques = document.createElement('div');
    bloques.className = "Bloques";

    bloques.addEventListener('click', bloque())

    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());
    bloques.appendChild(bloque());

    return bloques;

}


export { cargarBloques }