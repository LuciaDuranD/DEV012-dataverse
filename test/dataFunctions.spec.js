import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
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

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes vivos", () => {
    const personajesVivos = filterData(fakeData, "status", "Vivo");
    // El resultado debe devolver la cantidad de personajes vivos
    expect(personajesVivos.length).toBe(2);
  });
});

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes vivos", () => {
    const personajesVivos = filterData(fakeData, "status", "Vivo");
    // El resultado debe devolver la cantidad de personajes vivos
    expect(personajesVivos.length).toBe(2);
  });
});
