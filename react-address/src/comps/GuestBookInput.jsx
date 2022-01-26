import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const GuestBookInput = () => {
  const { guest, guestOnChangeHandler, guestBookInsert } = useAppContext();

  return (
    <div className="guest_input">
      <label>Name</label>
      <input
        value={guest.g_name}
        name="g_name"
        placeholder="필수입력"
        onChange={guestOnChangeHandler}
      />
      <label>Text</label>
      <textarea
        value={guest.g_memo}
        name="g_memo"
        placeholder="필수입력"
        onChange={guestOnChangeHandler}
      />
      <button className="gestBookInsert" onClick={guestBookInsert}>
        추가
      </button>
    </div>
  );
};

export default GuestBookInput;
