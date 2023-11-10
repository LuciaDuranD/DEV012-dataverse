import { filterData } from "../src/dataFunctions.js";
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

// Faltan trabajar estos tests, personaje vivos y muerto ya estan trabajados tendriamos 2 tests unitarios listos, agregamos de orden desc, asc, uno para error, etc
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

describe("filterData", () => {
  it("Debe devolver la cantidad correcta de personajes vivos", () => {
    const personajesVivos = filterData(fakeData, "status", "Vivo");
    // El resultado debe devolver la cantidad de personajes vivos
    expect(personajesVivos.length).toBe(2);
  });
});