enum CalcLoanInterestMethod {
  '원리금 균등 상환' = 0,
  '원금 균등 상환' = 1,
}

const CALC_LOAN_INTEREST_TYPES = {
  0: '원리금 균등 상환',
  1: '원금 균등 상환',
};

interface MonthlyProps {
  round: number; // 회차
  payment: number; // 납입원금
  interest: number; // 대출이자
  repayment: number; // 월상환금
  balance: number; // 대출잔금
}

type methodType = 0 | 1;

interface CalcInterestProps {
  method: CalcLoanInterestMethod | string; // 상환방법
  loanMoney: number; // 원금
  rates: number; // 이자율
  loansDate: number; // 납입기간(월)
  monthly: MonthlyProps[]; // 월 상환
  totalInterest?: number; // 총대출이자
  totalRepay?: number; // 총상환금액
}

/**
 * @param {number} method 상환방법 (0: 원리금 균등 상환, 1: 원금 균등 상환);
 * @param {number} loanMoney 원금;
 * @param {number} rates 이자율;
 * @param {number} loansDate 납입기간(월);
 * @param {number} period 거치기간(월);
 */
const calcLoanInterest = (
  method: methodType,
  loanMoney: number,
  rates: number,
  loansDate: number,
  period?: number,
): CalcInterestProps => {
  const obj: CalcInterestProps = {
    method: CALC_LOAN_INTEREST_TYPES[method], // 상환방법
    loanMoney, // 대출 원금
    rates, // 이자율
    loansDate, // 대출 기간
    monthly: [], // 월 상환
    totalInterest: undefined, // 총대출이자
    totalRepay: undefined, // 총상환금액
  };
  // 원리금균등
  if (method === 0) {
    obj.monthly = [...Array(loansDate)].reduce((a, _, i): MonthlyProps[] => {
      const interest = a[i - 1]?.balance * (rates / 12) || loanMoney * (rates / 12); // 대출 이자
      const repayment =
        period && period >= i + 1
          ? interest
          : (loanMoney * (rates / 12) * (1 + rates / 12) ** (loansDate - (period ?? 0))) /
            ((1 + rates / 12) ** (loansDate - (period ?? 0)) - 1); // 월상환금
      const payment = period && period >= i + 1 ? 0 : repayment - interest; // 납입원금
      const balance = (a[i - 1]?.balance || loanMoney) - repayment + interest; // 대출잔금
      const result: MonthlyProps = {
        round: i + 1,
        payment,
        interest,
        repayment,
        balance: balance > 0 ? balance : 0,
      };

      return [...a, result];
    }, []);
  }

  // 원금균등
  if (method === 1) {
    obj.monthly = [...Array(loansDate)].reduce((a, _, i): MonthlyProps[] => {
      const interest: number = (a[i - 1]?.balance ?? loanMoney) * (rates / 12); // 대출 이자
      const payment: number = period && period >= i + 1 ? 0 : loanMoney / (loansDate - (period ?? 0)); // 납입원금
      const repayment: number = payment + interest; // 월상환금1
      const balance: number = (a[i - 1]?.balance || loanMoney) - repayment + interest; // 대출잔금
      const result: MonthlyProps = {
        round: i + 1,
        payment,
        interest,
        repayment,
        balance: balance > 0 ? balance : 0,
      };

      return [...a, result];
    }, []);
  }

  obj.totalInterest = obj.monthly?.reduce((a, c) => a + c.interest || 0, 0); // 총대출이자
  obj.totalRepay = obj.monthly?.reduce((a, c) => a + c.repayment || 0, 0); // 총상환금액

  return obj;
};

export default calcLoanInterest;
