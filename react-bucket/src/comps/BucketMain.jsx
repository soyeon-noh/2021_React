import React from "react";

function BucketMain() {
  return (
    <div>
      <input
        className="addBucket"
        placeholder="버킷에 추가할 내용을 입력하세요"
      />
      <table className="bucketList">
        <tr>
          <td>FLAG</td>
          <td>날짜</td>
          <td>BUCKET</td>
          <td>완료</td>
          <td>취소</td>
        </tr>
        <tr>
          <td>일반</td>
          <td>2021-09-13</td>
          <td>리액트 실습</td>
          <td>
            <input type="radio" name="finish" />
          </td>
          <td>
            <input type="checkbox" name="cancel" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BucketMain;
