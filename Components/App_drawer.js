import React from "react";
import drawerstyle from "./styles/App_drawer.module.css";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdSubscriptions } from "react-icons/md";
import App_drawer_Item from "./App_drawer_Item";
const App_drawer = () => {
  return (
    <aside className={drawerstyle.app_drawer}>
      <div>
        <App_drawer_Item name={"Home"} Icon={FaHome} />
        <App_drawer_Item name={"Explore"} Icon={FaRegCompass} />
        <App_drawer_Item name={"Subscriptions"} Icon={MdSubscriptions} />
        <App_drawer_Item name={"Library"} Icon={MdOutlineVideoLibrary} />
      </div>
    </aside>
  );
};

export default App_drawer;
