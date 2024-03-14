import { useRef, useState, createContext } from "react";
import { flatCalculation } from "./Calculations/calculateFlat_Interst.js";
import { handleFromData } from "./Calculations/handleFormData.js";



export default function App() {
 
  const [flat_EMI, setFlat_EMI] = useState(0);
  const [flat_TotalInterst, setFlat_TotalInterst] = useState(0);
  const [flat_TotalBalance, setFlat_TotalBalance] = useState(0);

  const [reducing_EMI, setReducing_EMI] = useState(0);
  const [reducing_TotalInterst, setReducing_TotalInterst] = useState(0);
  const [reducing_TotalBalance, setReducing_TotalBalance] = useState(0);

  const [savingInterst_thanFlat, setSavingInterst_thenFlat] = useState(0);

  const rateOfInterstRef = useRef();

  const principalAmountRef = useRef();
  const [principalAmountValue, setPrincipalAmountValue] = useState("%");

  const [selectedValueInYearOrMonth, setSelectedValueInYearOrMonth] =
    useState("year");


  

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          handleFromData(e.target , selectedValueInYearOrMonth)
        }}
        className="flex flex-col w-[50%] border p-3 gap-3 m-auto mt-10"
      >
        <input
          type="number"
          autoFocus
          // value={principalAmountValue}
          // onChange={() => console.log(principalAmountRef)}
          ref={principalAmountRef}
          placeholder="Principal Amount"
        />
        <input
          type="number"
          ref={rateOfInterstRef}
          placeholder="Rate of Interst"
        />
        <div className="flex">
          <input type="number" className="w-full h-fit py-1" ref={rateOfInterstRef} placeholder="Tenure" />

          <select
            value={selectedValueInYearOrMonth}
            onChange={(e) => setSelectedValueInYearOrMonth(e.target.value)}
            className="bg-red-600 text-white outline-none w-fit px-2"
            name=""
            id=""
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>

        <button
          className="bg-blue-700 w-fit m-auto px-3 py-1 rounded-md"
          type="submit"
        >
          Calculate
        </button>

        <div className="flex justify-between">
          <table className="w-[100%] border relative text-center" name="flat">
            <tbody>
              <tr>
                <td className=" p-2"></td>
                <td className=" p-2">Flat</td>
                <td className=" p-2">Reducing</td>
              </tr>
              <tr>
                <td className="border p-2 w-[30%]">EMI</td>
                <td className="border p-2 w-[35%]">{flat_EMI}</td>
                <td className="border p-2">{reducing_EMI}</td>
              </tr>
              <tr>
                <td className="border p-1">Total Interst</td>
                <td className="border p-2">{flat_TotalInterst}</td>
                <td className="border p-2">{reducing_TotalInterst}</td>
              </tr>
              <tr>
                <td className="border p-2">Total</td>
                <td className="border p-2">{flat_TotalBalance}</td>
                <td className="border p-2">{reducing_TotalBalance}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <label htmlFor="">Interst Saving in Reducing : </label>
          <input
            type="text"
            readOnly
            value={savingInterst_thanFlat}
            className="border-none p-1 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}

//   Reducing
//
