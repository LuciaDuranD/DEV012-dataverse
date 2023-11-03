import { filtroLet0, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const losPersonajes = document.getElementById("root");
losPersonajes.appenChild(renderItems(data));

const filtradoLetras = document.querySelector('[id="filtro-letra"]');
const filtradoEdades = document.querySelector('[id="filtro-edad"]');
const filtradoEstados = document.querySelector('[id="filtro-estado"]');

filtradoLetras.addEventListener("change", filtrados);
filtradoEdades.addEventListener("change", filtrados);
filtradoEstados.addEventListener("change", filtrados);

function filtrados() {
  const indiceLetras = filtradoLetras.selectedIndex;
  const optionSelect = filtradoLetras.options[indiceLetras];
  const indiceEdades = filtradoEdades.selectedIndex;
  const optionSelectEdades = filtradoEdades.options[indiceEdades];
  const indiceEstados = filtradoEstados.selectedIndex;
  const optionSelectEstados = filtradoEstados.options[indiceEstados];
  losPersonajes.innerHTML = "";
}
