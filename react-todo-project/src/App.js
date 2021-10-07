import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import TodoInput from "./comps/TodoInput";
import LoginForm from "./comps/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
        <BrowserRouter>
          <Route path="/todo" exact>
            <TodoMain header="TODO LIST" form={<TodoInput />}>
              <TodoList />
            </TodoMain>
          </Route>
          <Route path="/" exact>
            <TodoMain header="LOGIN" form={<LoginForm />}></TodoMain>
          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
