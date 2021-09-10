import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../config/BBSConfig";

function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;
  // 잘 이해가 안되는 부분
  // 이것도 state로 선언하라고했는데 이젠 조금 완화되었다.
  // 화면보고있는 상황에서 변동이 적은 것은 일반으로 설정해도 큰 문제는없다.
  // 하지만 혹시몰라서 const로는 선언해둔 것이다.

  const [bbs, setBbs] = useState({
    // 아무것도 없는 id일때의 오류를 막기위해
    b_date: "",
    b_time: "",
    b_wirter: "",
    b_subject: "",
    b_content: "",
  });

  const findByIdFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBbs(result.data());
      }
    }
  }, [docId]);

  useEffect(findByIdFetch, [findByIdFetch]);

  const onDelete = (e) => {
    // alert와 다르게 confirm은 window에서 가져와야한다.
    if (window.confirm("삭제할까요?")) {
      firestore // 서버에서 삭제하고 redircte를 했는데
        // 여기는 firebase에서 삭제하고...? redirection을 한거래
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push("/");
        });
    }
  };

  return (
    <div className="bbs_detail">
      <h1>DETAIL</h1>
      <div>
        <label htmlFor="">작성일자</label>
        <span>{bbs.b_date}</span>
      </div>
      <div>
        <label htmlFor="">작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label htmlFor="">글쓴이</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label htmlFor="">제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label htmlFor="">내용</label>
        <span>{bbs.b_content}</span>
      </div>
      <div class="bbs_btn_box">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          처음으로
        </button>
        <button
          onClick={() => {
            router.push(`/write/${docId}`); //match.params 로 받아놨던 값
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BBsDetail;
