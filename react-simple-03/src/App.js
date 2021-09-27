import "./App.css";
import CounterBody from "./comps/CounterBody";
import { useState } from "react";

function App() {
  const [inputNum, setInputNum] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody inputNum={inputNum} setInputNum={setInputNum} />
      </header>
    </div>
  );
}

export default App;
