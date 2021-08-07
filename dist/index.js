"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var CalcLoanInterestMethod;
(function (CalcLoanInterestMethod) {
    CalcLoanInterestMethod[CalcLoanInterestMethod["\uC6D0\uB9AC\uAE08 \uADE0\uB4F1 \uC0C1\uD658"] = 0] = "\uC6D0\uB9AC\uAE08 \uADE0\uB4F1 \uC0C1\uD658";
    CalcLoanInterestMethod[CalcLoanInterestMethod["\uC6D0\uAE08 \uADE0\uB4F1 \uC0C1\uD658"] = 1] = "\uC6D0\uAE08 \uADE0\uB4F1 \uC0C1\uD658";
})(CalcLoanInterestMethod || (CalcLoanInterestMethod = {}));
var CALC_LOAN_INTEREST_TYPES = {
    0: '원리금 균등 상환',
    1: '원금 균등 상환'
};
/**
 * @param {number} method 상환방법 (0: 원리금 균등 상환, 1: 원금 균등 상환);
 * @param {number} loanMoney 원금;
 * @param {number} rates 이자율;
 * @param {number} loansDate 납입기간(월);
 * @param {number} period 거치기간(월);
 */
var calcLoanInterest = function (method, loanMoney, rates, loansDate, period) {
    var _a, _b;
    var obj = {
        method: CALC_LOAN_INTEREST_TYPES[method],
        loanMoney: loanMoney,
        rates: rates,
        loansDate: loansDate,
        monthly: [],
        totalInterest: undefined,
        totalRepay: undefined
    };
    // 원리금균등
    if (method === 0) {
        obj.monthly = __spreadArray([], Array(loansDate)).reduce(function (a, _, i) {
            var _a, _b;
            var interest = ((_a = a[i - 1]) === null || _a === void 0 ? void 0 : _a.balance) * (rates / 12) || loanMoney * (rates / 12); // 대출 이자
            var repayment = period && period >= i + 1
                ? interest
                : (loanMoney * (rates / 12) * Math.pow((1 + rates / 12), (loansDate - (period !== null && period !== void 0 ? period : 0)))) /
                    (Math.pow((1 + rates / 12), (loansDate - (period !== null && period !== void 0 ? period : 0))) - 1); // 월상환금
            var payment = period && period >= i + 1 ? 0 : repayment - interest; // 납입원금
            var balance = (((_b = a[i - 1]) === null || _b === void 0 ? void 0 : _b.balance) || loanMoney) - repayment + interest; // 대출잔금
            var result = {
                round: i + 1,
                payment: payment,
                interest: interest,
                repayment: repayment,
                balance: balance > 0 ? balance : 0
            };
            return __spreadArray(__spreadArray([], a), [result]);
        }, []);
    }
    // 원금균등
    if (method === 1) {
        obj.monthly = __spreadArray([], Array(loansDate)).reduce(function (a, _, i) {
            var _a, _b, _c;
            var interest = ((_b = (_a = a[i - 1]) === null || _a === void 0 ? void 0 : _a.balance) !== null && _b !== void 0 ? _b : loanMoney) * (rates / 12); // 대출 이자
            var payment = period && period >= i + 1 ? 0 : loanMoney / (loansDate - (period !== null && period !== void 0 ? period : 0)); // 납입원금
            var repayment = payment + interest; // 월상환금1
            var balance = (((_c = a[i - 1]) === null || _c === void 0 ? void 0 : _c.balance) || loanMoney) - repayment + interest; // 대출잔금
            var result = {
                round: i + 1,
                payment: payment,
                interest: interest,
                repayment: repayment,
                balance: balance > 0 ? balance : 0
            };
            return __spreadArray(__spreadArray([], a), [result]);
        }, []);
    }
    obj.totalInterest = (_a = obj.monthly) === null || _a === void 0 ? void 0 : _a.reduce(function (a, c) { return a + c.interest || 0; }, 0); // 총대출이자
    obj.totalRepay = (_b = obj.monthly) === null || _b === void 0 ? void 0 : _b.reduce(function (a, c) { return a + c.repayment || 0; }, 0); // 총상환금액
    return obj;
};
exports["default"] = calcLoanInterest;
