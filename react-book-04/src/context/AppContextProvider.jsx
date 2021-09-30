import React, { createContext, useContext, useState } from "react";
import UUID from "react-uuid";

const AppContext = createContext();

/**
 * Hook 함수
 * react에서 state rendering 등을 관리하기 위한 함수들
 * use로 시작되는 함수들
 * useState(), useEffect(), useCallback(), usecontext()
 *
 * react가 초기에는 class 방식으로 코딩을 했다.
 * class 방식은 기존의 JS 코드와 문법적으로 다른 부분이 많아서
 * 함수 방식을 도입한다 (16.x.x 버전에서)
 *
 * class 방식에서는 기본적으로 제공하는 약 10여가지 method가 있다.
 * 이 method를 react에서는 lifeSycle method라고 불렀다.
 *
 * 프로젝트가 시작될 때, rendering이 시작될 때, rendering이 완료되었을 때
 * 현재화면이 닫힐 때 등등 의 상황에서 event 를 일으키고
 *
 * 개발자가 그 상황을 변형해서 react의 기능을 바꾸는 역할을 수행했다.
 *
 * 이러한 class 방식의 lifeCycle method를
 * 함수방식의 react에서 구현하는 친구들이
 * Hook 함수들이다.
 *
 * 그런데 이 Hook은 기본적인 것만 제공하기 때문에
 * 커스터마이징할 여지를 남겨두었다.
 */

// user Hook
// react에서 기본적으로 제공하는 hook()을 Custumizing 하기
// useContext()는 초기에 생성한 Context를 항상 import 하여
// 매개변수로 전달해야 하는 불편함이 있다.
// Appcontext를 바라볼 수 있는 (직접접근할 수 있는) 곳에서
// useContext(Context)를 실행하여
// 매개변수를 지정하지 않아도 사용할 수 있도록 변경한 Hook
//
// 커스터 마이징 Hook 조건
// 	- Hook은 무조건 use 로 시작해야 한다.
// 	- Camel Case로 명명해야 한다. ( _ 언더바 x)
export const useBookContext = () => {
  return useContext(AppContext); // context를 그냥 꺼내버리는거?
};

/**
 * 합성패턴을 사용하여 Context를 upgrade하기
 * 1. State 를 생성하고 관리(setState)할 컴포넌트의 주요코드를 이곳으로 이동하였다.
 * 2. createContext()를 사용하여 Context를 하나 생성
 * 3. <Context.Provider> 로 시작되는 컴포넌트 코드로 변경
 * 4. 컴포넌트 함수의 매개변수 {children}을 추가한다.
 * 5. 컴포넌트 body에 {children} 을 포함한다.
 */
function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });

  const [bookList, setBookList] = useState([]);

  const providerDate = { book, setBook, bookList, setBookList };

  return (
    <>
      <AppContext.Provider value={providerDate}>{children}</AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
