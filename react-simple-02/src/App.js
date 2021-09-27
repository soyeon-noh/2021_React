import "./App.css";
import CounterView from "./comps/CounterView";
import CounterInput from "./comps/CounterInput";
import { useState } from "react";

function App() {
  const [inputNum, setInputNum] = useState();

  const takeInputNum = (e) => {
    console.log(e.target.value);
    setInputNum(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput takeInputNum={takeInputNum} />
        <CounterView inputNum={inputNum} />
      </header>
    </div>
  );
}

export default App;
