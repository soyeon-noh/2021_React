import React from "react";
/**
 * forEach() 코드
 * 배열을 활용하는 JS 필수 코드들
 * 배열.map(), 배열.filter(), 배열.forEach()
 * 		배열.map() {	return 값	} : 배열 개수를 그대로 유지하면서 새로운 배열을 만들기
 * 		배열.filter() {	return boolean	} : 어떤 조건에 맞는 리스트만 추출할 때
 * 		배열.forEach() {	새로운 배열.push()	} : 배열을 단순히 순서대로 연산 처리할 때
 */

/**
 * react에서 forEach()류의 함수를 사용하여
 * 컴포넌트 list를 만들때
 * 반드시 바깥쪽 tag 에는 UNIQUE한 값으로 key를 설정해주어야 한다.
 *
 * map()을 사용할 때 두번째 매개변수로 index 키값을 알 수 있는데
 * 이 값은 절대 key로 설정하지 않는다.
 * 오히려 성능을 떨어트리는 결과를 내기도 한다.
 * ex) const viewList = todoList.map((todo,index)=> {
 *
 * 지금사용한
 */
function TodoList({ todoList }) {
  const viewList = todoList.map((todo) => {
    return (
      <tr key={todo.t_id}>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });
  // 컴포넌트를 map으로 만들어서 리스트를 보여줄때는 key값을 넣어줘야한다.
  //

  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList;
