import React,{useState} from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState(0)
  return ( 
    <>
     <div className="container">
    <p>
      This component works exactly like the calculator you know. Click any number to start calculating!
    </p>
    <div className="calculator">
      <div className="calculator__display">{input}</div>

      <div className="calculator__keys">
        <button className="key--operator" data-action="add" value="+">+</button>
        <button className="key--operator" data-action="subtract" value="+">-</button>
        <button className="key--operator" data-action="multiply" value="+">&times;</button>
        <button className="key--operator" data-action="divide" value="+">÷</button>
        <button value="+">7</button>
        <button value="+">8</button>
        <button value="+">9</button>
        <button value="+">4</button>
        <button value="+">5</button>
        <button value="+">6</button>
        <button value="+">1</button>
        <button value="+">2</button>
        <button value="+">3</button>
        <button value="+">0</button>
        <button data-action="decimal" value="+">.</button>
        <button data-action="clear" value="+">AC</button>
        <button className="key--equal" data-action="calculate" value="+">=</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
