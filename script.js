
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
function luzHp() {
  var hpl = document.querySelector('.hpl');
  hpl.classList.toggle('oculto');
}
function luzHnl() {
  var hnl= document.querySelector('.hnl');
  hnl.classList.toggle('oculto');
}

function luzComedor() {
  var comedorl= document.querySelector('.comedorl');
  comedorl.classList.toggle('oculto');

}
function luzBano1() {
  var bano1l= document.querySelector('.baño1l');
  bano1l.classList.toggle('oculto');
  
}
function luzBano2() {
  var bano2l= document.querySelector('.b2l');
  bano2l.classList.toggle('oculto');
  
}

function luzCocina() {
  var cocinal= document.querySelector('.cocinal');
  cocinal.classList.toggle('oculto');
  
}
function luzGarage() {
  var garagel= document.querySelector('.garagel');
  garagel.classList.toggle('oculto');
  
}

function luzPasillo1() {
  var pasillocl= document.querySelector('.pasillocl');
  pasillocl.classList.toggle('oculto');
  
}
function luzPasillo2() {
  var pasillopl= document.querySelector('.pasillopl');
  pasillopl.classList.toggle('oculto');
  
}

function luzSala() {
  var salal= document.querySelector('.salal');
  salal.classList.toggle('oculto');
  
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