import {
  filterByAge,
  filterByStatus,
  filterByLetter,
  computeStats,
} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

let personajes = data; // Mantén una copia original de los datos sin filtrar
const root = document.getElementById("root");

function applyFilters() {
  const letraFiltro = document.getElementById("filtro-letra").value;
  const edadFiltro = document.getElementById("filtro-edad").value;
  const estadoFiltro = document.getElementById("filtro-estado").value;

  // Aplicar los filtros en el siguiente orden: letra, edad, estado
  let filteredData = [...personajes]; // Copia de los datos originales

  if (letraFiltro !== "all") {
    filteredData = filterByLetter(filteredData, letraFiltro);
  }

  if (edadFiltro !== "all") {
    filteredData = filterByAge(filteredData, edadFiltro);
  }

  if (estadoFiltro !== "all") {
    filteredData = filterByStatus(filteredData, estadoFiltro);
  }

  root.innerHTML = "";
  root.appendChild(renderItems(filteredData));
}

document.addEventListener("DOMContentLoaded", function () {
  applyFilters(); // Aplicar filtros al cargar la página
  const stats = computeStats(personajes);
  console.log(stats);
});

// Escuchar cambios en los filtros y aplicarlos
document
  .getElementById("filtro-letra")
  .addEventListener("change", applyFilters);
document.getElementById("filtro-edad").addEventListener("change", applyFilters);
document
  .getElementById("filtro-estado")
  .addEventListener("change", applyFilters);

// Botón de borrar
const botonClear = document.querySelector("[data-testid=button-clear]");
botonClear.addEventListener("click", () => {
  document.getElementById("filtro-letra").selectedIndex = 0;
  document.getElementById("filtro-edad").selectedIndex = 0;
  document.getElementById("filtro-estado").selectedIndex = 0;

  applyFilters(); // Restablecer los filtros
});
