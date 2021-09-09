import "./App.css";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import Board from "./comps/Board";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/menu.css";
import "./css/board.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={Board} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
