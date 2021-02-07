const callback = function (collectedValues, item) {
  return [...collectedValues, item];
};

const saying = ['veni', 'vedi', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

interface IDog {
  name: string;
  size: string;
  species: string;
  color: string;
}

const dogs: IDog[] = [
  {
    name: 'max',
    size: 'small',
    species: 'Boston Terrier',
    color: 'black',
  },
  {
    name: 'dony',
    size: 'large',
    species: 'Labrador',
    color: 'black',
  },
  {
    name: 'shadow',
    size: 'middle',
    species: 'Labrador',
    color: 'brown',
  },
];

const colors: string[] = dogs.reduce((colors, aDog) => (colors.includes(aDog.color) ? colors : [...colors, aDog.color]), []);

// 반복 횟수를 적게 유지하면서 변환되는 데이터 형태를 다른 개발자에게 알려 줄 수 있음
const filters = dogs.reduce(
  (filters, aDog) => {
    filters.breed.add(aDog.species);
    filters.size.add(aDog.size);
    filters.color.add(aDog.color);
    return filters;
  },
  { breed: new Set(), color: new Set(), size: new Set() }
);

interface IDeveloper {
  name: string;
  language: string;
}

const developers = [
  {
    name: 'Jeff',
    language: 'php',
  },
  {
    name: 'Ashley',
    language: 'python',
  },
  {
    name: 'Sara',
    language: 'python',
  },
  {
    name: 'Joe',
    language: 'javascript',
  },
];

const aggregated = developers.reduce((specialities, developers) => {
  const count = specialities.get(developers.language) || 0;
  return specialities.set(developers.language, count + 1);
}, new Map());

export {};
