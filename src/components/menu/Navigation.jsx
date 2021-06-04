import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";

import Mylinks from "./Mylinks";
import Pages from "./Pages";

import "react-awesome-button/dist/themes/theme-blue.css";
import "./Navigation.style.scss";

function Navigation({ isOpen, setOpen }) {
  return (
    <Menu
      isOpen={isOpen}
      customBurgerIcon={false}
      disableAutoFocus
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      onClose={() => setOpen(!isOpen)}
    >
      <Pages />
      <div>
        <Mylinks />
      </div>
    </Menu>
  );
}

export default Navigation;
