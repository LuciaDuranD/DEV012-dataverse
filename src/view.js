export const renderItems = (data) => {
  const root = document.getElementById("root");

  root.innerHTML = "";

  data.forEach((character) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = character.imageUrl;
    img.alt = character.name;

    const title = document.createElement("h2");
    title.textContent = character.name;

    li.appendChild(img);
    li.appendChild(title);

    root.appendChild(li);
  });
};
