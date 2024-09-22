/* JUSTIFY-CONTENT */
function justificar(configuracion){
    const contenedor = document.querySelector(".box");
    contenedor.style.justifyContent = configuracion;
}
/* ALING-ITEMS */
function items(configuracion){
    const contenedor = document.querySelector(".box2");
    contenedor.style.alignItems = configuracion;
}
/* ALING-CONTENT */
function content(configuracion){
    const contenedor = document.querySelector(".box3");
    contenedor.style.alignContent = configuracion;
}