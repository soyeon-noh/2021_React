import React from "react";

function AddressItem({ addr, index }) {
  const { a_name, a_addr, a_tel, a_age, a_memo } = addr;
  // index를 화면에 보여주는 건 괜찮지만
  // key 값으로 쓰면 안된다.
  return (
    // <tr key={a_id}>
    <tr>
      <td>{index + 1}</td>
      <td>{a_name}</td>
      <td>{a_addr}</td>
      <td>{a_tel}</td>
      <td>{a_age}</td>
      <td>{a_memo}</td>
    </tr>
  );
}

export default AddressItem;
