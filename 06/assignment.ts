const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  location: [32.712222, -103.1405556],
};

const region = {
  city: 'Hobbs',
  country: 'Lea',
  state: {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
};

function determineCityAndState(location) {
  return region;
}

function getCityAndState({ location }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
  };
}

function setRegion({ location, ...details }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details,
  };
}
