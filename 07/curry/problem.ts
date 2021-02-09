import { dogs } from './curry';

function getDogNames(dogs, filter) {
  const [key, value] = filter;
  // 필터 함수 제약 : 반드시 같은 경우만 체크
  // 맵 함수 제약 : name 속성만 가져옴
  return dogs.filter((aDog) => aDog[key] === value).map((aDog) => aDog.name);
}

getDogNames(dogs, ['색상', '검정색']);
