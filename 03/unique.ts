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

// 중복된 값 존재
function getColors(dogs: IDog[]): string[] {
  return dogs.map(({ color }) => color);
}

// 중복 제거 1
function getUnique(attributes: string[]): string[] {
  return [...new Set(attributes)];
}

getUnique(getColors(dogs));

// 중복 제거 2
function getAttributes(dogs: IDog[], key: string): string[] {
  return dogs.map((dog) => dog[key]);
}

getUnique(getAttributes(dogs, 'color'));

// 중복 제거 3
function getColorsUpdated(dogs: IDog[]): string[] {
  return [...dogs.reduce((uniqueColors, aDog) => uniqueColors.add(aDog.color), new Set<string>())];
}

getColorsUpdated(dogs);

export {};
