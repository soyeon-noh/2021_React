import logo from "./logo.png";
import "./App.css";
import "./css/address.css";
import { useState } from "react";
import UUID from "react-uuid";
import MainNav from "./comps/MainNav";
import { BrowserRouter, Route } from "react-router-dom";
import MainBody from "./comps/MainBody";
import Address from "./comps/Address";

function App() {
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_addr: "서울시",
    a_age: 30,
  });
  const [addrBook, setAddrBook] = useState([]);

  // 묶어서 보내기
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redbeen Noodles</h2>
        </header>
        <MainNav />
        <Route path="/" render={() => <MainBody exact />} />
        <Route
          path="/address"
          render={() => <Address stateGroup={stateGroup} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
