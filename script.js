// Primero, se debe comprobar si el navegador es compatible con la API de reconocimiento de voz
if ('webkitSpeechRecognition' in window) {
  // Se crea una instancia de la API de reconocimiento de voz
  const recognition = new webkitSpeechRecognition();
  
  // Se configuran las opciones del reconocimiento
  recognition.continuous = true; // El reconocimiento se detiene después de una sola frase
  recognition.lang = 'es-ES'; // Se establece el idioma del reconocimiento
  
  // Se agrega un evento para detectar cuando el usuario comienza a hablar
  recognition.onstart = function() {
    console.log('¡Comenzó el reconocimiento de voz!');
  }
  
  // Se agrega un evento para detectar cuando el usuario termina de hablar
  recognition.onresult = function(event) {
    // Se obtiene la última frase que el usuario pronunció
    const lastResult = event.results[event.results.length - 1];
    
    // Se obtiene el texto de la frase
    const text = lastResult[0].transcript.toLowerCase();
    
    // Se muestra el texto en la consola
    console.log(`Usuario dijo: ${text}`);
    
    // Se ejecuta una función en base al comando de voz
    if (text.includes('encender sótano')) {
      luzSO();
    } else if (text.includes('apagar sótano')) {
      luzSO();
    } 
    else if (text.includes('encender luz lavado')) {
      luzL();
    }else if (text.includes('apagar luz lavado')) {
      luzL();
    } else if (text.includes('abrir puerta lavado')) {
      puertaL();
    }else if (text.includes('cerrar puerta lavado')) {
      puertaL();
    }else if (text.includes('encender luz bebé')) {
      luzHB();
    }else if (text.includes('apagar luz bebé')) {
      luzHB();
    }else if (text.includes('abrir puerta bebé')) {
      puertaHB();
    }else if (text.includes('cerrar puerta bebé')) {
      puertaHB();
    }else if (text.includes('abrir ventana bebé')) {
      ventanaHB();
    }else if (text.includes('cerrar ventana bebé')) {
      ventanaHB();
    }else if (text.includes('encender luz comedor')) {
      luzCOM();
    }else if (text.includes('apagar luz comedor')) {
      luzCOM();
    }else if (text.includes('abrir ventana comedor')) {
      ventanaCOM();
    }else if (text.includes('cerrar ventana comedor')) {
      ventanaCOM();
    }else if (text.includes('encender luz uno')) {
      luzHP();
    }else if (text.includes('apagar luz uno')) {
      luzHP();
    }else if (text.includes('abrir puerta uno')) {
      puertaHP();
    }else if (text.includes('cerrar puerta uno')) {
      puertaHP();
    }else if (text.includes('abrir ventana uno')) {
      ventanaHP();
    }else if (text.includes('cerrar ventana uno')) {
      ventanaHP();
    }else if (text.includes('encender luz dos')) {
      luzHS();
    }else if (text.includes('apagar luz dos')) {
      luzHS();
    }else if (text.includes('abrir puerta dos')) {
      puertaHS();
    }else if (text.includes('cerrar puerta dos')) {
      puertaHS();
    }else if (text.includes('abrir ventana dos')) {
      ventanaHS();
    }else if (text.includes('cerrar ventana dos')) {
      ventanaHS();
    }else if (text.includes('encender luz baño uno')) {
      luzBP();
    }else if (text.includes('apagar luz baño uno')) {
      luzBP();
    }else if (text.includes('abrir puerta baño uno')) {
      puertaBP();
    }else if (text.includes('cerrar puerta baño uno')) {
      puertaBP();
    }else if (text.includes('abrir ventana baño uno')) {
      ventanaBP();
    }else if (text.includes('cerrar ventana baño uno')) {
      ventanaBP();
    }else if (text.includes('encender luz baño dos')) {
      luzBH();
    }else if (text.includes('apagar luz baño dos')) {
      luzBH();
    }else if (text.includes('abrir puerta baño dos')) {
      puertaBH();
    }else if (text.includes('cerrar puerta baño dos')) {
      puertaBH();
    }else if (text.includes('abrir ventana baño dos')) {
      ventanaBH();
    }else if (text.includes('cerrar ventana baño dos')) {
      ventanaBH();
    }else if (text.includes('encender luz pasillo uno')) {
      luzPH();
    }else if (text.includes('apagar luz pasillo uno')) {
      luzPH();
    }else if (text.includes('encender luz pasillo dos')) {
      luzPP();
    }else if (text.includes('apagar luz pasillo dos')) {
      luzPP();
    }else if (text.includes('encender luz pasillo tres')) {
      luzPC();
    }else if (text.includes('apagar luz pasillo tres')) {
      luzPC();
    }else if (text.includes('encender luz sala')) {
      luzSA();
    }else if (text.includes('apagar luz sala')) {
      luzSA();
    }else if (text.includes('abrir ventana sala')) {
      ventanaSA();
    }else if (text.includes('cerrar ventana sala')) {
      ventanaSA();
    }else if (text.includes('encender luz cocina')) {
      luzCOC();
    }else if (text.includes('apagar luz cocina')) {
      luzCOC();
    }else if (text.includes('abrir ventana cocina')) {
      ventanaCOC();
    }else if (text.includes('cerrar ventana cocina')) {
      ventanaCOC();
    }else if (text.includes('abrir closet pasillo uno')) {
      closetPP();
    }else if (text.includes('cerrar closet pasillo uno')) {
      closetPP();
    }else if (text.includes('abrir closet pasillo dos')) {
    closetPH();
    }else if (text.includes('cerrar closet pasillo dos')) {
      closetPH();
    }else if (text.includes('abrir closet habitación dos')) {
      closetHS();
      }else if (text.includes('cerrar closet habitación dos')) {
        closetHS();
      }else if (text.includes('abrir closet habitación uno')) {
        closetHP();
        }else if (text.includes('cerrar closet habitación uno')) {
          closetHP();
        }else if (text.includes('encender luz garaje')) {
          luzG();
        }else if (text.includes('apagar luz garaje')) {
          luzG();
        }else if (text.includes('abrir puerta garaje')) {
          puertaGA();
        }else if (text.includes('cerrar puerta garaje')) {
          puertaGA();
        }else if (text.includes('abrir puerta persona')) {
          puertaG();
        }else if (text.includes('cerrar puerta persona')) {
          puertaG();
        }else {
      console.log('No se reconoció el comando de voz');
    }
  }
  
  // Se agrega un evento para detectar errores
  recognition.onerror = function(event) {
    console.log(`Error de reconocimiento: ${event.error}`);
  }
  
  // Se inicia el reconocimiento de voz cuando se hace clic en un botón
  document.getElementById('btn-reconocimiento').addEventListener('click', function() {
    recognition.start();
  });
}


