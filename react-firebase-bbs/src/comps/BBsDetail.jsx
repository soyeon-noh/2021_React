import React from "react";
import "../css/detail.css";

const BBsDetail = () => {
  return (
    <div className="detail">
      <div>
        <label>작성일자</label>
        <div>202-09-09</div>
      </div>
      <div>
        <label>작성시각</label>
        <div>11:12:00</div>
      </div>
      <div>
        <label>글쓴이</label>
        <div>노소연</div>
      </div>
      <div>
        <label>제목</label>
        <div>리액트 BBS</div>
      </div>
      <div>
        <label>내용</label>
        <div>리액트 Firebase BBS</div>
      </div>
    </div>
  );
};

export default BBsDetail;
