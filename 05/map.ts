// map 사용 대표적인 예 - 객체에서 특정한 정보 꺼내는 경우
interface IBand {
  name: string;
  instrument: string;
}

const bands: IBand[] = [
  {
    name: 'corbett',
    instrument: 'guitar',
  },
  {
    name: 'evan',
    instrument: 'guitar',
  },
  {
    name: 'sean',
    instrument: 'bass',
  },
  {
    name: 'brett',
    instrument: 'drums',
  },
];

// map을 쓰지 않을 경우
const instruments: string[] = [];
for (const aBand of bands) {
  instruments.push(aBand.instrument);
}

// map을 쓸 경우

/*
function getInstrument(aBand){
    return aBand.instrument;
}

// 테스트 목적일 경우 기명함수로 콜백함수에 넘겨주면 좋다 
const instruments = bands.map(getInstrument)
*/
const instruments: string[] = bands.map((aBand) => aBand.instrument);
