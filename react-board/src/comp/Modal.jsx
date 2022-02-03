import React, { useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import Detail from "./Detail";
import Write from "./Write";

const Modal = ({ children }) => {
  const { isModal } = useBoardContext();
  return (
    <>
      {isModal ? (
        <div className="black_modal">
          <div className="white_modal">
            <Write />
            <Detail />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
