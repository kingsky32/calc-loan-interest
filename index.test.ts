import calcLoanInterest from './index';

test('원리금 균등 상환 테스트', () => {
  expect(calcLoanInterest(0, 300000000, 0.03, 120));
});

test('원금 균등 상환 테스트', () => {
  expect(calcLoanInterest(0, 300000000, 0.03, 120));
});

test('거치 후 원리금 균등 상환 테스트', () => {
  expect(calcLoanInterest(0, 300000000, 0.03, 120, 60));
});

test('거치 후 원금 균등 상환 테스트', () => {
  expect(calcLoanInterest(0, 300000000, 0.03, 120, 60));
});
