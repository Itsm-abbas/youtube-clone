import React, { useContext } from "react";
import mainStyle from "./styles/Main.module.css";
import contextapi from "../context/contextapi";
import MainItem from "./MainItem";
import Data from "../data/mainData.json";
const Main = () => {
  const TogglerState = useContext(contextapi);
  const { toggler } = TogglerState;
  return (
    <main
      className={`${mainStyle.Main} ${
        toggler ? "Main_Main_DecWid__LMDPq" : ""
      }`}
    >
      {Object.keys(Data).map((key) => {
        return Data[key].map((element) => {
          return (
            <MainItem
              key={Math.random(1, 1000)}
              poster={element.Poster}
              Videosrc={element.Videosrc}
              Imgsrc={element.Imgsrc}
              title={element.Title}
              channel={element.Channel}
            />
          );
        });
      })}
    </main>
  );
};

export default Main;
