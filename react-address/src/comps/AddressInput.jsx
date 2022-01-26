import { useAppContext } from "../context/AppContextProvider";

function AddressInput() {
  const { address, addrOnChangeHandler, addrBookInsert } = useAppContext();

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
