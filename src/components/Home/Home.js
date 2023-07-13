import React, { useRef } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import video from "../Navbar/logo/video.mp4";
import HomePageSecontion2 from "./HomePageSecontion2";
import whatwedo from "../Navbar/logo/whatwedo.png"
import lineleft from "../Navbar/logo/double tile.png"
import lineright from "../Navbar/logo/double tile.png"
// import { Bot } from "./bot/Bot";

const Home = () => {
  const scollToRef = useRef();
  return (
    <div className="parent_container">

      <div onScroll={() => scollToRef.current.scrollIntoView()} className="Home_vh">
        <Navbar />
        <div className="bodyfull">
          <video
            style={{ height: "100%", width: "100%", objectFit: "cover", marginTop: "1px" }}
            autoPlay
            muted
            loop
            id="myVideo"
          >

            <source src={video} type="video/webm" />
          </video>

        </div>
      </div>
      <div className="dividingText">

        <img className="lineleft" src={lineleft} alt="" />
        <img className="whatwedo" src={whatwedo} alt="" />
        <img className="lineright" src={lineright} alt="" />
      </div>
      <HomePageSecontion2 />

    </div>
  );
};

export default Home;
