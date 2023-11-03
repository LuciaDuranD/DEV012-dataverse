import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js"; // Importa tus datos solo una vez

document.addEventListener("DOMContentLoaded", function () {
  console.log(renderItems(data), data);
});

let result = data;
const rootRender = document.querySelector("#root");
rootRender.appendChild(renderItems(result));
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
  const filteredLetra = e.target.value;
  dataset = filterData(data, "letra", filteredLetra);

  listContent.innerHTML = "";
  listContent.appendChild(renderItems(dataset));
  statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredLetra)`;
});

filtroEdad.addEventListener("change", (e) => {
  const filteredEdad = e.target.value;
  dataset = filterData(data, "edad", filteredEdad);

  listContent.innerHTML = "";
  listContent.appendChild(renderItems(dataset));
  statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredEdad)`;
});

filtroEstado.addEventListener("change", (e) => {
  const filteredEstado = e.target.value;
  dataset = filterData(data, "estado", filteredEstado);

  listContent.innerHTML = "";
  listContent.appendChild(renderItems(dataset));
  statsParagraph.innerHTML = `"Total results: " + stats(dataset, filteredEstado)`;
});

menuButton.addEventListener("click", showMenu);

closeButton.addEventListener("click", hideMenu);
