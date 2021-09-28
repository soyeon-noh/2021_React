import React from "react";
import moment from "moment";

function TodoInput(props) {
  const { todo, setTodo, todoList, setTodoList } = props;

  // 입력박스에 text를 입력하면 1개의 TODO 데이터 만들기
  const onChangeHandler = (e) => {
    setTodo({
      t_id: todoList.length, // list의 마지막 번호 = 길이값
      t_text: e.target.value,
      t_date: Date().toString(), // js에서 제공하는 date함수인데 사용하기 까다롭다
      //   t_date: moment().format("YYYY[-]MM[-]DD"),
    });
  };

  const todoInsert = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="todo_input_box">
      <input
        placeholder="할 일 입력하기"
        defaultValue={todo.t_text}
        onChange={onChangeHandler}
      />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
}

export default TodoInput;
