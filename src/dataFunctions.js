// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
//Creamos un array vacio para almacenar los resultados del filtro
const filteredData= [];

// Recorremos cada tarjeta de los personajes en los datos
for (const personaje of data) {
//Verificamos si el campo 'filterBy' existe en la tarjeta de personaje
if (personaje.hasOwnProperty(filterBy)) {
//Verificamos si el valor del campo 'filterBy' coincide con el valor deseado
if (personaje[filterBy]=== value) {
 //Si coincide, agregamos la tarjeta de personaje al array filtrado
 filteredData.push(personaje);
}
}
}
//Devolver el array filtrado
return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
 // Comprobamos si el campo sortBy existe en al menos una tarjeta de personaje
 if (data.length === 0 || !data[0].hasOwnProperty(sortBy)) {
  return data; // No se puede ordenar, devuelve los datos sin cambios
}

// Clonamos los datos originales para evitar modificar el array original
const clonedData = [...data];

// Función de comparación para la ordenación
const compareFunction = (a, b) => {
  if (a[sortBy] < b[sortBy]) {
    return sortOrder === 'asc' ? -1 : 1;
  }
  if (a[sortBy] > b[sortBy]) {
    return sortOrder === 'asc' ? 1 : -1;
  }
  return 0;
};

// Ordena el array clonado según el campo y el orden especificado
clonedData.sort(compareFunction);

return clonedData;
}

export const computeStats = data.reduce (
  (acc, personaje) => {
    // Incrementar el contador de personajes
    acc.totalPersonajes++;

    // Sumar la edad de los personajes
    acc.totalEdad += personaje.edad;

    // Encontrar la edad máxima
    acc.maxEdad = Math.max(acc.maxEdad, personaje.edad);

    // Encontrar la edad mínima
    acc.minEdad = Math.min(acc.minEdad, personaje.edad);

    return acc;
  },
  {
    totalPersonajes: 0,
    totalEdad: 0,
    maxEdad: Number.NEGATIVE_INFINITY, // Inicializar con el valor mínimo posible
    minEdad: Number.POSITIVE_INFINITY, // Inicializar con el valor máximo posible
  }
)

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};