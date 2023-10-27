export const renderItems = (data) => {
  console.log(data);

  const container = document.createElement("div");
  data.forEach((personaje) => {
    const personajeDiv = document.createElement("div");
    personajeDiv.innerHTML = `
      <dl itemscope itemtype="https://schema.org/Person">
        <img src="${personaje.imageUrl}" alt="${personaje.id}">
        <dt>Name:</dt><dd itemprop="name">${personaje.name}</dd>
        <dt>Age:</dt><dd itemprop="age">${personaje.age}</dd>
        <dt>Status:</dt><dd itemprop="status">${personaje.status}</dd>
      </dl>
    `;
    container.appendChild(personajeDiv);
  });
  return container;
};
