import "./App.css";
import Counter from "./comps/Counter";

import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter plus={plus} minus={minus} number={number} />
      </header>
    </div>
  );
}

export default App;
