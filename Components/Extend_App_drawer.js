import React from "react";
import ExtendedStyle from "./styles/Extend_App_drawer.module.css";
import Extend_App_drawerItem from "./Extend_App_drawerItem";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdSubscriptions } from "react-icons/md";
const Extend_App_drawer = () => {
  return (
    <aside className={ExtendedStyle.app_drawer}>
      <div>
        <Extend_App_drawerItem name={"Home"} Icon={FaHome} />
        <Extend_App_drawerItem name={"Explore"} Icon={FaRegCompass} />
        <Extend_App_drawerItem name={"Subscriptions"} Icon={MdSubscriptions} />
        <Extend_App_drawerItem name={"Library"} Icon={MdOutlineVideoLibrary} />
      </div>
    </aside>
  );
};

export default Extend_App_drawer;
