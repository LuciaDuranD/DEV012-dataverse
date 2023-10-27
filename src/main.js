import { renderItems } from "./view.js";
import data from "./data/dataset.js"; // Importa tus datos solo una vez

document.addEventListener("DOMContentLoaded", function () {
  console.log(renderItems(data), data);
});
