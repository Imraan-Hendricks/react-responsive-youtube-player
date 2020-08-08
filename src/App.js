import React from 'react';
import YoutubePlayer from './components/youtube-player/youtube-player';

const App = () => {
  return (
    <div>
      <YoutubePlayer
        titleKey={'uniqueKey'}
        autoplay={false}
        controls={true}
        fullscreen={true}
        loop={false}
        start={undefined}
        end={undefined}
        width={'50%'}
        youtubeId={'sBws8MSXN7A'}
      />
    </div>
  );
};

export default App;
