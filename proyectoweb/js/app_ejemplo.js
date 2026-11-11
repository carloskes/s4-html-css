//1. Buscar elementos del DOM.
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#boton");
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

//2. Escuchar el evento click del botón.
boton.addEventListener("click", function () {
    //3. Cambiar el contenido del mensaje.
    mensaje.textContent = "¡Bienvenidos a JavaScript!";
});

//4. Escuchar el envío del formulario.
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    //5. Verificar que el campo no esté vacío.
    if (nombre.value == "") {
        saludo.textContent = "Debes ingresar tu nombre";
    } else {
        saludo.textContent = "Bienvenido a la clase " + nombre.value;
    }
});