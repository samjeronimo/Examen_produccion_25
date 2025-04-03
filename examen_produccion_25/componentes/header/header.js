function cargarMenu() {

    let menu = document.createElement('div');
    menu.className = "header-menu";

    let totalX = document.createElement('h2');
    totalX.className = "total-X";
    totalX.textContent = "Total X ="
    menu.appendChild(totalX);

    let total = document.createElement('h2');
    total.className = "total-slash";
    total.textContent = "Total / ="
    menu.appendChild(total);

    return menu;

}


export { cargarMenu }