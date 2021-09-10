import "./App.css";
// as를 통해 약칭을 정할 수 있다.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, MainNav, BBsMain, Footer } from "./comps";
import BBsWrite from "./comps/BBsWrite";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Switch>
            <Route exact path="/write/:id" component={BBsWrite} />
            <Route exact path="/write" component={BBsWrite} />
          </Switch>
          {/* id붙은게 더 위로가야한다는데.. 
		나는 아직까지 문제 없었으나 일단 변경해보겠다. */}
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
