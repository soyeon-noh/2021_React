import "./App.css";
// as를 통해 약칭을 정할 수 있다.
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/write" component={BBsWrite} />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
