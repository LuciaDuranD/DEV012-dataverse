import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js"; // Importa tus datos solo una vez

document.addEventListener("DOMContentLoaded", function () {
  console.log(renderItems(data), data);
});

let personajes = data;
const root = document.getElementById("root");
root.appendChild(renderItems(personajes));
const filtroLetra = document.getElementById("filtro-letra");
const filtroEdad = document.getElementById("filtro-edad");
const filtroEstado = document.getElementById("filtro-estado");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-button");

function showMenu() {
  menu.style.transform = "translateX(0)";
}

function hideMenu() {
  menu.style.transform = "translateX(-100%)";
}

filtroLetra.addEventListener("change", (e) => {
  const ordered = e.target.value;
  personajes = sortData(personajes, "name", ordered);

  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
  //statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredLetra)`;
});

filtroEdad.addEventListener("change", (e) => {
  const filteredEdad = e.target.value;
  personajes = filterData(personajes, "edad", filteredEdad);

  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
  //statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredEdad)`;
});

filtroEstado.addEventListener("change", (e) => {
  const filteredEstado = e.target.value;
  personajes = filterData(personajes, "estado", filteredEstado);

  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
  //statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredEstado)`;
});

//
//menuButton.addEventListener("click", showMenu);

//closeButton.addEventListener("click", hideMenu);
