import React from "react";
import ExtendedStyle from "./styles/Extend_App_drawer.module.css";

const Extend_App_drawerItem = ({ name, Icon }) => {
  return (
    <a>
      <Icon className={ExtendedStyle.app_drawer_icons} />
      <span>{name}</span>
    </a>
  );
};

export default Extend_App_drawerItem;
