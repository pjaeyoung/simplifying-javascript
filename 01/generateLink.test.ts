import generateLink from "./generateLink";

describe('<generateLink 함수 테스트>',()=>{
    it('url과 이미지 ID를 조합하고 이미지 너비의 정수값을 쿼리 매개변수로 넘겨주는 형식의 url을 생성합니다.',()=>{
        const imageId = 'image_01';
        const width = '345.2';

        expect(generateLink(imageId,width)).toBe('https://provider.com/image_01?width=345');
    })
})