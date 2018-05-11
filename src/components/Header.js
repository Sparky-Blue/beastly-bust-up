import React from "react";
import Menu from "./Menu";
import "./Header.css";

const Header = props => {
  return (
    <header>
      <h1 id="mainTitle">Beastly Bust-Up </h1>
      <Menu />
    </header>
  );
};

export default Header;
