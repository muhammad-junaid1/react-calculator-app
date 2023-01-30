import {useState, useEffect} from "react";

function App() {
  const [expressionValue, setExpressionValue] = useState("0");
  const [expression, setExpression] = useState("0");
  const [prevExpression, setPrevExpression] = useState("");
  const [operationSymbol, setOperationSymbol] = useState("");
  const [operationValues, setOperationValues] = useState({
    firstValue: 0,
    secondValue: 0
  });
  const [hasMounted, setHasMounted] = useState(false);

  function calculate(opSymbol, opValues) {
    const {firstValue, secondValue} = opValues;

    let calculation;
    if(opSymbol === "+") {
      calculation = firstValue + secondValue;
    } else if(opSymbol === "-") {
      calculation = firstValue - secondValue;
    } else if(opSymbol === "*"){
      calculation = firstValue * secondValue;
    } else {
      calculation = firstValue / secondValue;
    }

    return String(calculation);
  }

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
    setExpressionValue((value) => expressionVal(value, buttonValue));
    setExpression((value) => expressionVal(value, buttonValue));
  }
  const allClear = () => {
    setExpressionValue("");
    setExpression("");
  }

  const deleteChar = () => {
    setExpressionValue((value) => {
      return value.slice(0, value.length - 1);
    });
    setExpression((value) => {
      return value.slice(0, value.length - 1);
    });
  }

  const performOperation = (event) => {
    const operationSymbol = event.target.innerText;
  if(expression && expression !== "0") {
      if(!(expression.includes("*") || expression.includes("/") || expression.includes("+") || expression.includes("-"))) {
        const firstValue = parseFloat(expressionValue);
        setOperationValues((operationValues) => {
          return {...operationValues, firstValue};
        });
        setOperationSymbol(operationSymbol);

        setExpression((expression) => expression + operationSymbol);
        setExpressionValue("");
      }
    }
  }

  const handleClickResultBtn = () => {
    if(expressionValue && operationSymbol) {
      setOperationValues((operationValues) => {
        return {...operationValues, secondValue: parseFloat(expressionValue)};
      });
    }
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if(!expression) {
      setExpression("0");
    }
    if(!expressionValue) {
      setExpressionValue("0");
    }

   }, [expressionValue, expression]);

  useEffect(() => {
    if(hasMounted) {
      setExpression(calculate(operationSymbol, operationValues));
      setExpressionValue(calculate(operationSymbol, operationValues));
      setOperationSymbol("");
    }

  }, [operationValues.secondValue]);

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
