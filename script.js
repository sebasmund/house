
function luzSotano() {
  var sotanol = document.querySelector('.sotanol');
  sotanol.classList.toggle('oculto');
}

function luzLavado() {
  var lavadol = document.querySelector('.lavadol');
  lavadol.classList.toggle('oculto');
}

function luzH1() {
  var h1l = document.querySelector('.h1l');
  h1l.classList.toggle('oculto');
}

function mostrarOpciones() {
  var opciones = document.querySelector(".dropdown-content");
  if (opciones.style.display === "block") {
    opciones.style.display = "none";
  } else {
    opciones.style.display = "block";
  }
}

/* Función para cerrar el menú desplegable */
function cerrarOpciones() {
  var opciones = document.querySelector(".dropdown-content");
  opciones.style.display = "none";
}