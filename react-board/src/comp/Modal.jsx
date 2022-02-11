import React, { useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import Detail from "./Detail";
import Write from "./Write";

const Modal = () => {
  const { isModal, board } = useBoardContext();

  let innerModal;
  if (isModal === "write") {
    innerModal = <Write />;
  } else if (isModal === "detail") {
    innerModal = <Detail />;
  }

  return (
    <>
      {isModal ? (
        <div className="black_modal">
          <div className="white_modal">{innerModal}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
