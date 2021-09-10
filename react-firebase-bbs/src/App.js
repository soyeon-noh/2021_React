import "./App.css";
import "./css/menu.css";
import "./css/board.css";
import { Header, MainNav, BBsMain, BBsWrite, BBsDetail } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} />
        <Route path="/detail/:id" component={BBsDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
