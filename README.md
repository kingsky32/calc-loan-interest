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
    {
      "round": 3,
      "payment": 12205161.314108878,
      "interest": 689202.2797582031,
      "repayment": 12894363.593867082,
      "balance": 263475750.58917233
    },
    {
      "round": 4,
      "payment": 12235674.21739415,
      "interest": 658689.3764729309,
      "repayment": 12894363.593867082,
      "balance": 251240076.37177816
    },
    {
      "round": 5,
      "payment": 12266263.402937636,
      "interest": 628100.1909294454,
      "repayment": 12894363.593867082,
      "balance": 238973812.9688405
    },
    {
      "round": 6,
      "payment": 12296929.061444981,
      "interest": 597434.5324221012,
      "repayment": 12894363.593867082,
      "balance": 226676883.9073955
    },
    {
      "round": 7,
      "payment": 12327671.384098593,
      "interest": 566692.2097684888,
      "repayment": 12894363.593867082,
      "balance": 214349212.5232969
    },
    {
      "round": 8,
      "payment": 12358490.56255884,
      "interest": 535873.0313082422,
      "repayment": 12894363.593867082,
      "balance": 201990721.96073803
    },
    {
      "round": 9,
      "payment": 12389386.788965236,
      "interest": 504976.8049018451,
      "repayment": 12894363.593867082,
      "balance": 189601335.17177278
    },
    {
      "round": 10,
      "payment": 12420360.25593765,
      "interest": 474003.33792943193,
      "repayment": 12894363.593867082,
      "balance": 177180974.9158351
    },
    {
      "round": 11,
      "payment": 12451411.156577494,
      "interest": 442952.4372895878,
      "repayment": 12894363.593867082,
      "balance": 164729563.7592576
    },
    {
      "round": 12,
      "payment": 12482539.684468938,
      "interest": 411823.90939814405,
      "repayment": 12894363.593867082,
      "balance": 152247024.07478866
    },
    {
      "round": 13,
      "payment": 12513746.033680111,
      "interest": 380617.5601869717,
      "repayment": 12894363.593867082,
      "balance": 139733278.04110855
    },
    {
      "round": 14,
      "payment": 12545030.39876431,
      "interest": 349333.1951027714,
      "repayment": 12894363.593867082,
      "balance": 127188247.64234424
    },
    {
      "round": 15,
      "payment": 12576392.974761222,
      "interest": 317970.6191058606,
      "repayment": 12894363.593867082,
      "balance": 114611854.66758302
    },
    {
      "round": 16,
      "payment": 12607833.957198124,
      "interest": 286529.63666895754,
      "repayment": 12894363.593867082,
      "balance": 102004020.71038489
    },
    {
      "round": 17,
      "payment": 12639353.54209112,
      "interest": 255010.05177596223,
      "repayment": 12894363.593867082,
      "balance": 89364667.16829377
    },
    {
      "round": 18,
      "payment": 12670951.925946347,
      "interest": 223411.66792073444,
      "repayment": 12894363.593867082,
      "balance": 76693715.24234743
    },
    {
      "round": 19,
      "payment": 12702629.305761214,
      "interest": 191734.2881058686,
      "repayment": 12894363.593867082,
      "balance": 63991085.93658622
    },
    {
      "round": 20,
      "payment": 12734385.879025616,
      "interest": 159977.71484146555,
      "repayment": 12894363.593867082,
      "balance": 51256700.0575606
    },
    {
      "round": 21,
      "payment": 12766221.84372318,
      "interest": 128141.7501439015,
      "repayment": 12894363.593867082,
      "balance": 38490478.213837415
    },
    {
      "round": 22,
      "payment": 12798137.398332488,
      "interest": 96226.19553459354,
      "repayment": 12894363.593867082,
      "balance": 25692340.815504927
    },
    {
      "round": 23,
      "payment": 12830132.74182832,
      "interest": 64230.85203876232,
      "repayment": 12894363.593867082,
      "balance": 12862208.073676607
    },
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
