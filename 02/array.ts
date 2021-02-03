// 배열로 유연한 컬렉션을 생성
const team: string[] = ['Joe', 'Dyan', 'Bea', 'Theo'];

function alphabetizeTeam(team: string[]): string[] {
  return [...team].sort();
}

alphabetizeTeam(team);

interface IStaff {
  name: string;
  position: string;
}

const staff: IStaff[] = [
  {
    name: 'Wesley',
    position: 'musician',
  },
  {
    name: 'Davis',
    position: 'engineer',
  },
];

function getMusicians(staff: IStaff[]): IStaff[] {
  return staff.filter((member) => member.position === 'musician');
}

getMusicians(staff);

//includes()로 존재 여부 확인

const sections: string[] = ['contact', 'shipping'];

function displayingShipping(sections: string[]): boolean {
  return sections.includes('shipping');
}

displayingShipping(sections);

export {};
