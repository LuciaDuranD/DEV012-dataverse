export const renderItems = (data) => {
  const createPersonajeElement = (personaje) => {
    const personajeDiv = document.createElement("dl");
    personajeDiv.setAttribute("itemscope", "");
    personajeDiv.setAttribute("itemtype", "https://schema.org/Person");

    personajeDiv.innerHTML = `
      <img src="${personaje.imageUrl}" alt="${personaje.id}">
      <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
      <dt>Edad:</dt><dd itemprop="age">${personaje.facts.age}</dd>
      <dt>Estado:</dt><dd itemprop="status">${personaje.facts.status}</dd>
      <dt>Descripción:</dt><dd itemprop="description">${personaje.description}</dd>
    `;

    return personajeDiv;
  };

  const lista = document.createElement("ul");
  data.forEach((personaje) => {
    const container = document.createElement("li");
    container.appendChild(createPersonajeElement(personaje));
    lista.appendChild(container);
  });

  return lista;
};
