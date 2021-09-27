import React from "react";

function AddressInput({ address, setAddress, addressList, setAddressList }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    console.log(address);
  };

  const saveAddress = () => {
    // const _address = { ...address };
    // console.log("ㄴ:", _address);
    setAddressList([...addressList, address]);
    console.log("여기", address);
    console.table(addressList);
  };

  return (
    <div className="input_form">
      <div>
        <label>이름 </label>
        <input name="u_name" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>주소 </label>
        <input name="u_addr" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>전화번호 </label>
        <input name="u_tel" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>나이 </label>
        <input name="u_age" type="text" onChange={onChangeHandler} />
      </div>
      <button onClick={saveAddress}>추가</button>
    </div>
  );
}

export default AddressInput;
