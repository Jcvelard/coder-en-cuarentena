const seleccionar = document.querySelector("select");
const parrafo = document.querySelector("p");
const nombre = document.querySelector("h1");

seleccionar.addEventListener('change', letra);

function letra() {
  let eleccion = seleccionar.value;

  if (eleccion === "firtsday") {
    nombre.textContent = "titulo firstday"
    parrafo.textContent = "letra de firtsday";
  } else if (eleccion === "always") {
    nombre.textContent = "titulo de always"
    parrafo.textContent = "letra de always";
  } else if (eleccion === "imissyou") {
    nombre.textContent = "titulo de i miss you"
    parrafo.textContent = "letra de imissyou";
  } else if (eleccion === "allthesmallthings") {
    nombre.textContent = "titulo de all the small things"
    parrafo.textContent = "letra de allthesmallthings";
  } else {
    nombre.textContent = ""
    parrafo.textContent = "";
  }
}

nombre.addEventListener('change', titulo);

function titulo() {
  let nombre = seleccionar.value;

  if (nombre === "firtsday") {
    nombre.textContent = "firtsday";
  } else if (nombre === "always") {
    nombre.textContent = "always";
  } else if (nombre === "imissyou") {
    nombre.textContent = "imissyou";
  } else if (nombre === "allthesmallthings") {
    nombre.textContent = "allthesmallthings";
  } else {
    nombre.textContent = "";
  }

}