const firms = new Map().set(10, 'Ivie Group').set(23, 'Soundscaping Source').set(31, 'Big 6');
const available: number[] = [10];
function isAvailable(id: number): boolean {
  return available.includes(id);
}

const entries = [...firms];
// for (let i = 0; i < entries.length; i++) {
//   const [id, name] = entries[i];
//   if (!isAvailable(id)) {
//     return `${name}는 사용할 수 없습니다.`;
//   }
//   return '모든 회사를 사용할 수 있습니다.';
// }

// const unavailable = [...firms].find(([id]) => !isAvailable(id));
// if (unavailable) {
//   return `${unavailable[1]}는 사용할 수 없습니다.`;
// }
// return '모든 회사를 사용할 수 있습니다.';

// for (const [id, name] of firms) {
//   if (!isAvailable) {
//     return `${name}는 사용할 수 없습니다.`;
//   }
// }
// return `모든 회사를 사용할 수 있습니다.`;

const unavailable = [...firms].filter(([id]) => !isAvailable(id)).map(([id, name]) => name);
if (unavailable.length > 0) {
  console.log(`${unavailable.join(',')}는 사용할 수 없습니다.`);
}

export {};
