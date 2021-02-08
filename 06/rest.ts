function validateCharacterCount(max: number, items: string[]): boolean {
  return items.every((anItem) => anItem.length < max);
}

// 특정한 컬렉션 형식을 강제
validateCharacterCount(10, ['Hobbs', 'Eagles']);

function validateCharacterCountUpdated(max: number, ...items: string[]): boolean {
  return items.every((anItem) => anItem.length < max);
}

validateCharacterCountUpdated(10, ...['Hobbs', 'Egales']);
validateCharacterCountUpdated(10, 'Hobbs');

const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
