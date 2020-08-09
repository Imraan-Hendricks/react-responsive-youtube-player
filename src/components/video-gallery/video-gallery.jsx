import React from 'react';
import YoutubePlayer from '../youtube-player/youtube-player';

const VideoGallery = (props) => {
  return (
    <div>
      {props.videos.map((video) => (
        <div key={video.titleKey}>
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
  );
};

export default VideoGallery;
