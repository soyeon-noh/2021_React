/**
 *
 * @param {*} props
 *  	이 컴포넌트(view.js)를 import하여 연결한 부모 컴포넌트에서
 * 		어떤 변수이름에 변수, 객체 를 담아서 내려보내면
 * 		그 모든 요소를 한개의 매개변수로 받는다.
 * 		(properties(속성) 의 약자)
 * @returns
 */
const view = (props) => {
  return (
    <div>
      <h1>{props.b_name}</h1>
      <p>{props.bbs.b_date}</p>
      <p>{props.bbs.b_time}</p>
      <p>{props.bbs.b_writer}</p>
      <p>{props.bbs.b_subject}</p>
      <p>{props.bbs.b_content}</p>
    </div>
  );
};

export default view;
