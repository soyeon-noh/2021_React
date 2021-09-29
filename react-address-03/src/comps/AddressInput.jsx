import UUID from "react-uuid";

function AddressInput({ stateGroup }) {
  // 매개변수로 props를 받으면 아래와 같이 먼저 stateGroup을 꺼내와야 한다.
  //   const { stateGroup } = props;
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...addrBook, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  // value를 state값으로 설정하면 자동으로 readOnly가 된다.
  // state를 변경시킬 수 있는 이벤트를 설정해놓으면
  // 변경된 값이 실시간으로 value에 반영되어 변경된 문자열이 보인다.
  return (
    <div className="address_input">
      <input
        // value={address.a_name}
        // readOnly
        name="a_name"
        placeholder="이름"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_addr}
        readOnly
        name="a_addr"
        placeholder="주소"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_tel}
        readOnly
        name="a_tel"
        placeholder="전화번호"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_age}
        readOnly
        name="a_age"
        placeholder="나이"
        onChange={onChangeHandler}
      />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
