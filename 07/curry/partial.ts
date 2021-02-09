const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};

function mergeProgramInformation(building, manager) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };

  return (program) => {
    return { ...defaults, ...program };
  };
}

const programInfo = mergeProgramInformation(building, manager)(program);
const exhibitInfo = mergeProgramInformation(building, manager)(exhibit);

function getBirds(...birds) {
  return ['meadowlark', 'robin', 'roadrunner'];
}

const birds = getBirds('kansas', 'wisconsin', 'new mexico');

const zip = (...left) => (...right) => {
  return left.map((item, i) => [item, right[i]]);
};

zip('kansas', 'wisconsin', 'new mexico')(...birds);

export { building, manager, program, exhibit, mergeProgramInformation };
