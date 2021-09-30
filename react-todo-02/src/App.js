import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import "./App.css";

const App = () => {
  // 컴포넌트 함수 기본 : return
  return (
    <div className="App gradient-border">
      <header className="App-header">TODO LIST</header>
      <TodoMain form={<TodoInput />} header="오늘할일">
        <TodoList />
      </TodoMain>
    </div>
  );
};
// 컴포넌트 함수 기본 : export로 함수를 내보낸다
export default App;
