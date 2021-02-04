const defaults = new Map().set('color', 'brown').set('species', 'beagle').set('location', 'Kansas');
const filters = new Map().set('color', 'black');

// 필터링 조건을 담은 컬렉션을 새로 생성 : 기본값 + 사용자 선택한 조건
function applyDefaults(filters, defaults) {
  return new Map([...defaults, ...filters]);
}

export {};
