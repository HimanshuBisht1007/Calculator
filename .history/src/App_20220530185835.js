import React,{useState} from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState(0)
  const handleClick = (e) => {
      setInput(e.target.value)
  }
  return ( 
    <>
     <div className="container">
    <p>
      This component works exactly like the calculator you know. Click any number to start calculating!
    </p>
    <div className="calculator">
      <div className="calculator__display">{input}</div>

      <div className="calculator__keys">
        <button className="key--operator" data-action="add" value="+"  onClick={handleClick}>+</button>
        <button className="key--operator" data-action="subtract" value="-" onClick={handleClick}>-</button>
        <button className="key--operator" data-action="multiply" value="*" onClick={handleClick}>x</button>
        <button className="key--operator" data-action="divide" value="/" onClick={handleClick}>÷</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="7" onClick={handleClick}>1</button>
        <button value="8" onClick={handleClick}>2</button>
        <button value="9" onClick={handleClick}>3</button>
        <button value="0" onClick={handleClick}>0</button>
        <button data-action="decimal" value="." onClick={handleClick}>.</button>
        <button data-action="clear" onClick={handleClick}>AC</button>
        <button className="key--equal" data-action="calculate"  onClick={handleClick}>=</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
