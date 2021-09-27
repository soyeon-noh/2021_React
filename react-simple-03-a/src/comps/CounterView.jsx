import React from "react";

function CounterView({ count }) {
  const number = Number(count);
  return (
    <div>
      <div>두 수의 합: {number + number}</div>
      <div>두 수의 곱: {number * number}</div>
    </div>
  );
}

export default CounterView;
