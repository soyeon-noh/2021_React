import React from "react";

function CounterView(props) {
  const { inputNum } = props;

  const _inputNum = parseInt(inputNum);

  let resultAdd, resultMul;
  if (inputNum) {
    resultAdd = _inputNum + 20;
    resultMul = _inputNum * _inputNum;
  }

  return (
    <div>
      <div>
        {inputNum} 와 20의 합: {resultAdd}
      </div>
      <div>
        {inputNum} 와 {inputNum}의 곱: {resultMul}
      </div>
    </div>
  );
}

export default CounterView;
