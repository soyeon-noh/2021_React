import React from "react";

function AddressView({ address }) {
  const { a_name, a_addr, a_phone, a_age } = address;
  return (
    <div className="view">
      <h2>View</h2>
      <div>
        <label>이름: </label>
        <p>{a_name}</p>
      </div>
      <div>
        <label>주소: </label>
        <p>{a_addr}</p>
      </div>
      <div>
        <label>전화번호: </label>
        <p>{a_phone}</p>
      </div>
      <div>
        <label>나이: </label>
        <p>{a_age}</p>
      </div>
    </div>
  );
}

export default AddressView;
