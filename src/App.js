import {useState, useEffect} from "react";

function App() {
  const [expression, setExpression] = useState("0");
  const [prevExpression, setPrevExpression] = useState("");

  function expressionVal(value, buttonValue){
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
    }

  const handleClick = (event) => {
    const buttonValue = event.target.innerText;
    setExpression((value) => expressionVal(value, buttonValue));
  }
  const allClear = () => {
    setExpression("");
    setPrevExpression(null);
  }

  const deleteChar = () => {
    setExpression((value) => {
      return value.slice(0, value.length - 1);
    });
  }

  const performOperation = (event) => {
    const operationSymbol = event.target.innerText;
  if(expression && expression !== "0") {
      if(!(expression.includes("*") || expression.includes("/") || expression.includes("+") || expression.includes("-"))) {
        setExpression((expression) => expression + operationSymbol);
      }
    }
  }

  const getOpValues = (operationSymbol, expression, operationValues) => {
      operationValues.firstValue = expression.slice(0, expression.indexOf(operationSymbol));
      operationValues.secondValue = expression.slice(expression.indexOf(operationSymbol) + 1, expression.length);
  }

  const isSymbolFoundInExpression = (expression) => {
    if(expression.includes("+") || expression.includes("-") || expression.includes("*") || expression.includes("/")) {
      return true;
    } else {
      return false;
    }
  }

  const isSecondValueFoundInExpression = (expression) => {
    const lastChar = expression[expression.length - 1];
    if(lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/"){
      return true;
    } else {
      return false;
    }
  }

  const handleClickResultBtn = () => {
    const isSymbolFound = isSymbolFoundInExpression(expression);
    const isSecondValueFound = isSecondValueFoundInExpression(expression);
    if(isSymbolFound && expression !== "0" && isSecondValueFound) {
        const operationValues = {
          firstValue: 0,
          secondValue: 0,
        };
        let result = expression;
        if(expression.includes("+")) {
          getOpValues("+", expression, operationValues);
          result = parseFloat(operationValues.firstValue) + parseFloat(operationValues.secondValue);
        } else if(expression.includes("-")) {
          getOpValues("-", expression, operationValues);
          result = parseFloat(operationValues.firstValue) - parseFloat(operationValues.secondValue);
        } else if(expression.includes("*")) {
          getOpValues("*", expression, operationValues);
          result = parseFloat(operationValues.firstValue) * parseFloat(operationValues.secondValue);
        } else if(expression.includes("/")) {
          getOpValues("/", expression, operationValues);
          result = parseFloat(operationValues.firstValue) / parseFloat(operationValues.secondValue);
        }

        setPrevExpression(expression + " =");
        if(isNaN(result)) {
          setExpression("Error");
        } else {
          setExpression(String(result));
        }
    }
  }

  useEffect(() => {
    if(!expression) {
      setExpression("0");
    }
   }, [expression]);

  return (
    <>
      <div className="container w-1/4 rounded mt-[80px] mx-auto shadow-md">
          <div className="relative rounded-tl rounded-tr bg-blue-600 text-white py-10 font-bold text-right">
              <p className="text-[18px] font-light absolute top-2 text-gray-200 right-4">{prevExpression}</p>
              <p className="text-[28px] absolute bottom-1 right-4">{expression}</p>
          </div>
          <div className="grid grid-cols-4">
              <button onClick={allClear} className="col-span-2 bg-slate-300">AC</button>
              <button onClick={deleteChar} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">DEL</button>
              <button onClick={performOperation} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">/</button>
              {[7, 8, 9].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button onClick={performOperation} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">*</button>
              {[4, 5, 6].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button onClick={performOperation} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">+</button>
              {[1, 2, 3].map((btn) => <button key={btn} onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">{btn}</button>)}
              <button onClick={performOperation} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">-</button>
              <button onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">.</button>
              <button onClick={handleClick} className="p-4 bg-gray-200 border border-lime-50 hover:bg-gray-300 border-collapse">0</button>
              <button onClick={handleClickResultBtn} className="col-span-2 bg-slate-300 text-[24px]">=</button>
          </div>
      </div>
    </>
  );
}

export default App;
