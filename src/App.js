import { useState } from "react";
import * as math from "mathjs";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  //! A great method, you can perform mathematical operations without writing functions with the mathjs library.
  //all you have to do is npm mathjs, write a function and use the algorithm below
  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" handleClick={addToText} color="#6A9C89" />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} color="#6A9C89" />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} color="#6A9C89" />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" handleClick={addToText} color="#6A9C89" />
        </div>
        <Button symbol="Clear" color="#FF8551" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
