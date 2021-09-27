import React from "react"; // 15버전 이상에서는 필요 x

function CounterView({ count }) {
  return (
    <div>
      <div>카운트 : {count}</div>
    </div>
  );
}

export default CounterView;
