const imagen = document.querySelector(".Inicial");
const imagenSo = document.querySelector(".sotano");

const cambiarDentroLavado = document.querySelector("#cambiarDentroLavado");
const CuartoLavado = document.querySelector(".CuartoLavado");
const botonesAdicionalesLavado = document.querySelector(
  ".botonesAdicionalesLavado"
);

const sotano = document.querySelector(".sotano");
const botonesSotano = document.querySelector(
  ".botonesSotano"
);
const EncenderSotano = document.querySelector("#EncenderSotano");
const ApagarSotano = document.querySelector("#ApagarSotano");

EncenderSotano.addEventListener("click", () => {
    const rutaImagen = EncenderSotano.getAttribute("src");
    imagen.src = rutaImagen;
  });
  
  ApagarSotano.addEventListener("click", () => {
    const rutaImagen = ApagarSotano.getAttribute("src");
    imagen.src = rutaImagen;
  });

const EncenderLavado = document.querySelector("#EncenderLavado");
const ApagarLavado = document.querySelector("#ApagarLavado");
const volver = document.querySelector("#volver");

cambiarDentroLavado.addEventListener("click", () => {
  const rutaImagen = cambiarDentroLavado.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  botonesAdicionalesLavado.style.display = "flex";
});

EncenderLavado.addEventListener("click", () => {
  const rutaImagen = EncenderLavado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarLavado.addEventListener("click", () => {
  const rutaImagen = ApagarLavado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

volver.addEventListener("click", () => {
  CuartoLavado.style.display = "flex";
  botonesAdicionalesLavado.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion1 = document.querySelector(
  "#cambiarDentroHabitacion1"
);
const Habitacion1 = document.querySelector(".Habitacion1");
const botonesAdicionaHabitacion1 = document.querySelector(
  ".botonesAdicionaHabitacion1"
);
const EncenderHabitacion1 = document.querySelector("#EncenderHabitacion1");
const ApagarHabitacion1 = document.querySelector("#ApagarHabitacion1");
const volver2 = document.querySelector("#volver2");

cambiarDentroHabitacion1.addEventListener("click", () => {
  const rutaImagen = cambiarDentroHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
  Habitacion1.style.display = "none";
  botonesAdicionaHabitacion1.style.display = "flex";
});

EncenderHabitacion1.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion1.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
});

volver2.addEventListener("click", () => {
  Habitacion1.style.display = "flex";
  botonesAdicionaHabitacion1.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion2 = document.querySelector(
  "#cambiarDentroHabitacion2"
);
const Habitacion2 = document.querySelector(".Habitacion2");
const botonesAdicionaHabitacion2 = document.querySelector(
  ".botonesAdicionaHabitacion2"
);
const EncenderHabitacion2 = document.querySelector("#EncenderHabitacion2");
const ApagarHabitacion2 = document.querySelector("#ApagarHabitacion2");
const volver3 = document.querySelector("#volver3");

cambiarDentroHabitacion2.addEventListener("click", () => {
  const rutaImagen = cambiarDentroHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
  Habitacion2.style.display = "none";
  botonesAdicionaHabitacion2.style.display = "flex";
});

EncenderHabitacion2.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion2.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
});

volver3.addEventListener("click", () => {
  Habitacion2.style.display = "flex";
  botonesAdicionaHabitacion2.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion3 = document.querySelector(
  "#cambiarDentroHabitacion3"
);
const Habitacion3 = document.querySelector(".Habitacion3");
const botonesAdicionaHabitacion3 = document.querySelector(
  ".botonesAdicionaHabitacion3"
);
const EncenderHabitacion3 = document.querySelector("#EncenderHabitacion3");
const ApagarHabitacion3 = document.querySelector("#ApagarHabitacion3");
const volver4 = document.querySelector("#volver4");

cambiarDentroHabitacion3.addEventListener("click", () => {
  const rutaImagen = cambiarDentroHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
  Habitacion3.style.display = "none";
  botonesAdicionaHabitacion3.style.display = "flex";
});

EncenderHabitacion3.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion3.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
});

volver4.addEventListener("click", () => {
  Habitacion3.style.display = "flex";
  botonesAdicionaHabitacion3.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarBaboPrincipal = document.querySelector("#cambiarBanoPrincipal");
const BanoPrincipal = document.querySelector(".BanoPrincipal");
const botonesAdicionaBanoPrincipal = document.querySelector(
  ".botonesAdicionaBanoPrincipal"
);
const EncenderBañoPrincipal = document.querySelector("#EncenderBañoPrincipal");
const ApagarBañoPrincipal = document.querySelector("#ApagarBañoPrincipal");
const volver5 = document.querySelector('#volver5');

cambiarBaboPrincipal.addEventListener('click', () => {
    const rutaImagen = cambiarBaboPrincipal.getAttribute('data-image');
    imagen.src = rutaImagen;
    BanoPrincipal.style.display = 'none';
    botonesAdicionaBanoPrincipal.style.display = 'flex';
});

EncenderBañoPrincipal.addEventListener('click', () => {
    const rutaImagen = EncenderBañoPrincipal.getAttribute('data-image');
    imagen.src = rutaImagen;
});

ApagarBañoPrincipal.addEventListener('click', () => {
    const rutaImagen = ApagarBañoPrincipal.getAttribute('data-image');
    imagen.src = rutaImagen;
});

volver5.addEventListener('click', () => {
    BanoPrincipal.style.display = 'flex';
    botonesAdicionaBanoPrincipal.style.display = 'none';
    imagen.src = 'https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941';
});




const cambiarBanoPrivado = document.querySelector('#cambiarBanoPrivado');
const BanoPrivado = document.querySelector('.BanoPrivado');
const botonesAdicionaBanoPrivado = document.querySelector('.botonesAdicionaBanoPrivado');
const EncenderBañoPrivado = document.querySelector('#EncenderBañoPrivado');
const ApagarBañoPrivado = document.querySelector('#ApagarBañoPrivado');
const volver6 = document.querySelector('#volver6');

cambiarBanoPrivado.addEventListener('click', () => {
    const rutaImagen = cambiarBanoPrivado.getAttribute('data-image');
    imagen.src = rutaImagen;
    BanoPrivado.style.display = 'none';
    botonesAdicionaBanoPrivado.style.display = 'flex';
});

EncenderBañoPrivado.addEventListener('click', () => {
    const rutaImagen = EncenderBañoPrivado.getAttribute('data-image');
    imagen.src = rutaImagen;
});

ApagarBañoPrivado.addEventListener('click', () => {
    const rutaImagen = ApagarBañoPrivado.getAttribute('data-image');
    imagen.src = rutaImagen;
});

volver6.addEventListener('click', () => {
    BanoPrivado.style.display = 'flex';
    botonesAdicionaBanoPrivado.style.display = 'none';
    imagen.src = 'https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941';
});