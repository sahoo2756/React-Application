export function flatCalculation({ p, i, t }) {
  // p (prncipalAmount), i (Rate of Interst in - yearly) , t (Tenure in month)

  
  let per_yearInterst = (p * i) / 100;
  let totalInterst = per_yearInterst * (t/12);
  let EMI = (p + totalInterst) / t;
  let totalAmountwithInterst = p + totalInterst;

  return {
    EMI : Math.round(EMI),
    totalInterst : Math.round(totalInterst),
    totalAmountwithInterst : Math.round(totalAmountwithInterst)
  }
}

