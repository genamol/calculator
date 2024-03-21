import "./App.css";
import { Button, isOperator } from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import Logo from "./components/Logo";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addToInput = (val) => {
    if (isOperator(val) && isOperator(input[input.length - 1])) {
      setInput(input.slice(0, -1) + val);
      return;
    }
    setInput(input + val);
  };

  const clear = () => {
    setInput("");
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input).toString());
    } else {
      alert("Please enter a valid expression");
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className="calculator-container">
        <Screen input={input} />
        <div className="line">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="line">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="line">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="line">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="line">
          <ClearButton handleClear={clear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
