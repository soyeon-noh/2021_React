import React from "react";

/**
 * :: 객체지향의 탄생 ::
 * 	기존에 잘 만들어진 클래스를 가져다가
 *	부품을 조립하는 방식으로 프로그래밍을 하자는 것이 기본개념
 *
 * 	잘 만들어진 클래스가 있는데
 * 	기능을 좀 추가하고 싶다면 상속을 받고 일부를 변경하여 재사용 했다.
 *
 * :: 객체지향의 가장 큰 단점 ::
 * 	상속받은 부모 클래스를 잘 알아야 한다.
 * 	상속받은 부모클래스가 변경되면 내 클래스도 변경하거나 버려야 한다.
 *
 * 	즉 부모와 자식 클래스간의 결합도가 매우 높아지고,
 * 	응집도는 매우 낮아진다.
 *
 * 	좋은 모듈은 서로 결합도가 낮고, 응집도는 높아야한다.
 *
 * 	:: 확장 ::
 * 	이러한 상속의 단점을 보완하는 디자인패턴 개념
 *	파사드 패턴 이라고도 한다.
 *
 * 클래스야 내가 객체를 하나 만들었는데
 * 그 객체를 사용하여 니가 일을 대신하고
 * 정확한 처리 결과만 나한테 달라.
 *
 */

function MyButton({ onClick, children }) {
  const myStyle = {
    backgroundColor: "#282c34",
    color: "#61dafb",
    margin: "10px",
    padding: "0.8em",
    outline: "none",
    border: "none",
    width: "160px",
    borderRadius: "2px",
  };
  return (
    <button sytle={myStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
