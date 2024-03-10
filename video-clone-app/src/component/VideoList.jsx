import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import VideoPlayer from './VideoPlayer';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="video-list">
      {
        videos.map((video)=>(
             <VideoThumbnail key={video.id} video={video} onClick={onVideoClick} /> 
        
        ))
      }
    </div>
  );
};

export default VideoList;