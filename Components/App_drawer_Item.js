import React from "react";
import drawerstyle from "./styles/App_drawer.module.css";

const App_drawer_Item = ({ name, Icon }) => {
  return (
    <a>
      <Icon className={drawerstyle.app_drawer_icons} />
      <span>{name}</span>
    </a>
  );
};

export default App_drawer_Item;
