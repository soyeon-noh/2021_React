import "./App.css";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/menu.css";
import "./css/board.css";
import BBsMain from "./comps/BBsMain";

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
