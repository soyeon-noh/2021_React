import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import AddressItem from "./AddressItem";

function AddressList() {
  const { addrBook } = useAppContext();
  const list_view = addrBook.map((item, index) => {
    return <AddressItem addr={item} key={item.a_id} index={index} />;
  });
  return (
    <div className="address_list">
      <table className="address_table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>tel</th>
            <th>Address</th>
            <th>Memo</th>
          </tr>
        </thead>
        <tbody>{list_view}</tbody>
      </table>
    </div>
  );
}

export default AddressList;
