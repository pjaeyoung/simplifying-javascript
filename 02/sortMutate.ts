interface IStaff {
  name: string;
  years: number;
}

const staff: IStaff[] = [
  {
    name: 'Joe',
    years: 10,
  },
  {
    name: 'Theo',
    years: 5,
  },
  {
    name: 'Dyan',
    years: 10,
  },
];

function sortByYear(memberA: IStaff, memberB: IStaff): number {
  if (memberA.years === memberB.years) {
    return 0;
  }
  return memberA.years - memberB.years;
}

function sortByName(memberA: IStaff, memberB: IStaff): number {
  if (memberA.name === memberB.name) {
    return 0;
  }
  return memberA.name > memberB.name ? 1 : -1;
}

// 같은 근속연수가 여러 명이 있을 때 매번 name 순서가 바뀜
staff.sort(sortByYear);
staff.sort(sortByName);
staff.sort(sortByYear);

// 원본 변경없이 항상 name 순서가 유지할 수 있도록 함
[...staff].sort(sortByYear);
[...staff].sort(sortByName);
[...staff].sort(sortByYear);
