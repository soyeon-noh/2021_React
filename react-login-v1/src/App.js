import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";
import MainNav from "./comps/MainNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  const nav = [
    { text: "Home", link: "/" },
    { text: "공지사항", link: "/notice" },
    { text: "자유게시판", link: "/board" },
    { text: "로그인", link: "login" },
    { text: "회원가입", link: "join" },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav nav={nav} />
        <LoginForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
