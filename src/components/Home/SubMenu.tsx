import React, { useRef, useEffect } from 'react';

import './assets/css/stylesSubMenu.css';

import subMenuVideo from './assets/video/subMenuVideo.mp4';

export function SubMenuVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay foi bloqueado:', error);
      });
    }
  }, []);

  return (
    <div className="containerSubMenuVideo">
      <video ref={videoRef} playsInline muted loop className="customVideo">
        <source src={subMenuVideo} type="video/mp4" />
      </video>
    </div>
  );
}