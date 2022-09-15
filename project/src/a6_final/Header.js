import React from "react";
import MenuHeader from "./MenuHeader";
import logopath from "./shin.PNG";
const Header = ({ name }) => {
  return (
    <>
      <div className="p-2 bg-primary text-white text-center">
        <h1> {name} </h1>
        <img
          src={`${process.env.PUBLIC_URL}/img/shin.png`}
          alt="이미지1"
          style={{ float: "left" }}
        />
        <img src={"/img/shin.png"} alt="이미지2" style={{ float: "left" }} />
        <img src={logopath} alt="이미지3" style={{ float: "left" }} />
        <p>신세계입니다.!</p>
      </div>
      <MenuHeader />
    </>
  );
};

export default Header;
