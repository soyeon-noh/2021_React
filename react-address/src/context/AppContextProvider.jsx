import { createContext, useContext, useState } from "react";
import UUID from "react-uuid";
import moment from "moment";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
  /** 주소록 */
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "",
    a_age: "",
    a_tel: "",
    a_addr: "",
    a_memo: "",
  });
  const [addrBook, setAddrBook] = useState([]);

  // const addrInsertId = useRef();

  const addrOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    if (address.a_name === "") {
      alert("이름을 입력하세요");
      return;
    } else if (address.a_age === "") {
      alert("나이를 입력하세요");
      return;
    } else if (address.a_tel === "") {
      alert("전화번호를 입력하세요");
      return;
    }

    setAddress({ ...address, a_id: UUID() }); // Q. 여기가 addrBook 이어도 잘 작동됨. 왜일까.
    setAddrBook([...addrBook, address]);

    clearAddress();
  };

  const clearAddress = () => {
    setAddress({
      a_id: "",
      a_name: "",
      a_age: "",
      a_tel: "",
      a_addr: "",
      a_memo: "",
    });
  };

  /** 방명록 */

  const [guest, setGuest] = useState({
    g_id: UUID(),
    g_name: "",
    g_memo: "",
    g_date: moment().format("yyyy.MM.dd"),
    g_time: moment().format("HH:mm:ss"),
  });
  const [guestBook, setGuestBook] = useState([]);

  const guestOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setGuest({ ...guest, [name]: value });
  };

  const guestBookInsert = () => {
    if (guest.g_name === "") {
      alert("이름을 입력하세요");
      return;
    } else if (guest.g_memo === "") {
      alert("방명록을 입력하세요");
      return;
    }

    setGuest({
      ...guest,
      g_date: moment().format("yyyy.MM.dd"),
      g_time: moment().format("HH:mm:ss"),
    });
    setGuestBook([...guestBook, guest]);

    // clearGuest();
  };

  // clear 함수 활성화시 시간이 안나오는 오류발생
  // const clearGuest = () => {
  //   setGuest({ g_id: "", g_name: "", g_memo: "", g_date: ""});
  // };

  // 묶어서 보내기
  const propsStore = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
    guest,
    setGuest,
    guestBook,
    setGuestBook,

    addrOnChangeHandler,
    guestOnChangeHandler,
    addrBookInsert,
    guestBookInsert,
  };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
