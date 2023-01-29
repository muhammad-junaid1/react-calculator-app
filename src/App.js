import {useState, useEffect} from "react";

function App() {
  const [value, setValue] = useState("0");

  const handleClick = (event) => {
    const buttonValue = event.target.innerText;
    setValue((value) => {
      if(value.length >= 20) {
        return value;
      } else {
        if(value.includes(".") && buttonValue === ".") {
          return value; 
        }
        if(parseFloat(value)) {
          return value + buttonValue;
        } else {
          return buttonValue;
        }
      }
    });
  }
  const allClear = () => {
    setValue("");
  }

  const deleteChar = () => {
    setValue((value) => {
      return value.slice(0, value.length - 1);
    });
  }

  useEffect(() => {
    if(!value) {
      setValue("0");
    }
  }, [value]);

  return (
    <>
      <div className="container w-1/4 rounded mt-[80px] mx-auto shadow-md">
          <div className="relative rounded-tl rounded-tr bg-blue-600 text-white py-10 font-bold text-right">
              <p className="text-[18px] font-light absolute top-2 text-gray-200 right-4">Ans = 0</p>
              <p className="text-[28px] absolute bottom-1 right-4">{value}</p>
          </div>
          <div className="grid grid-cols-4">
              <button onClick={allClear} className="col-span-2 bg-slate-300">AC</button>
              <button onClick={deleteChar} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">DEL</button>
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">+</button>
              {[7, 8, 9].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">*</button>
              {[4, 5, 6].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">+</button>
              {[1, 2, 3].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">-</button>
              <button onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">.</button>
              <button onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">0</button>
              <button className="col-span-2 bg-slate-300 text-[24px]">=</button>
          </div>
      </div>
    </>
  );
}

export default App;
