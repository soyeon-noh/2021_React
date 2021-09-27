import React from "react";

function CounterView({ inputNum }) {
  let _inputNum, resultPlus, resultMulti;
  if (inputNum) {
    _inputNum = parseInt(inputNum);
  } else {
    _inputNum = 0;
  }

  resultPlus = _inputNum + 20;
  resultMulti = _inputNum * _inputNum;

  return (
    <div>
      <div>
        {_inputNum} + 20 = {resultPlus}
      </div>
      <div>
        {_inputNum} x {_inputNum} = {resultMulti}
      </div>
    </div>
  );
}

export default CounterView;
