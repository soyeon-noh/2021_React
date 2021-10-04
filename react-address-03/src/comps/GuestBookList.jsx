import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const GuestBookList = () => {
  const { guestBook } = useAppContext();

  const list_view = guestBook.map((item) => {
    const { g_id, g_name, g_memo, g_date, g_time } = item;
    return (
      <div className="guest" key={g_id}>
        <div className="guest_info">
          <div className="name">{g_name}</div>
          <div className="date">{g_date}</div>
          <div className="date">{g_time}</div>
        </div>
        <div className="guest_memo">{g_memo}</div>
      </div>
    );
  });
  return <div className="guest_list">{list_view}</div>;
};

export default GuestBookList;
