import React, { useState } from "react";
import MyQRCode from "./Code";
import SwiperCmp from "./Swiper";
import LoveTime from "./LoverTime";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = document.getElementById("audio-player");
    audio.play();
    setIsPlaying(true);
  };

  return (
    <>
      {/* <MyQRCode /> */}

<div className="mobile-size">
  <img src="original-back.png" className="original-back" />
  <div className="front-mobile">
      <audio id="audio-player" controls>
        <source src="Hengame-Ghasam Mikhoram.mp3" type="audio/mp3" />
        مرورگر شما از فرمت صوتی پشتیبانی نمی‌کند.
      </audio>
      {isPlaying &&
      <> <SwiperCmp />
      {/* <div className="" */}
      <LoveTime />
      </>}
      </div>
      {!isPlaying && (
        <div className="backdrop">
          <img src="valentine-back.png" className="valen-img-bacldrop" />
          <button onClick={handlePlay} className="heart-button button-valentine">Click me</button>
        </div>
      )}
      </div>
    </>
  );
};

export default AudioPlayer;
