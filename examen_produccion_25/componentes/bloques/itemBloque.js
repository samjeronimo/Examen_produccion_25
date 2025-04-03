import { cargarBloques } from "./bloques.js";
import { agregarCheck, agregarCruz } from "./funcionesBloque.js";

function bloque() {

    let sub_bloques = document.createElement('div');
    sub_bloques.className = "sub-bloques";

    let btns = document.createElement('div');
    btns.className = "btns";
    sub_bloques.appendChild(btns);

    let item1 = document.createElement('p');
    item1.className = "btn-X";
    item1.textContent = "X";
    btns.appendChild(item1);

    let btns2 = document.createElement('div');
    btns2.className = "btns2";
    sub_bloques.appendChild(btns2);

    let item2 = document.createElement('p');
    item2.className = "btn-slash";
    item2.textContent = "/";
    btns2.appendChild(item2);

    btns.addEventListener("click", () => {
        let DOM = document.querySelector('.sub-bloques');
        DOM.innerHTML = "";
    })

    btns2.addEventListener("click", () => {
        let DOM = document.querySelector('.sub-bloques');
        DOM.innerHTML = "";
    })

    return sub_bloques;

}



export { bloque }