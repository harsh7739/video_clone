// import React from 'react';
// import VideoThumbnail from './VideoThumbnail';
// import VideoPlayer from './VideoPlayer';

// const VideoList = ({ videos, onVideoClick }) => {
//   return (
//     <div className="video-list">
//       {
//         videos.map((video)=>(
//              <VideoThumbnail key={video.id} video={video} onClick={onVideoClick} /> 
        
//         ))
//       }
//     </div>
//   );
// };

// export default VideoList;


import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoThumbnail key={video.id} video={video} onClick={onVideoClick} />
      ))}
    </div>
  );
};

export default VideoList;

