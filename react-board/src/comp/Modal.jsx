import React, { useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";

import Write from "./Write";

const Modal = () => {
  const { isModal } = useBoardContext();
  return (
    <>
      {isModal ? (
        <div className="black_modal">
          <div className="white_modal">
            <Write />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
