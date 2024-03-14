import { flatCalculation } from "./calculateFlat_Interst";
import { reducingCalculation } from "./calculateReducing_Interst";

export function handleFromData(targetObject, year_OR_month) {
  // targetObject : {
  //     0 : firstHTML_Element,
  //     1 : secondHTML_Element,
  //     2 : thirdHTML_Element,
  //     ...
  //     ...
  // }

  // In my case the firstElement is <input> like onWards

  // principalAmount (p) , Interst (i) , tenure (t)

  let p = Number(targetObject[0].value);
  let i = Number(targetObject[1].value);
  let t = Number(targetObject[2].value);

  if (year_OR_month === "year") {
    t = t * 12;
  }

  let flatObj = flatCalculation({ p , i , t});
  let reducingObj = reducingCalculation({ p , i , t});


  console.log(flatObj);
  console.log(reducingObj)
}
