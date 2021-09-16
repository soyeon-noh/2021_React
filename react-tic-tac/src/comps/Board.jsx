import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("A"));

  const onButtonClick = (e) => {
    const box = e.currentTarget;

    // if(box.tagName === "BUTTON");
    // 만약 내부에 다른 태그가 있을경우
    // tagName이 일치하는 것에만 실행하게 코드를 짜야한다.
    // 지금은 없어도 된다.
    const boxId = box.dataset.index;
    const _squares = [...squares];

    _squares[boxId] = "B";

    setSquares(_squares);

    console.table(squares);
  };

  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // (무언가를 전달하고자 할때 함수방식은 불편하다)
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법(권장)
  // return <div><RenderSquare/><div>;
  return (
    <div>
      <div>다음 플레이어 : O</div>
      <RenderSquare squares={squares} onButtonClick={onButtonClick} />
    </div>
  );
}

export default Board;
