import React, { useRef, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import video from "../Navbar/logo/video.mp4";
import HomePageSecontion2 from "./HomePageSecontion2";
import whatwedo from "../Navbar/logo/whatwedo.png"
import lineleft from "../Navbar/logo/double tile.png"
import lineright from "../Navbar/logo/double tile.png"
import linedown from "../Navbar/logo/downline.png"
import HomePageSecontion3 from "./HomePageSecontion3";
import HomePagethirdSection from "./HomePagethirdSection";
// import { Bot } from "./bot/Bot";

const Home = () => {
  const [showmorebstate, setshowmorebstate] = useState(true)
  const [show_hide, setshow_hide] = useState("drawableInitialstate")
  const handleShowMoreState = () => {
    if (showmorebstate === false) {
      setshowmorebstate(true)
      setshow_hide("drawableInitialstate")

    } else if (showmorebstate === true) {
      setshowmorebstate(false)
      setshow_hide("drawable")
    }
    if (showmorebstate === false) {
      setshow_hide("drawableInitialstate")
    }
    if (showmorebstate === true) {
      setshow_hide("drawable")
    }
  }
  console.log(showmorebstate)
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
      <HomePageSecontion3 show={show_hide} />
      <div className="center_button">
      <img className="lineleftdown" src={linedown} alt="" />
        <button onClick={handleShowMoreState} className="button-7">Show more</button>
        <img className="linerightdown" src={linedown} alt="" />
      </div>
      <HomePagethirdSection />
    </div>
  );
};

export default Home;
