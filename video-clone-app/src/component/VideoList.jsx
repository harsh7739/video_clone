import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import VideoPlayer from './VideoPlayer';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoThumbnail key={video.id} video={video} onClick={onVideoClick} />
        // <VideoPlayer key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;