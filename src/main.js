import {
  filterByAge,
  filterByStatus,
  filterByLetter,
  computeStats,
} from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

// COPIA ORIGINAL SIN FILTROS
const personajes = data;
const root = document.getElementById("root");

function applyFilters() {
  const letraFiltro = document.getElementById("filtro-letra").value;
  const edadFiltro = document.getElementById("filtro-edad").value;
  const estadoFiltro = document.getElementById("filtro-estado").value;

  // FLTRO POR LETRA, EDAD Y ESTADO
  let filteredData = [...personajes]; // ... HACE LA COPIA DEL ARRAY DE LOS DATOS ORIGINALES

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

  // Calcular estadísticas y mostrarlas
  const stats = computeStats(filteredData);
  showStats(stats);
}

function showStats(stats) {
  // Mostrar la estadística en el HTML
  const personajesLabel = document.querySelector('label[name="personajes"]');
  const hombresLabel = document.querySelector('label[name="hombres"]');
  const mujeresLabel = document.querySelector('label[name="mujeres"]');

  personajesLabel.textContent = `Total de Personajes: ${stats.totalPersonajes}`;
  hombresLabel.textContent = `Total de Hombres: ${stats.totalHombres}`;
  mujeresLabel.textContent = `Total de Mujeres: ${stats.totalMujeres}`;
}

document.addEventListener("DOMContentLoaded", function () {
  applyFilters();
});

// CAMBIA LOS FILTROS Y LOS APLICA
document
  .getElementById("filtro-letra")
  .addEventListener("change", applyFilters);
document.getElementById("filtro-edad").addEventListener("change", applyFilters);
document
  .getElementById("filtro-estado")
  .addEventListener("change", applyFilters);

// BOTON PARA BORRAR
const botonClear = document.querySelector("[data-testid=button-clear]");
botonClear.addEventListener("click", () => {
  document.getElementById("filtro-letra").selectedIndex = 0;
  document.getElementById("filtro-edad").selectedIndex = 0;
  document.getElementById("filtro-estado").selectedIndex = 0;

  // RESTABLECER DATOS
  applyFilters();
});
