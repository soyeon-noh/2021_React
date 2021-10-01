import React from "react";
import { useAddrContext } from "../context/AppContextProvider";
import AddressItem from "./AddressItem";

function AddressList() {
  const { addrBook } = useAddrContext();
  const list_view = addrBook.map((item, index) => {
    return <AddressItem addr={item} key={item.a_id} index={index} />;
  });
  return (
    <table className="address_table">
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>메모</th>
        </tr>
      </thead>
      <tbody>{list_view}</tbody>
    </table>
  );
}

export default AddressList;
