export const filterData = (data, filterBy, value) => {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  const filteredData = data.filter((personaje) => {
    return personaje.facts[filterBy] === value;
  });

  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (!Array.isArray(data) || data.length === 0) {
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

      // Verificar el género y aumentar el contador correspondiente
      if (personaje.facts.gender === "Hombre") {
        acc.totalHombres++;
      } else if (personaje.facts.gender === "Mujer") {
        acc.totalMujeres++;
      }

      return acc;
    },
    {
      totalPersonajes: 0,
      totalHombres: 0,
      totalMujeres: 0,
    }
  );

  return stats;
};

// FILTRADO POR EDAD//
export const filterByAge = (data, ageRange) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    const ageA = a.facts.age ? parseInt(a.facts.age) : 0;
    const ageB = b.facts.age ? parseInt(b.facts.age) : 0;

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
