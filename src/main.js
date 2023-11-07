import {
  filterByAge,
  filterByStatus,
  filterByLetter,
  computeStats,
} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log(renderItems(data), data);
  const stats = computeStats(data);
  console.log(stats);
});

let personajes = data;
const root = document.getElementById("root");
root.appendChild(renderItems(personajes));
const filtroLetra = document.getElementById("filtro-letra");
const filtroEdad = document.getElementById("filtro-edad");
const filtroEstado = document.getElementById("filtro-estado");

//FILTRO POR LETRA//
filtroLetra.addEventListener("change", (e) => {
  const ordered = e.target.value;
  personajes = filterByLetter(personajes, ordered);
  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
});

//FILTRO POR EDAD//
filtroEdad.addEventListener("change", () => {
  console.log("filtroEdad change event");
  const filteredEdad = filtroEdad.value;
  personajes = filterByAge(data, filteredEdad);
  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
});

//FILTRO POR ESTADO//
filtroEstado.addEventListener("change", () => {
  console.log("filtroEstado change event");
  const filteredEstado = filtroEstado.value;
  personajes = filterByStatus(data, filteredEstado);
  root.innerHTML = "";
  root.appendChild(renderItems(personajes));
});

//BOTON DE BORRAR//
const botonClear = document.querySelector("[data-testid=button-clear]");

botonClear.addEventListener("click", () => {
  filtroLetra.selectedIndex = 0;
  filtroEdad.selectedIndex = 0;
  filtroEstado.selectedIndex = 0;

  root.innerHTML = "";
  root.appendChild(renderItems(data));
});
