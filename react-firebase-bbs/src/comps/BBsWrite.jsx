import React from "react";
import "../css/write.css";

const BBsWrite = () => {
  return (
    <form method="POST" className="write">
      <div>
        <input placeholder="작성자" />
      </div>
      <div>
        <input placeholder="제목" />
      </div>
      <div>
        <input placeholder="내용" />
      </div>
      <div className="button">
        <button>저장</button>
      </div>
    </form>
  );
};

export default BBsWrite;
