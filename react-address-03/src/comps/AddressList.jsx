import React from "react";

function AddressList({ addrBook }) {
  const viewList = addrBook.map((addr, index) => {
    // index를 화면에 보여주는 건 괜찮지만
    // key 값으로 쓰면 안된다.
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
        <td>{addr.a_memo}</td>
      </tr>
    );
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
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AddressList;
