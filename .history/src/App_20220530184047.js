
import './App.css';

function App() {
  return (
    <>
     <div className="container">
	<fieldset id="container">
	  <form name="calculator">
<input type="text" id="display" name="display" readonly/>
<br/>
<br/>
<br/>
<div className="contain">
<input className="buttondigits" type="button" value="7" onclick="calculator.display.value += '7'"/>
<input className="buttondigits" type="button" value="8" onclick="calculator.display.value += '8'"/>
<input className="buttondigits" type="button" value="9" onclick="calculator.display.value += '9'"/>
<input className="mathButtons" type="button" value="+" onclick="calculator.display.value += '+'"/>
</div>

<div className="contain">
<input className="buttondigits" type="button" value="4" onclick="calculator.display.value += '4'"/>
<input className="buttondigits" type="button" value="5" onclick="calculator.display.value += '5'"/>
<input className="buttondigits" type="button" value="6" onclick="calculator.display.value += '6'"/>
<input className="mathButtons" type="button" value="-" onclick="calculator.display.value += '-'"/>
</div>

<div className="contain">
<input className="buttondigits" type="button" value="1" onclick="calculator.display.value += '1'"/>
<input className="buttondigits" type="button" value="2" onclick="calculator.display.value += '2'"/>
<input className="buttondigits" type="button" value="3" onclick="calculator.display.value += '3'"/>
<input className="mathButtons" type="button" value="*" onclick="calculator.display.value += '*'"/>
</div>

<div className="contain">
<input id="clearButton" className="button" type="button" value="C" onclick="calculator.display.value = ''"/>
<input className="buttondigits" type="button" value="0" onclick="calculator.display.value += '0'"/>
<input className= "mathButtons" type="button" value="=" onclick="calculator.display.value = eval(calculator.display.value)"/>
<input className="mathButtons" type="button" value="/" onclick="calculator.display.value += '/'"/>
</div>
</form> 
</fieldset>
</div>
  </>
  );
}

export default App;
