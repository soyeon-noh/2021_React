import React, { useState } from "react";

function CounterInput({ takeInputNum }) {
  return (
    <div className="input">
      <input type="number" onChange={takeInputNum} />
    </div>
  );
}

export default CounterInput;
