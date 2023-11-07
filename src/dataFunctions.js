export const filterData = (data, filterBy, value) => {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  const filteredData = data.filter((personaje) => {
    return personaje.hasOwnProperty(filterBy) && personaje[filterBy] === value;
  });

  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    !data[0].hasOwnProperty(sortBy)
  ) {
    return data;
  }

  const compareFunction = (a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  };

  return [...data].sort(compareFunction);
};

export const computeStats = (data) => {
  if (data.length === 0) {
    return null; // Devolver null si no hay datos para calcular estadísticas
  }
  const stats = data.reduce(
    (acc, personaje) => {
      acc.totalPersonajes++; // Incrementar el contador de personajes
      acc.totalEdad += personaje.edad; // Sumar la edad de los personajes
      acc.maxEdad = Math.max(acc.maxEdad, personaje.edad); // Encontrar la edad máxima
      acc.minEdad = Math.min(acc.minEdad, personaje.edad); // Encontrar la edad mínima
      return acc;
    },
    {
      totalPersonajes: 0,
      totalEdad: 0,
      maxEdad: Number.NEGATIVE_INFINITY, // Inicializar con el valor mínimo posible
      minEdad: Number.POSITIVE_INFINITY, // Inicializar con el valor máximo posible
    }
  );
  // Calcular la edad promedio dividiendo la suma de edades por el número de personajes
  stats.averageEdad = stats.totalEdad / stats.totalPersonajes;
  return stats;
};

// FILTRADO POR EDAD//
export const filterByAge = (data, ageRange) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    const ageA = a.facts.age || 0;
    const ageB = b.facts.age || 0;

    if (ageRange === "edadMenor") {
      return ageA - ageB;
    } else if (ageRange === "edadMayor") {
      return ageB - ageA;
    } else {
      return 0;
    }
  });

  return sortedData;
};

// FILTRADO POR ESTADO//
export const filterByStatus = (data, status) => {
  if (status === "vivo") {
    return data.filter((personaje) => personaje.facts.status === "Vivo");
  } else if (status === "muerto") {
    return data.filter((personaje) => personaje.facts.status === "Muerto");
  } else {
    return data;
  }
};

// FILTRADO POR LETRA//
export const filterByLetter = (data, order) => {
  return data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (order === "asc") {
      return nameA.localeCompare(nameB);
    } else if (order === "desc") {
      return nameB.localeCompare(nameA);
    }
  });
};
