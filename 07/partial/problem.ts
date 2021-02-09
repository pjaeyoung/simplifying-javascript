import { building, exhibit, manager, program } from './partial';

function mergeProgramInformation(building, manager, event) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };
  return { ...defaults, ...event };
}

// building과 manager은 항상 같은 값 (기초데이터)
// 세 번째 인자(program,exhibit)은 기초 데이터를 덮어쓸 사용자 지정 정보
// 고차함수를 이용해서 building, manager를 재사용
const programInfo = mergeProgramInformation(building, manager, program);
const exhibitInfo = mergeProgramInformation(building, manager, exhibit);
