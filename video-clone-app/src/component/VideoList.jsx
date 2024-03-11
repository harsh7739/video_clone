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

const VideoList = ({ videos, onVideoClick,handleNextPage }) => {
  return (
    <div >
      {videos.map((video) => (
        <VideoThumbnail key={video.id} handleNextPage={handleNextPage} video={video} onClick={onVideoClick} />
      ))}
    </div>
  );
};

export default VideoList;

