import logo from "./logo.svg";
import "./App.css";
import MainComp from "./comps/MainComp";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <MainComp />
      </UserContextProvider>
    </div>
  );
}

export default App;
