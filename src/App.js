import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [state, setState] = useState("");
  const addToPut = (event) => {
    if (state !== "") {
      setNum2(parseInt(num2 + event.target.value));
    } else {
      setNum1(parseInt(num1 + event.target.value));
    }
  };
  const setOprerator = (event) => {
    setState(event.target.value);
  };
  const handleOprerator = (event) => {
    if (state === "/") {
      setNum1(num1 / num2);
      setState("");
    } else if (state === "*") {
      setNum1(num1 * num2);
      setState("");
    } else if (state === "-") {
      setNum1(num1 - num2);
      setState("");
    } else {
      setNum1(num1 + num2);
      setState("");
    }
  };
  const handleclear = () => {
    setNum1();
  };
  return (
    <div>
      <div>{state !== "" ? num2 : num1}</div>
      <div className="row">
        <Button onClick={addToPut}>1</Button>
        <Button onClick={addToPut}>2</Button>
        <Button onClick={addToPut}>3</Button>
        <Button onClick={setOprerator}>/</Button>
      </div>
      <div className="row">
        <Button onClick={addToPut}>4</Button>
        <Button onClick={addToPut}>5</Button>
        <Button onClick={addToPut}>6</Button>
        <Button onClick={setOprerator}>*</Button>
      </div>
      <div className="row">
        <Button onClick={addToPut}>7</Button>
        <Button onClick={addToPut}>8</Button>
        <Button onClick={addToPut}>9</Button>
        <Button onClick={setOprerator}>-</Button>
      </div>
      <div className="row">
        <Button onClick={addToPut}>C</Button>
        <Button onClick={addToPut}>0</Button>
        <Button onClick={setOprerator}>+</Button>

        <Button onClick={handleOprerator}>=</Button>
      </div>
    </div>
  );
}

export default App;
