import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

// PRUEBAS UNITARIAS
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

describe("sortData", () => {
  it("Debe devolver los personajes ordenados de manera ascendente por edad", () => {
    const sortedData = sortData(fakeData, "facts.age", "asc");

    for (let i = 1; i < sortedData.length; i++) {
      const ageCurrent = parseInt(sortedData[i].facts.age);
      const agePrevious = parseInt(sortedData[i - 1].facts.age);
      console.log(agePrevious, ageCurrent); // Imprime las edades para depurar
      expect(ageCurrent).toBeGreaterThanOrEqual(agePrevious);
    }
  });

  it("Debe devolver los personajes ordenados de manera descendente por edad", () => {
    const sortedData = sortData(fakeData, "facts.age", "desc");

    for (let i = 1; i < sortedData.length; i++) {
      const ageCurrent = parseInt(sortedData[i].facts.age);
      const agePrevious = parseInt(sortedData[i - 1].facts.age);
      console.log(agePrevious, ageCurrent);
      expect(ageCurrent).toBeLessThanOrEqual(agePrevious);
    }
  });
});

describe("computeStats", () => {
  it("Debe devolver la cantidad correcta de personajes vivos", () => {
    const stats = computeStats(fakeData);
    expect(stats.totalVivos).toBe(2);
  });
  it("Debe devolver la cantidad correcta de personajes ancianos", () => {
    const personajesAncianos = filterData(fakeData, "age", "Anciano");
    // Verificar si hay personajes con edades mayores o iguales a 60 años
    const personajesConEdad60OMayor = fakeData.filter((personaje) => {
      const age = parseInt(personaje.facts.age);
      return age >= 60;
    });
    // Verificar si la cantidad de personajes con edades mayores o iguales a 60 años coincide con la cantidad esperada
    expect(personajesAncianos.length).toBe(personajesConEdad60OMayor.length);
  });
});
