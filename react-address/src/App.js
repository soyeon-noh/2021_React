import logo from "./logo.png";
import "./App.css";
import "./css/address.css";
import "./css/guest.css";
import MainNav from "./comps/MainNav";
import { BrowserRouter, Route } from "react-router-dom";
import MainBody from "./comps/MainBody";
import FormLayout from "./comps/FormLayout";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import GuestBookInput from "./comps/GuestBookInput";
import GuestBookList from "./comps/GuestBookList";

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
          <FormLayout form={<AddressInput />}>
            <AddressList />
          </FormLayout>
        </Route>
        <Route path="/guestBook">
          <FormLayout form={<GuestBookInput />}>
            <GuestBookList />
          </FormLayout>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
