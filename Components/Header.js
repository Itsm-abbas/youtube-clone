import React, { useContext } from "react";
import headerstyle from "./styles/Header.module.css";
import Data from "../data/headerData.json"
const Header = () => {
  return (
    <header className={headerstyle.header}>
      <div>
        {Object.keys(Data).map((key) => {
          return Data[key].map((item) => {
            return (
              <a href={item.url} key={item.key}>
                {item.name}
              </a>
            );
          });
        })}
      </div>
    </header>
  );
};

export default Header;
