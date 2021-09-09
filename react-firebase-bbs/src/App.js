import "./App.css";
import "./css/menu.css";
import "./css/board.css";
import Header from "./comps/Header";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import BBsWrite from "./comps/BBsWrite";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} />
      </div>
    </BrowserRouter>
  );
}

export default App;
