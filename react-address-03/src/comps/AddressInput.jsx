import { useAddrContext } from "../context/AppContextProvider";

function AddressInput() {
  // 매개변수로 props를 받으면 아래와 같이 먼저 stateGroup을 꺼내와야 한다.
  //   const { stateGroup } = props;

  const { address, onChangeHandler, addrBookInsert } = useAddrContext();

  // value를 state값으로 설정하면 자동으로 readOnly가 된다.
  // state를 변경시킬 수 있는 이벤트를 설정해놓으면
  // 변경된 값이 실시간으로 value에 반영되어 변경된 문자열이 보인다.
  return (
    <div className="address_input">
      <label>이름</label>
      <input
        // value={address.a_name}
        // readOnly
        name="a_name"
        placeholder="이름을 입력하세요"
        onChange={onChangeHandler}
      />
      <label>나이</label>
      <input
        type="number"
        value={address.a_age}
        name="a_age"
        placeholder="나이를 입력하세요"
        onChange={onChangeHandler}
      />
      <label>전화번호</label>
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="전화번호를 입력하세요"
        onChange={onChangeHandler}
      />
      <label>주소</label>
      <input
        value={address.a_addr}
        name="a_addr"
        placeholder="주소를 입력하세요"
        onChange={onChangeHandler}
      />
      <label>메모</label>
      <input
        value={address.a_memo}
        name="a_memo"
        placeholder="메모할 것이 있나요?"
        onChange={onChangeHandler}
      />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
