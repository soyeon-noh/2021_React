import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

let orderCount = 0;
let nextTurn = "O";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState([["O", "X"]]);

  // squares 배열의 index 번재 요소의 값을 변경하려고한다.
  // 매개변수로 index 값을 넘겨받는다.
  const changeSquares = (index) => {
    // squares[index] = "B"; // 절대 불가

    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면
    // 배열의 값이 복제되지 않고
    // 배열이 저장된 저장소 위치가 복제된다.
    // 결국 _squares 와 squares 는 같은 배열이다.
    // (A집과 B집에 같은 사람이 사는 것)
    // 배열을 복제할때는 반드시 전개연산자로 수행한다.
    const _squares = [...squares]; // 복제
    const _turn = [...turn];

    // 현재 턴이 누구인지 지정
    orderCount % 2 == 0 ? (_turn = ["O", "X"]) : (_turn = ["X", "O"]);
    setTurn(_turn);

    if (!_squares[index]) {
      _squares[index] = turn[0];
    } else if (_squares[index] != turn[0]) {
      _squares[index] = turn[0];
    } else {
      return;
    }

    // 카운트 증가
    orderCount++;
    // 다음턴 알려주기
    nextTurn = turn[1];
    setSquares(_squares); // 복제된 배열을 원래 배열과 교체
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // (무언가를 전달하고자 할때 함수방식은 불편하다)
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법(권장)
  // return <div><RenderSquare/><div>;
  return (
    <div>
      <div>다음 플레이어 : {nextTurn}</div>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
    </div>
  );
}

export default Board;
