import { getFirstGIF } from './conditional';

describe('<getFirstGIF 함수>', () => {
  // Given
  const defaultGif = 'default.gif';
  it('유저 설정 객체의 이미지 속성값이 빈 배열이면 기본 gif를 반환합니다.', () => {
    //Given
    const userConfig = {
      images: [],
    };
    //When
    const result = getFirstGIF(userConfig);
    //Then
    expect(result).toBe(defaultGif);
  });
  it('유저 설정 객체의 이미지 배열에 gif가 없다면 기본 gif를 반환합니다.', () => {
    //Given
    const userConfig = {
      images: ['a.png'],
    };
    //When
    const result = getFirstGIF(userConfig);
    //Then
    expect(result).toBe(defaultGif);
  });
  it('유저 설정 객체의 이미지 배열에 gif가 있다면 색인 순서가 맨 앞에 있는 gif를 반환합니다.', () => {
    //Given
    const userConfig = {
      images: ['a.png', 'b.gif', 'c.gif'],
    };
    //When
    const result = getFirstGIF(userConfig);
    //Then
    expect(result).toBe('b.gif');
  });
});
