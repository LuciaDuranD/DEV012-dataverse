import {
  computeStats,
  filterData,
  sortData,
} from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

// PRUEBAS UNITARIAS

// TEST UNITARIO filterData
describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes vivos", () => {
    const personajesVivos = filterData(fakeData, "status", "Vivo");
    // El resultado debe devolver la cantidad de personajes vivos
    expect(personajesVivos.length).toBe(2);
  });
});

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes muertos", () => {
    const personajesMuertos = filterData(fakeData, "status", "Muerto");
    // El resultado debe devolver la cantidad de personajes muertos
    expect(personajesMuertos.length).toBe(2);
  });
});

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes con 35 anos", () => {
    const personajesMayores = filterData(fakeData, "age", "35");
    // El resultado debe devolver la cantidad de personajes de 35 anos
    expect(personajesMayores.length).toBe(2);
  });
});

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes con liderazgo y brutalidad", () => {
    const personajesLideresBrutales = filterData(
      fakeData,
      "mainField",
      "Liderazgo y brutalidad"
    );
    // El resultado debe devolver la cantidad de personajes vivos
    expect(personajesLideresBrutales.length).toBe(1);
  });
});

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes bebes", () => {
    const personajesBebes = filterData(fakeData, "age", "Bebes");
    // El resultado debe devolver la cantidad de personajes bebes
    expect(personajesBebes.length).toBe(0);
  });
});

// TEST UNITARIO sortData
describe("sortData", () => {
  it("sortData ordena ascendente por name correctamente", () => {
    const sortedData = sortData(fakeData, "name", "asc");
    expect(sortedData[0]).toEqual(
      {
        id: "andrea",
        name: "Andrea",
        shortDescription: "Experta en armas de fuego y defensora del grupo.",
        description:
          "Andrea es una experta en el manejo de armas de fuego y se convierte en una defensora clave del grupo de supervivientes. A lo largo de la serie, lucha por mantener a salvo a su grupo y forma fuertes lazos con otros personajes.",
        imageUrl: "./Imagenes/andrea.png",
        facts: {
          age: "35",
          status: "Muerto",
          mainField: "Armas de fuego y protección",
        },
      },
    );
  });
});

test("sortData ordena descendente por name correctamente", () => {
  const sortedData = sortData(fakeData, "name", "desc");
  expect(sortedData[0]).toEqual(
    {
      id: "rick-grimes",
      name: "Rick Grimes",
      shortDescription: "Ex sheriff y líder del grupo de supervivientes.",
      description:
        "Rick Grimes es el personaje principal de la serie. Inicialmente era un sheriff antes del apocalipsis zombi y se convierte en el líder del grupo de supervivientes. Su objetivo principal es mantener a su familia y amigos a salvo en un mundo post-apocalíptico lleno de amenazas.",
      imageUrl: "./Imagenes/rick grimes.png",
      facts: {
        age: "49",
        status: "Vivo",
        mainField: "Liderazgo y supervivencia",
        gender: "Hombre"
      },
    },
  );
});

// TEST UNITARIO computeStats
it("computeStats devuelve estadísticas para el género masculino correctamente", () => {
  const stats = computeStats(fakeData);
  console.log(stats);
  expect(stats.totalHombres).toEqual(1);
});
