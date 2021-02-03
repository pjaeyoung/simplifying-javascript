import removeItem from './slice';

describe('<removeItem 함수 테스트>', () => {
  //Given
  const books = ['practical vim', 'moby dick', 'the dark tower'];

  it('존재하지 않는 아이템이면 원본을 반환합니다.', () => {
    // When
    const result = removeItem(books, 'not included');
    // Then
    expect(result).toEqual(books);
  });

  it('일치하는 아이템을 제거한 값들로 구성된 배열을 반환합니다.', () => {
    // When
    const result = removeItem(books, 'practical vim');
    //Then
    expect(result).toEqual(['moby dick', 'the dark tower']);
  });
});
