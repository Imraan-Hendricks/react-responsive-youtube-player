import React from 'react';
import cssModule from './youtube-player.module.scss';

const YoutubePlayer = (props) => {
  const autoplay = () => {
    if (!props.autoplay) {
      return 0;
    }
    return 1;
  };

  const controls = () => {
    if (!props.controls) {
      return 0;
    }
    return 1;
  };

  const fullscreen = () => {
    if (!props.fullscreen) {
      return 0;
    }
    return 1;
  };

  const loop = () => {
    if (!props.loop) {
      return 0;
    }
    return 1;
  };

  const start = () => {
    if (!props.start) {
      return 1;
    }
    return props.start;
  };

  const end = () => {
    if (!props.end) {
      return -1;
    }
    return props.end;
  };

  return (
    <div style={{ width: props.width }}>
      <div className={cssModule.video}>
        <iframe
          title={props.titleKey}
          className={cssModule.iframe}
          src={`https://www.youtube.com/embed/${
            props.youtubeId
          }?autoplay=${autoplay()}&controls=${controls()}&loop=${loop()}&fs=${fullscreen()}&start=${start()}&end=${end()}`}
          frameBorder='0'
          allowFullScreen='allowFullScreen'
          allow='autoplay'
        />
      </div>
    </div>
  );
};

export default YoutubePlayer;
