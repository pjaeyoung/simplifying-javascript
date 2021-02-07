const prices = ['1.0', '2.15'];
// 예측 가능(실수 형태의 값들로 구성된 같은 길이의 배열 반환), 간결, 가독성
const formattedPrices = prices.map((aPrice) => parseFloat(aPrice));

const prices2 = ['1.0', '흥정가능', '2.15'];
const _identity = (arg) => arg;
const formattedPrices2 = prices2.map((aPrice) => parseFloat(aPrice)).filter(_identity);

export {};
