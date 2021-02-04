interface IFilter {
  color: string;
  species: string;
}

const filters: IFilter = {
  color: 'black',
  species: 'Labrador',
};

function getAppliedFilters(filters: IFilter): string {
  // 순회를 위해 key 들로 구성된 배열 변환
  const keys = Object.keys(filters);
  keys.sort(); // 객체는 순서 보장하지 않음
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

getAppliedFilters(filters);

const filters2 = new Map().set('color', 'black').set('species', 'Labrador');

function getAppliedFiltersUpdated(filters: Map<keyof IFilter, string>): string {
  const applied = [];
  // 곧장 key, value 쌍을 가져올 수 있음
  for (let [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }

  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

getAppliedFiltersUpdated(filters2);

type keyValue = [string, string];

function sortByKey([keyA]: keyValue, [keyB]: keyValue): number {
  return keyA > keyB ? 1 : -1;
}

function getSortedAppliedFilters(filters: Map<keyof IFilter, string>): string {
  const applied = [];
  // spread operator로 맵과 배열을 오갈 수 있음
  for (let [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

getSortedAppliedFilters(filters2);

function getSortedAppliedFiltersUpdtaed(filters: Map<keyof IFilter, string>): string {
  // 새롭게 배열을 선언할 필요없이 spread operator로 key-value 쌍의 배열을 생성하고 배열 메서드를 체이닝하여 구현
  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => `${key}:${value}`)
    .join(', ');
  return `선택한 조건은 ${applied} 입니다.`;
}

getSortedAppliedFiltersUpdtaed(filters2);

export {};