function aplSO() {
  var btnluzso = document.getElementById("btnluzso");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzso.innerHTML === "Apagar luces") {
    btnluzso.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzso.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzSO() {
  luzSotano(); 
  luzEscaleras();
  aplSO();
}

function acpSO() {
  var btnpuertaso = document.getElementById("btnpuertaso");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertaso.innerHTML === "Cerrar puerta") {
    btnpuertaso.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertaso.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaSO() {
  puertaSotano();
  acpSO();
}

function acpL() {
  var btnpuertal = document.getElementById("btnpuertal");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertal.innerHTML === "Cerrar puerta") {
    btnpuertal.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertal.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaL() {
  puertaLavado();
  acpL();
}

function aplL() {
  var btnluzl = document.getElementById("btnluzl");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzl.innerHTML === "Apagar luces") {
    btnluzl.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzl.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzL() {
  luzLavado();
  aplL();
}

function aplHB() {
  var btnluzhb = document.getElementById("btnluzhb");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzhb.innerHTML === "Apagar luces") {
    btnluzhb.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzhb.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzHB() {
  luzHnl();
  aplHB();
}

function acpHB() {
  var btnpuertahb = document.getElementById("btnpuertahb");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnpuertahb.innerHTML === "Cerrar puerta") {
    btnpuertahb.innerHTML = "Abrir puerta";
    puertac.innerHTML = "Puerta cerrada";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 4500);
    speakMessage("Puerta cerrada")
  } else {
    btnpuertahb.innerHTML = "Cerrar puerta";
    puertaa.innerHTML = "Puerta abierta";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 4500);
    speakMessage("Puerta abierta")   
  }
}

function puertaHB() {
  puertaNpa();
  acpHB();
}

function acvHB() {
  var btnventanahb = document.getElementById("btnventanahb");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanahb.innerHTML === "Cerrar ventana") {
    btnventanahb.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanahb.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaHB() {
  VentanaNpa();
  acvHB();
}

function aplCOM() {
  var btnluzcom = document.getElementById("btnluzcom");
  var puertac = document.getElementById("puertacerrada");
  var puertaa = document.getElementById("puertaabierta");
  if (btnluzcom.innerHTML === "Apagar luces") {
    btnluzcom.innerHTML = "Encender luces";
    puertac.innerHTML = "Luces apagadas";
    puertac.style.display = "block";
    setTimeout(() => {
      puertac.style.display = 'none';
    }, 2500);
    speakMessage("Luces apagadas")
  } else {
    btnluzcom.innerHTML = "Apagar luces";
    puertaa.innerHTML = "Luces encedidas";
    puertaa.style.display = "block";
    setTimeout(() => {
      puertaa.style.display = 'none';
    }, 2500);
    speakMessage("Luces encendidas")
  }
}

function luzCOM() {
  luzComedor();
  aplCOM();
}

function acvCOM() {
  var btnventanacom = document.getElementById("btnventanacom");
  var ventanac = document.getElementById("ventanacerrada");
  var ventanaa = document.getElementById("ventanaabierta");
  if (btnventanacom.innerHTML === "Cerrar ventana") {
    btnventanacom.innerHTML = "Abrir ventana";
    ventanac.innerHTML = "Ventana cerrada";
    ventanac.style.display = "block";
    setTimeout(() => {
      ventanac.style.display = 'none';
    }, 2500);
    speakMessage("Ventana cerrada")
  } else {
    btnventanacom.innerHTML = "Cerrar ventana";
    ventanaa.innerHTML = "Ventana abierta";
    ventanaa.style.display = "block";
    setTimeout(() => {
      ventanaa.style.display = 'none';
    }, 2500);
    speakMessage("Ventana abierta")
  }
}

function ventanaCOM() {
  VentanaVa();
  acvCOM();
}


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
