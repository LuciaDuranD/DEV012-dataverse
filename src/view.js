export const renderItems = (data) => {
  const ulElement = document.getElementById("root");

  data.forEach((personaje) => {
    const liElement = document.createElement("li");
    liElement.setAttribute("itemscope", "itemscope");
    liElement.setAttribute("itemtype", "https://schema.org/Person");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", personaje.ImagenSrc);
    imgElement.setAttribute("alt", personaje.Nombre);

    const dtNombre = document.createElement("dt");
    dtNombre.textContent = "Nombre:";

    const ddNombre = document.createElement("dd");
    ddNombre.setAttribute("itemprop", "name");
    ddNombre.textContent = personaje.Nombre;

    const dtDescripcion = document.createElement("dt");
    dtDescripcion.textContent = "Descripción:";

    const ddDescripcion = document.createElement("dd");
    ddDescripcion.setAttribute("itemprop", "description");
    ddDescripcion.textContent = personaje.Edad;

    liElement.appendChild(imgElement);
    liElement.appendChild(dtNombre);
    liElement.appendChild(ddNombre);
    liElement.appendChild(dtDescripcion);
    liElement.appendChild(ddDescripcion);

    ulElement.appendChild(liElement);
  });
};

const personajes = [
  {
    Nombre: "Rick Grimes",
    Edad: "Ex sheriff y líder del grupo de supervivientes.",
    ImagenSrc: "./Imagenes/Rick.jpg",
    Estado: "Vivo",
  },
  //FALTA COLOCAR EL RESTO DE PERSONAJES LIZZ//
];

renderItems(personajes);
