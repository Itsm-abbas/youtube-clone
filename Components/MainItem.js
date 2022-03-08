import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Player } from "video-react";
import mainStyle from "./styles/Main.module.css";
import Image from "next/image";
const MainItem = ({ poster, Videosrc, Imgsrc, channel, title }) => {
  return (
    <div>
      <Player playsInline poster={poster} src={Videosrc} />
      <div className={mainStyle.Content_container}>
        <div>
          <Image
            className={mainStyle.Content_Image}
            src={Imgsrc}
            alt="Picture of the author"
            width={35}
            height={35}
          />
        </div>
        <div className={mainStyle.title_container}>
          <h5>{title}</h5>
          <p>
            {channel}
            <FaCheckCircle style={{ marginLeft: ".3rem" }} />
          </p>
          <p>16K views * 6 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
