import { useAppContext } from "../context/AppContextProvider";

function AddressInput() {
  // 매개변수로 props를 받으면 아래와 같이 먼저 stateGroup을 꺼내와야 한다.
  //   const { stateGroup } = props;

  const { address, addrOnChangeHandler, addrBookInsert } = useAppContext();

  // value를 state값으로 설정하면 자동으로 readOnly가 된다.
  // state를 변경시킬 수 있는 이벤트를 설정해놓으면
  // 변경된 값이 실시간으로 value에 반영되어 변경된 문자열이 보인다.
  return (
    <div className="address_input">
      <label>Name</label>
      <input
        value={address.a_name}
        name="a_name"
        placeholder="필수입력"
        onChange={addrOnChangeHandler}
      />
      <label>Age</label>
      <input
        type="number"
        value={address.a_age}
        name="a_age"
        placeholder="필수입력"
        onChange={addrOnChangeHandler}
      />
      <label>Tel</label>
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="필수입력"
        onChange={addrOnChangeHandler}
      />
      <label>Address</label>
      <input
        value={address.a_addr}
        name="a_addr"
        // placeholder="주소를 입력하세요"
        onChange={addrOnChangeHandler}
      />
      <label>memo</label>
      <input
        value={address.a_memo}
        name="a_memo"
        // placeholder="메모할 것이 있나요?"
        onChange={addrOnChangeHandler}
      />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
