import "./App.css";
import "./css/menu.css";
import "./css/board.css";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={BBsMain} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
