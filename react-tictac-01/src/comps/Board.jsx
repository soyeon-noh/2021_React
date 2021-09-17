import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);

  //   if (calcWinner(squares)) {
  //     // 누군가 이겼다는 표식을 보이기
  //     console.log(calcWinner(squares));
  //
  //   }

  // squares 배열의 index 번재 요소의 값을 변경하려고한다.
  // 매개변수로 index 값을 넘겨받는다.
  const changeSquares = (index) => {
    // 승부가 났는지 확인하고 승부가 났으면 더이상 진행금지

    if (calcWinner(squares)) {
      return;
    }

    // squares[index] = "B"; // 절대 불가

    // if(문자열변수) : 문자열변수값이 null, undefined, ""이면 무조건 false
    // 아니면 true
    // squares[index]에 어떤 값 (문자열, O, X)이 담겨있으면 더이상 진행 금지
    if (squares[index]) return;

    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면
    // 배열의 값이 복제되지 않고
    // 배열이 저장된 저장소 위치가 복제된다.
    // 결국 _squares 와 squares 는 같은 배열이다.
    // (A집과 B집에 같은 사람이 사는 것)
    // 배열을 복제할때는 반드시 전개연산자로 수행한다.
    const _squares = [...squares]; // 복제
    _squares[index] = oxFlag ? "O" : "X";
    setSquares(_squares); // 복제된 배열을 원래 배열과 교체
    setOxFlag(!oxFlag);
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // (무언가를 전달하고자 할때 함수방식은 불편하다)
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법(권장)
  // return <div><RenderSquare/><div>;
  const player = oxFlag ? "O" : "X";
  const winner = calcWinner(squares);
  return (
    <div>
      <div>다음 플레이어 : {player}</div>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      <div>승리자 : {winner}</div>
    </div>
  );
}

export default Board;
