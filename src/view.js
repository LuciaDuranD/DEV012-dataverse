export const renderItems = (data) => {
  const losUl = document.createElement("ul");
  losUl.setAttribute("class", "cajas-personajes");

  for (const p of data) {
    const losLi = document.createElement("li");
    losLi.setAttribute("class", "lista");
    losLi.setAttribute("itemscope", "");
    losLi.setAttribute("itemtype", "https://schema.org/Person");

    losUl.appendChild(losLi);

    const losDl = document.createElement("dl");
    losLi.appendChild(losDl);

    losDl.setAttribute("itemscope", "");
    losDl.setAttribute("itemtype", "https://schema.org/Person");

    const imagenes = document.createElement("img");
    img.src = personaje.imageUrl;
    img.alt = personaje.id;

    //NOMBRES
    const elDt1 = document.createElement("dt");
    elDt1.textContent = "NOMBRE:";
    losDl.appendChild(elDt1);
    const elDd1 = document.createElement("dd");
    losDl.appendChild(elDd1);
    elDd1.setAttribute("itemprop", "name");
    elDd1.textContent = p.name;

    //EDADES
    const elDt2 = document.createElement("dt");
    elDt2.textContent = "EDAD:";
    losDl.appendChild(elDt2);
    const elDd2 = document.createElement("dd");
    losDl.appendChild(elDd2);
    elDd2.setAttribute("itemprop", "age");
    elDd2.textContent = p.facts.age;

    //ESTADOS Vivos/Muertos
    const elDt3 = document.createElement("dt");
    elDt3.textContent = "ESTADO:";
    losDl.appendChild(elDt3);
    const elDd3 = document.createElement("dd");
    losDl.appendChild(elDd3);
    elDd3.setAttibute("itemprop", "status");
    elDd3.textContent = p.facts.status;

    //DESCRIPCIONES
    const elDt4 = document.createElement("dt");
    elDt4.textContent = "DESCRIPCIÓN:";
    losDl.appendChild(elDt4);
    const elDd4 = document.createElement("dd");
    losDl.appendChild(elDd4);
    elDd4.setAttribute("itemprop", "description");
    elDd4.textContent = p.description;
  }
  return losUl;
};
