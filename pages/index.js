import React, { useContext } from "react";
import Head from "next/head";
import style from "../styles/index.module.css";
import App_drawer from "../Components/App_drawer";
import Extend_App_drawer from "../Components/Extend_App_drawer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import contextapi from "../context/contextapi";
export default function Home() {
  const TogglerState = useContext(contextapi);
  const { toggler } = TogglerState;
  return (
    <div>
      <Head>
        <title>Dreamer Youtube</title>
        <meta name="description" content="This is Youtube clone" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg"
        />
      </Head>

      <Navbar />
      <div className={style.main_container}>
        <div
          className={`${style.sidebar_container} ${
            toggler ? "index_extend_side_container__qTic1" : ""
          }`}
        >
          {toggler ? <Extend_App_drawer /> : <App_drawer />}
        </div>
        <div
          className={`${style.main_contents} ${
            toggler ? "index_extend_main_contents__e1CtD" : ""
          }`}
        >
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
