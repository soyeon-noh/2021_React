import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import TodoInput from "./comps/TodoInput";
import MyButton from "./comps/MyButton";
import CompButton from "./comps/CompButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
        <TodoMain header="TODO LIST" form={<TodoInput />}>
          <TodoList />
        </TodoMain>
        <MyButton text={"바로가기"} />
        <CompButton onClick={() => alert("집에가자")}>우리로</CompButton>
        <CompButton>서울로</CompButton>
      </header>
    </div>
  );
}

export default App;
