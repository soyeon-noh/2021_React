import React from "react";

function Counter(props) {
  const { number, plus, minus } = props;
  return (
    <div>
      <div>카운트 : {number}</div>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
}

export default Counter;
