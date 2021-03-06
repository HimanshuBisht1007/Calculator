
import './App.css';

function App() {
  return (
    <>
     <div className="container">
    <p>
      This component works exactly like the calculator you know. Click any number to start calculating!
    </p>
    <div className="calculator">
      <div className="calculator__display">0</div>

      <div className="calculator__keys">
        <button className="key--operator" data-action="add">+</button>
        <button className="key--operator" data-action="subtract">-</button>
        <button className="key--operator" data-action="multiply">&times;</button>
        <button className="key--operator" data-action="divide">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button className="key--equal" data-action="calculate">=</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
