interface ISailor {
  name: string;
  active: boolean;
  email: string;
}

const sailors: ISailor[] = [
  { name: 'yi hong', active: true, email: 'yh@yhproduction.io' },
  { name: 'alex', active: true, email: '' },
  { name: 'nathan', active: false, email: '' },
];

// 체이닝을 사용하지 않으면 매번 변수에 결과값 할당하는 과정이 필요
const active: ISailor[] = sailors.filter((aSailor) => aSailor.active);
const emails: string[] = active.map((member) => member.email || `${member.name}@wiscsail.io`);
emails.forEach((aSailor) => sendEmail(aSailor));

sailors
  .filter((aSailor) => aSailor.active)
  .map((member) => member.email || `${member.name}@wiscsail.io`)
  .forEach((aSailor) => sendEmail(aSailor));
