import React, { useState } from 'react';
import MyQRCode from './Code';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = document.getElementById('audio-player');
    audio.play();
    setIsPlaying(true);
  };

  return (
    <>
   {!isPlaying && <div className='backdrop'>
<button onClick={handlePlay}>وارد شوید :)</button>
</div>}

<MyQRCode />

      <audio id="audio-player" controls>
        <source src="Hengame-Ghasam Mikhoram.mp3" type="audio/mp3" />
        مرورگر شما از فرمت صوتی پشتیبانی نمی‌کند.
      </audio>
    </>
  );
};

export default AudioPlayer;
