import React from 'react';
import VideoGallery from './components/video-gallery/video-gallery';

const App = () => {
  return (
    <div>
      <VideoGallery
        videos={[
          { titleKey: 'uniqueKey1', youtubeId: 'kXYiU_JCYtU' },
          { titleKey: 'uniqueKey2', youtubeId: '1kz6hNDlEEg' },
          { titleKey: 'uniqueKey3', youtubeId: 'vVy9Lgpg1m8' },
          { titleKey: 'uniqueKey4', youtubeId: 'desJKYvdq9A' },
          { titleKey: 'uniqueKey5', youtubeId: 'uhG-vLZrb-g' },
          { titleKey: 'uniqueKey6', youtubeId: 'emGri7i8Y2Y' },
        ]}
      />
    </div>
  );
};

export default App;
