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

/**
 * 일반 객체를 사용하여 필터링 조건 목록을 담은 컬렉션을 추가/삭제/모든 필터 값 제거 구현
 *   - 기본적인 동작임에도 각기 다른 패러다임으로 구현됨 (객체 자체 메서드, delete 연산자, 재할당)
 */

let filters = {};

function addFilter(filters, key, value) {
  filters[key] = value;
}

function deleteFilter(filters, key) {
  delete filters[key];
}

function clearAllFilters(filters) {
  filters = {};
  return filters;
}

/**
 * 맵을 사용하여 필터링 조건 목록을 담은 컬렉션을 추가/삭제/모든 필터 값 제거 구현
 *  - 인터페이스 명확
 *  - 추가/삭제/전체삭제 기능이 똑같이 메서드 형태로 호출
 */

let filters2 = new Map();
filters2.set('species', 'Labrador');
filters2.get('species');
filters2.delete('species');
filters2.clear();

// 체이닝
let filters3 = new Map().set('species', 'Labrador').set('size', 'large').set('color', 'brown');

// 생성자에서 초기화
let filters4 = new Map([
  ['species', 'Labrador'],
  ['size', 'large'],
  ['color', 'brown'],
]);

/**
 * 객체는 오직 문자열만 key로 받는다.
 * map은 여러 가지 자료형을 key로 받을 수 있다.
 */

const errors = {
  100: '이름이 잘못되었습니다.',
  110: '이름에는 문자만 입력할 수 있습니다.',
  200: '색상이 잘못되었습니다.',
};

function isDataValid(data) {
  if (data.length < 10) {
    // dot notation 접근 불가
    //return errors.100;
    // bracket notation으로 가능하지만 꼼수 => 100 자료형 그대로 유지 못하고 문자열로 변환됨
    return errors[100];
  }
}

const errors2 = new Map().set(100, '이름이 잘못되었습니다.').set(110, '이름에는 문자만 입력할 수 있습니다.').set(200, '색상이 잘못되었습니다.');
errors2.get(100);
errors2.keys(); // { 100, 110, 200 } 숫자 자료형 유지
