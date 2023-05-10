function aplHP() {
  var btnluzhp = document.getElementById("btnluzhp");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzhp.innerHTML === "Apagar luces") {
    btnluzhp.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzhp.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzHP() {
  luzHp();
  aplHP();
}

function acpHP() {
  var btnpuertahs = document.getElementById("btnpuertahs");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertahs.innerHTML === "Cerrar puerta") {
    btnpuertahs.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertahs.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaHP() {
  puertaHp();
  acpHP();
}

function acvHP() {
  var btnventanahp = document.getElementById("btnventanahp");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanahp.innerHTML === "Cerrar ventana") {
    btnventanahp.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanahp.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaHP() {
  AbrirVentanaHp();
  acvHP();
}

function aplHS() {
  var btnluzhs = document.getElementById("btnluzhs");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzhs.innerHTML === "Apagar luces") {
    btnluzbp.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzhs.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzHS() {
  luzH1();
  aplHS();
}

function acpHS() {
  var btnpuertahs = document.getElementById("btnpuertahs");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertahs.innerHTML === "Cerrar puerta") {
    btnpuertahs.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertahs.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaHS() {
  puertaH1();
  acpHS();
}

function acvHS() {
  var btnventanahs = document.getElementById("btnventanahs");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanahs.innerHTML === "Cerrar ventana") {
    btnventanahs.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanahs.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaHS() {
  AbrirVentanaH1();
  acvHS();
}

function acvBP() {
  var btnventanabp = document.getElementById("btnventanabp");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanabp.innerHTML === "Cerrar ventana") {
    btnventanabp.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanabp.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaBP() {
  VentanaBa();
  acvBP();
}

function acpBP() {
  var btnpuertabp = document.getElementById("btnpuertabp");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertabp.innerHTML === "Cerrar puerta") {
    btnpuertabp.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertabp.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaBP() {
  PuertaBa();
  acpBP();
}

function aplBP() {
  var btnluzbp = document.getElementById("btnluzbp");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzbp.innerHTML === "Apagar luces") {
    btnluzbp.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzbp.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzBP() {
  luzBano1();
  aplBP();
}

function aplBH() {
  var btnluzbh = document.getElementById("btnluzbh");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzbh.innerHTML === "Apagar luces") {
    btnluzbh.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzbh.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzBH() {
  luzBano2();
  aplBH();
}

function acpBH() {
  var btnpuertabh = document.getElementById("btnpuertabh");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertabh.innerHTML === "Cerrar puerta") {
    btnpuertabh.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertabh.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaBH() {
  PuertaBa2();
  acpBH();
}

function acvBH() {
  var btnventanasa = document.getElementById("btnventanasa");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanasa.innerHTML === "Cerrar ventana") {
    btnventanasa.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanasa.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaBH() {
  VentanaBa2();
  acvBH();
}

function aplPH() {
  var btnluzph = document.getElementById("btnluzph");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzph.innerHTML === "Apagar luces pasillo habitaciones") {
    btnluzph.innerHTML = "Encender luces pasillo habitaciones";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzph.innerHTML = "Apagar luces pasillo habitaciones";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzPH() {
  luzPasillo1();
  aplPH();
}

function aplPP() {
  var btnluzpp = document.getElementById("btnluzpp");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzpp.innerHTML === "Apagar luces pasillo principal") {
    btnluzpp.innerHTML = "Encender luces pasillo principal";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzpp.innerHTML = "Apagar luces pasillo principal";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzPP() {
  luzPasillo2();
  aplPP();
}

function aplPC() {
  var btnluzpc = document.getElementById("btnluzpc");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzpc.innerHTML === "Apagar luces pasillo central") {
    btnluzpc.innerHTML = "Encender luces pasillo central";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzpc.innerHTML = "Apagar luces pasillo central";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzPC() {
  luzPasillo3();
  aplPC();
}

function aplSA() {
  var btnluzsa = document.getElementById("btnluzsa");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzsa.innerHTML === "Apagar luces") {
    btnluzsa.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzsa.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzSA() {
  luzSala();
  aplSA();
}

function acvSA() {
  var btnventanasa = document.getElementById("btnventanasa");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanasa.innerHTML === "Cerrar ventana") {
    btnventanasa.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanasa.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaSA() {
  VentanaSala();
  acvSA();
}

function aplCOC() {
  var btnluzcoc = document.getElementById("btnluzcoc");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzcoc.innerHTML === "Apagar luces") {
    btnluzcoc.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzcoc.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzCOC() {
  luzCocina();
  aplCOC();
}

function acvC() {
  var btnventanacoc = document.getElementById("btnventanacoc");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanacoc.innerHTML === "Cerrar ventana") {
    btnventanacoc.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanacoc.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaCOC() {
  acvC();
  VentanaVca();
}

function accPP() {
  var btnclosetpp = document.getElementById("btnclosetpp");
  var puertac = document.getElementById("closetcerrado");
  var puertaa = document.getElementById("closetabierto");
  if (btnclosetpp.innerHTML === "Cerrar closet pasillo principal") {
    btnclosetpp.innerHTML = "Abrir closet pasillo principal";
    puertac.innerHTML = "Closet cerrado";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Closet cerrado")
  } else {
    btnclosetpp.innerHTML = "Cerrar closet pasillo principal";
    puertaa.innerHTML = "Closet abierto";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Closet abierto")
  }
}

function closetPP() {
  accPP();
  AbrirCloH1();
}

function accPH() {
  var btnclosetph = document.getElementById("btnclosetph");
  var puertac = document.getElementById("closetcerrado");
  var puertaa = document.getElementById("closetabierto");
  if (btnclosetph.innerHTML === "Cerrar closet pasillo habitaciones") {
    btnclosetph.innerHTML = "Abrir closet pasillo habitaciones";
    puertac.innerHTML = "Closet cerrado";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Closet cerrado")
  } else {
    btnclosetph.innerHTML = "Cerrar closet pasillo habitaciones";
    puertaa.innerHTML = "Closet abierto";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Closet abierto")
  }
}

function closetPH() {
  accPH();
  AbrirClo1();
}

function accHS() {
  var btncloseths = document.getElementById("btncloseths");
  var puertac = document.getElementById("closetcerrado");
  var puertaa = document.getElementById("closetabierto");
  if (btncloseths.innerHTML === "Cerrar closet habitación secundaria") {
    btncloseths.innerHTML = "Abrir closet habitación secundaria";
    puertac.innerHTML = "Closet cerrado";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Closet cerrado")
  } else {
    btncloseths.innerHTML = "Cerrar closet habitación secundaria";
    puertaa.innerHTML = "Closet abierto";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Closet abierto")
  }
}

function closetHS() {
  accHS();
  AbrirClo2();
}

function accHP() {
  var btnclosethp = document.getElementById("btnclosethp");
  var puertac = document.getElementById("closetcerrado");
  var puertaa = document.getElementById("closetabierto");
  if (btnclosethp.innerHTML === "Cerrar closet habitación principal") {
    btnclosethp.innerHTML = "Abrir closet habitación principal";
    puertac.innerHTML = "Closet cerrado";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Closet cerrado")
  } else {
    btnclosethp.innerHTML = "Cerrar closet habitación principal";
    puertaa.innerHTML = "Closet abierto";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Closet abierto")
  }
}

function closetHP() {
  accHP();
  AbrirCloH2();
}

function aplG() {
  var btnluzg = document.getElementById("btnluzg");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzg.innerHTML === "Apagar luces") {
    btnluzg.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzg.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzG() {
  luzGarage();
  aplG();
}

function acpGA() {
  var btnpga = document.getElementById("btnpuertaga");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpga.innerHTML === "Cerrar garage") {
    btnpga.innerHTML = "Abrir garage";
    puertac.innerHTML = "Garage cerrado";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Garage cerrado")
  } else {
    btnpga.innerHTML = "Cerrar garage";
    puertaa.innerHTML = "Garage abierto";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Garage abierto")
  }
}

function puertaGA() {
  PuertaPcga();
  acpGA();
}

function acpG() {
  var btnpg = document.getElementById("btnpuertag");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpg.innerHTML === "Cerrar puerta") {
    btnpg.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpg.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaG() {
  PuertaPga();
  acpG();
}

function speakMessage(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
}

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

function luzPasillo3(){
 var onl= document.querySelector('.onl');
 onl.classList.toggle('oculto');
 
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

function VentanaBa(){
  var vb1a= document.querySelector('.vb1a');
  vb1a.classList.toggle('oculto');
  
}

function AbrirCloH1(){
  var cp1l= document.querySelector('.cp1l');
  cp1l.classList.toggle('oculto');
  
}
function AbrirCloH2(){
  var c2a= document.querySelector('.c2a');
  c2a.classList.toggle('oculto');
  
}
function AbrirClo1(){
  var cp2l= document.querySelector('.cp2l');
  cp2l.classList.toggle('oculto');
  
}

function AbrirClo2(){
  var c1a= document.querySelector('.c1a');
  c1a.classList.toggle('oculto');
  
}

function VentanaBa2(){
  var vb2a= document.querySelector('.vb2a');
  vb2a.classList.toggle('oculto');
  
}

function puertaH1(){
  var h1pa= document.querySelector('.h1pa');
  h1pa.classList.toggle('oculto');
  
}

function puertaHp(){
  var phpa= document.querySelector('.phpa');
  phpa.classList.toggle('oculto');
  
}

function VentanaNpa(){
  var npa= document.querySelector('.nva');
  npa.classList.toggle('oculto');
  
}

function AbrirVentanaHp(){
  var vhpa= document.querySelector('.vhpa');
  vhpa.classList.toggle('oculto');
  
}

function AbrirVentanaH1(){
  var h1va= document.querySelector('.h1va');
h1va.classList.toggle('oculto');
  
}

function puertaNpa(){
  var npa= document.querySelector('.npa');
  npa.classList.toggle('oculto');
  
}

function VentanaVa(){
  var va= document.querySelector('.va');
  va.classList.toggle('oculto');
  
}

function PuertaBa(){
  var pb1a= document.querySelector('.pb1a');
  pb1a.classList.toggle('oculto');
  
}

function VentanaVca(){
  var vca= document.querySelector('.vca');
  vca.classList.toggle('oculto');
  
}

function PuertaPga(){
  var pga= document.querySelector('.pga');
  pga.classList.toggle('oculto');
  
}

function PuertaPcga(){
  var pcga= document.querySelector('.pcga');
  pcga.classList.toggle('oculto');
  
}

function PuertaBa2(){
  var pb2a= document.querySelector('.pb2a');
  pb2a.classList.toggle('oculto');
  
}

function VentanaSala(){
  var vsa= document.querySelector('.vsa');
  vsa.classList.toggle('oculto');
  
}

function PuertaPasillo2(){
  var ppa= document.querySelector('.ppa');
  ppa.classList.toggle('oculto');
  
}

function showDropdown(id) {
  var dropdownMenu = document.getElementById(id);
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}
