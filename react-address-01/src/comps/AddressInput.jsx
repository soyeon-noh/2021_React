import React from "react";

function AddressInput({ changeAddress }) {
  const onChangeHandler = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    changeAddress(targetName, targetValue);
  };

  return (
    <div className="input">
      <h2>Input</h2>
      <div>
        <label>이름</label>
        <input name="a_name" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>주소</label>
        <input name="a_addr" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>전화번호</label>
        <input name="a_phone" type="text" onChange={onChangeHandler} />
      </div>
      <div>
        <label>나이</label>
        <input name="a_age" type="number" onChange={onChangeHandler} />
      </div>
    </div>
  );
}

export default AddressInput;
