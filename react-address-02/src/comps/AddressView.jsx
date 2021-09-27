import React from "react";

function AddressView({ addressList }) {
  const list_body = addressList.map((addr) => {
    return (
      <tr>
        <td>{addr.u_name}</td>
        <td>{addr.u_addr}</td>
        <td>{addr.u_tel}</td>
        <td>{addr.u_age}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>주소</th>
          <th>전화번호</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>{list_body}</tbody>
    </table>
  );
}

export default AddressView;
