import React from "react";
import { useAddrContext } from "../context/AppContextProvider";
import "../css/MainBody.css";

const MainBody = () => {
  return (
    <div className="main_body">
      <div>
        <div className="img1" />
        <div className="img3" />
        <div className="img2" />
      </div>
      <div>
        <h2>Welcome ! </h2>
        <h3>Redbeen Noodles Blog</h3>
      </div>
      <div>
        <div className="img2" />
        <div className="img1" />
        <div className="img3" />
      </div>
    </div>
  );
};

export default MainBody;
