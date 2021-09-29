import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App gradient-border">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <MainNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
