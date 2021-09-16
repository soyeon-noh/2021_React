import React from "react";

// const arrFuncCol = Array(3).fill(0);
// const arrFuncRow = Array(3).fill(arrFuncCol);
const arrBox = Array(3).fill(Array(3).fill(0));
let i = 0;

const createArrBox = arrBox.map((sub) => {
  const createBtn = sub.map((b) => {
    // console.table("sub:", sub);
    // console.log("b:", b);
    // console.log("i:", i++);
    // console.log("네모한칸");
    return <button />;
  });
  //   console.table("arrBox:", arrBox);
  //   console.log("네모3개 한줄");
  return <div>{createBtn}</div>;
});

function Board() {
  return <div className="main-square">{createArrBox}</div>;
}

export default Board;
