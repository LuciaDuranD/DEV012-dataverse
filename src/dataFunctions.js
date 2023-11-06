export const filterData = (data, filterBy, value) => {
  const filteredData = [];

  for (const personaje of data) {
    if (personaje.hasOwnProperty(filterBy)) {
      if (personaje[filterBy] === value) {
        filteredData.push(personaje);
      }
    }
  }

  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (data.length === 0 || !data[0].hasOwnProperty(sortBy)) {
    return data;
  }

  const clonedData = [...data];
  const compareFunction = (a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  };

  clonedData.sort(compareFunction);

  return clonedData;
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
