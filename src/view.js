export const renderItems = (data) => {
  console.log(data);

  const container = document.createElement("div");
  data.forEach((personaje) => {
    const personajeDiv = document.createElement("div");
    personajeDiv.innerHTML = `
   <dl itemscope itemtype="PersonajesTheWalkingDead">
   <img src="./Imagenes/rick grimes.png" alt="Rick Grimes"/>
     <dt>Name:</dt><dd itemprop="name">${personaje.name}</dd>
     <dt>Short Description:</dt><dd itemprop="shortDescription">${personaje.shortDescription}</dd>
     <dt>Description:</dt><dd itemprop="description">${personaje.description}</dd>
     <dt>Age:</dt><dd itemprop="description">${personaje.age}</dd>
     <dt>Status:</dt><dd itemprop="status">${personaje.status}</dd>
     <dt>Main Field:</dt><dd itemprop="mainField">${personaje.mainField}</dd>
   </div>
   `;
    container.appendChild(personajeDiv);
  });
  return container;
};
