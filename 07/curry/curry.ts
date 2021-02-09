interface IDog {
  name: string;
  weight: number;
  breed: string;
  location: string;
  color: string;
}

const dogs: IDog[] = [
  {
    name: 'max',
    weight: 10,
    breed: 'Boston Terrier',
    location: 'wisconsin',
    color: 'black',
  },
  {
    name: 'dony',
    weight: 90,
    breed: 'Labrador',
    location: 'canzas',
    color: 'black',
  },
  {
    name: 'shadow',
    weight: 40,
    breed: 'Labrador',
    location: 'wisconsin',
    color: 'brown',
  },
];

function getDogNames(dogs, filterFn) {
  return dogs.filter(filterFn).map((aDog) => aDog.name);
}

getDogNames(dogs, (aDog) => aDog.weight < 20);

// 비교 함수 재사용
const weightCheck = (weight) => (aDog) => aDog.weight < weight;
getDogNames(dogs, weightCheck(20));

const identity = (field) => (value) => (aDog) => aDog[field] === value;
const colorCheck = identity('color');
const stateCheck = identity('state');
getDogNames(dogs, colorCheck('black'));
getDogNames(dogs, stateCheck('wisconsin'));

function allFilters(dogs, ...checks) {
  return dogs.filter((aDog) => checks.every((check) => check(aDog))).map((aDog) => aDog.name);
}

allFilters(dogs, colorCheck('black'), stateCheck('canzas'));

function anyFilters(dogs, ...checks) {
  return dogs.filter((aDog) => checks.some((check) => check(aDog))).map((aDog) => aDog.name);
}

anyFilters(dogs, weightCheck(20), colorCheck('brown'));

export { dogs };
