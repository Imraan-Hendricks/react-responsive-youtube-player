import React from 'react';
import cssModule from './video-gallery.module.scss';
import YoutubePlayer from '../youtube-player/youtube-player';

const VideoGallery = (props) => {
  return (
    <div className={cssModule.root}>
      <div className={cssModule.header}>
        <h1>{props.title}</h1>
        <p>{props.subHeading}</p>
      </div>
      <div className={cssModule.gallery}>
        {props.videos.map((video) => (
          <div key={video.titleKey} className={cssModule.video}>
            <YoutubePlayer
              titleKey={video.titleKey}
              autoplay={false}
              controls={true}
              fullscreen={true}
              loop={false}
              start={undefined}
              end={undefined}
              width={'100%'}
              youtubeId={video.youtubeId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
