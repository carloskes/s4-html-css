//1. Buscar elementos del DOM.
const tarjeta = document.querySelector("#tarjeta");
const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const rojo = document.querySelector("#rojo");
const restablecer = document.querySelector("#restablecer");

//2. Escuchar el click de cada botón y cambiar el color.
azul.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "blue";
});

verde.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "green";
});

rojo.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "red";
});

//3. Restablecer el color original.
restablecer.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "white";
});