function convertWeight(weight: number): number {
  return weight / 2.2;
}

// convertWegiht를 사용한 모든 스크립트를 찾아 ounces에 0을 넘기는 방식보다
// ounces가 undefined 체크하는 편이 실수를 줄일 수 있음
function convertWeight(weigth: number, ounces: number): number {
  const oz = ounces ? ounces / 16 : 0;
  const total = weigth + oz;
  return total / 2.2;
}

// 부동 소수점 연산 처리를 위해 반올림 위한 소수점 자릿수 인자로 넘기기
function convertWeight(weigth: number, ounces: number, roundTo: number): number {
  const oz = ounces ? ounces / 16 : 0;
  const total = weigth + oz;
  const conversion = total / 2.2;
  const round = roundTo === undefined ? 2 : roundTo;
  return roundToDecimalPlace(conversion, round);
}

// 매개변수 기본값 적용
function convertWeight(weight: number, ounces: number = 0, roundTo: number = 2) {
  const total = weight + ounces;
  const conversion = total / 2.2;
  return roundToDecimalPlace(conversion, roundTo);
}

// 두 번째 인자는 기본값으로 사용하고 싶을 때 null이면 기본값 설정을 무시하기 때문에 undefined로 넘겨야 함
convertWeight(4, undefined, 2);
