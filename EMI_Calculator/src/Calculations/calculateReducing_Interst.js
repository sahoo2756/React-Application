export function reducingCalculation({p , i , t}){
    //  p (principalAmount) , i (Rate Of Interst in yearly) , n(in months)

    
    i = i / (12 * 100) // coverting the yearly interst rate into monthly interst rate.
    // i =1.667

    // formula = [p * i * (1+i)^t] / [(1+i)^t - 1]
    // here i should in montghly basic interst 
    let power = Math.pow((1+i) , t);
    // 114554049.54111

    let EMI = (p * i * power) / (power - 1);
    // EMI = Math.round(EMI); 

    let totalInterst = (EMI * t) - p ;
    // totalInterst = Math.round(totalInterst)

    let totalAmountwithInterst = totalInterst + p;

    return {
        EMI : Math.round(EMI),
        totalInterst : Math.round(totalInterst),
        totalAmountwithInterst : Math.round(totalAmountwithInterst)
      }

}