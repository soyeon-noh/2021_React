import { createContext, useContext, useState } from "react";
import UUID from "react-uuid";

const AppContext = createContext();

export const useAddrContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...addrBook, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  // 묶어서 보내기
  const propsStore = {
    address,
    setAddress,
    addrBook,
    setAddrBook,

    onChangeHandler,
    addrBookInsert,
  };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
