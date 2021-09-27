import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    a_name: "",
    a_addr: "",
    a_phone: "",
    a_age: "",
  });

  const changeAddress = (name, value) => {
    console.log(address);
    setAddress({ ...address, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput changeAddress={changeAddress} />
        <AddressView address={address} />
      </header>
    </div>
  );
}

export default App;
