export const renderItems = (data) => {
  console.log(data);

  const container = document.createElement("div");
  data.forEach((personaje) => {
    const personajeDiv = document.createElement("div");
    personajeDiv.innerHTML = `
      <dl itemscope itemtype="https://schema.org/Person">
        <img src="${personaje.imageUrl}" alt="${personaje.id}">
        <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
        <dt>Edad:</dt><dd itemprop="age">${personaje.facts.age}</dd>
        <dt>Estado:</dt><dd itemprop="status">${personaje.facts.status}</dd>
      </dl>
    `;
    container.appendChild(personajeDiv);
  });
  return container;
};
