# 원리금 균등상환, 원금 균등상환 계산 js

## 사용법

```js
import calcLoanInterest from 'calc_loan_interest';

calcLoanInterest(
  0, // method: 상환방법 (0: 원리금 균등 상환, 1: 원금 균등 상환);
  300000000, // loanMoney: 원금
  0.03, // rates: 이자율
  24, // loanDate: 납입기간(월)
  0, // period: 거치기간(월)
);
```

### 결과값

```json
{
  "method": "원리금 균등 상환",
  "loanMoney": 300000000,
  "rates": 0.03,
  "loansDate": 24,
  "monthly": [
    {
      "round": 1,
      "payment": 12144363.593867082,
      "interest": 750000,
      "repayment": 12894363.593867082,
      "balance": 287855636.40613294
    },
    {
      "round": 2,
      "payment": 12174724.50285175,
      "interest": 719639.0910153324,
      "repayment": 12894363.593867082,
      "balance": 275680911.9032812
    },
    ...
    {
      "round": 24,
      "payment": 12862208.073682891,
      "interest": 32155.52018419152,
      "repayment": 12894363.593867082,
      "balance": 0
    }
  ],
  "totalInterest": 9464726.252803795,
  "totalRepay": 309464726.25281
}
```

### 원리금 균등상환

```js
calcLoanInterest(0, 300000000, 0.03, 120);
```

### 원금 균등상환

```js
calcLoanInterest(0, 300000000, 0.03, 120);
```

### 거치 후 원리금 균등상환

```js
calcLoanInterest(0, 300000000, 0.03, 120, 60);
```

### 거치 후 원금 균등상환

```js
calcLoanInterest(0, 300000000, 0.03, 120, 60);
```
