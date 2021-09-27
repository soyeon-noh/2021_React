import React from "react";

function CounterInput({ setInputNum }) {
  const onChangeHandler = (e) => {
    const inputNum = e.target.value;
    console.log(inputNum);
    setInputNum(inputNum);
  };
  return (
    <div>
      <input type="number" onChange={onChangeHandler} />
    </div>
  );
}

export default CounterInput;
