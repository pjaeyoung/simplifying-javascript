const prices = ['1.0', 'negotiable', '2.15'];

// 관심사 혼합
const formattedPrices = [];
for (let i = 0; i < prices.length; i++) {
  const price = parseFloat(prices[i]); // 1. 값 변환 (표준화)
  // 한 눈에 모든 값이 포함되는 지 여부 파악 어려움
  if (price) {
    // 2. 불필요한 값 제거
    formattedPrices.push(price); // 예측 가능X (조작)
  }
}
