import React from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import StaticButton from "./StaticButton";

const Write = () => {
  const { switchModal, onChange, createBoard } = useBoardContext();

  return (
    <div className="modal_write">
      <div>
        <label>제목</label>
        <input name="b_title" onChange={onChange} />
      </div>
      <div>
        <label>이름</label>
        <input name="b_name" onChange={onChange} />
      </div>
      <div>
        <label>작성일자</label>
        <input type="date" name="b_date" onChange={onChange} />
      </div>
      <div>
        <label>내용</label>
        <textarea name="b_content" onChange={onChange} />
      </div>
      <div>
        <StaticButton className="btn_save" onClick={createBoard}>
          작성
        </StaticButton>
        <StaticButton className="btn_close" onClick={switchModal}>
          닫기
        </StaticButton>
      </div>
    </div>
  );
};

export default Write;
