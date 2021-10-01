import { createContext, useContext, useState } from "react";

const AddrContext = createContext();

export const useAddrContext = () => {
  return useContext(AddrContext);
};

function AppContextProvider() {
  return <div></div>;
}

export default AppContextProvider;
