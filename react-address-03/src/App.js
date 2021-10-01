import logo from "./logo.png";
import "./App.css";
import "./css/address.css";
import MainNav from "./comps/MainNav";
import { BrowserRouter, Route } from "react-router-dom";
import MainBody from "./comps/MainBody";
import Address from "./comps/Address";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redbeen Noodles</h2>
        </header>
        <MainNav />
        <Route path="/" exact component={MainBody} />
        <Route path="/address">
          <Address form={<AddressInput />}>
            <AddressList />
          </Address>
        </Route>

        {/* <Route
          path="/address"
          render={() => <Address stateGroup={stateGroup} />}
        /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
