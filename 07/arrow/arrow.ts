const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington',
};

const getName = ({ first, last }) => `${first} ${last}`;
getName(comic);

const getFullName = ({ first, last }) => ({ fullName: `${first} ${last}` });
getFullName(comic);

const getNameAndLocation = ({ first, last, city, state }) => ({ fullName: `${first} ${last}`, location: `${city}, ${state}` });

const discounter = (discount) => (price) => price * (1 - discount);
const tenPercentOff = discounter(0.1);
tenPercentOff(100);
