
function luzSotano() {
  var sotanol = document.querySelector('.sotanol');
  sotanol.classList.toggle('oculto');
}


function luzEscaleras() {
  var escalerasl = document.querySelector('.escalerasl');
  escalerasl.classList.toggle('oculto');
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
function puertaSotano(){
  var psa= document.querySelector('.psa');
  psa.classList.toggle('oculto');
  
}
function puertaLavado(){
  var pcla= document.querySelector('.pcla');
  pcla.classList.toggle('oculto');
  
}
function puertaH1(){
  var h1pa= document.querySelector('.h1pa');
  h1pa.classList.toggle('oculto');
  
}
function puertaHp(){
  var phpa= document.querySelector('.phpa');
  phpa.classList.toggle('oculto');
  
}

function mostrarOpciones() {
  var opciones = document.querySelector(".dropdown-content1");
  if (opciones.style.display === "block") {
    opciones.style.display = "none";
  } else {
    opciones.style.display = "block";
  }
}

function mostrarOpciones1() {
  var opciones1 = document.querySelector(".dropdown-content1");
  if (opciones1.style.display === "block") {
    opciones1.style.display = "none";
  } else {
    opciones1.style.display = "block";
  }
}
function mostrarOpciones2() {
  var opciones2 = document.querySelector(".dropdown-content2");
  if (opciones2.style.display === "block") {
    opciones2.style.display = "none";
  } else {
    opciones2.style.display = "block";
  }
}
function mostrarOpciones3() {
  var opciones3 = document.querySelector(".dropdown-content3");
  if (opciones3.style.display === "block") {
    opciones3.style.display = "none";
  } else {
    opciones3.style.display = "block";
  }
}

/* Función para cerrar el menú desplegable */
function cerrarOpciones() {
  var opciones = document.querySelector(".dropdown-content1");
  opciones.style.display = "none";
}
