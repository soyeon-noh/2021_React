import React from "react";
import AddressInput from "./AddressInput";
import AddressList from "./AddressList";

function Address({ stateGroup }) {
  const { addrBook } = stateGroup;
  return (
    <div>
      <AddressInput stateGroup={stateGroup} />
      <AddressList addrBook={addrBook} />
    </div>
  );
}

export default Address;
