import React from "react"; // 15버전 이상에서는 필요 x

function CounterButton({ plus, minus }) {
  return (
    <div>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
}

export default CounterButton;
