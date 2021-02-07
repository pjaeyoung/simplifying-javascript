const team: string[] = ['Michelle B', 'Dave L', 'Dave C', 'Courtney B', 'Davaina M'];

const daves: string[] = [];
for (let member of team) {
  if (member.match(/Dav/)) {
    daves.push(member);
  }
}

const daves = team.filter((member) => member.match(/Dav/));

interface IInstructor {
  name: string;
  libraries: string[];
}

const instructors: IInstructor[] = [
  { name: '짐', libraries: ['미디어교육정보 도서관'] },
  { name: '새라', libraries: ['기념 도서관', '문헌정보학 도서관'] },
  { name: '엘리엇', libraries: ['중앙 도서관'] },
];

let memorialInstructor: IInstructor;
for (let anInstructor of instructors) {
  if (anInstructor.libraries.includes('기념 도서관')) {
    memorialInstructor = anInstructor;
    break;
  }
}

// 반환값 확신 불가 , 찾지 못하면 undefined 반환
const memorialInstructor: IInstructor = instructors.find((anInstructor) => anInstructor.libraries.includes('기념 도서관'));

// 단락 평가를 통해 기본값 적용
const memorialInstructor: IInstructor = instructors.find((anInstructor) => anInstructor.libraries.includes('기념 도서관')) || { name: '한스', libraries: ['기념 도서관'] };

// 커링을 사용
const findByLibrary = (library: string) => (anInstructor: IInstructor) => anInstructor.libraries.includes(library);
const librarian: IInstructor = instructors.find(findByLibrary('미디어교육정보 도서관'));
