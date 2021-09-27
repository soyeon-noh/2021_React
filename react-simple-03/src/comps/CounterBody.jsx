import React from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody({ inputNum, setInputNum }) {
  return (
    <div>
      <CounterInput setInputNum={setInputNum} />
      <CounterView inputNum={inputNum} />
    </div>
  );
}

export default CounterBody;
