import React from 'react';
import cssModule from './video-gallery.module.scss';
import YoutubePlayer from '../youtube-player/youtube-player';

const VideoGallery = (props) => {
  return (
    <div className={cssModule.root}>
      <h1>Youtube Video Gallery</h1>
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
