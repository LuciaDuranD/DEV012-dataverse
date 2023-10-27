import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(renderItems(data), data);

const personajes = document.getElementById("root");

personajes.appendChild(renderItems(data));

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-button");

function showMenu() {
  menu.style.transform = "translateX(0)";
}

function hideMenu() {
  menu.style.transform = "translateX(-100%)";
}
