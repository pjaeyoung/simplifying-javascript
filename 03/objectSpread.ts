const book = {
  title: 'Person and Persons',
  author: 'Derek Parfit',
};

const update = { ...book, year: 1984 };

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee2 = {
  ...defaultEmployee,
  name: { ...defaultEmployee.name },
};

export {};
