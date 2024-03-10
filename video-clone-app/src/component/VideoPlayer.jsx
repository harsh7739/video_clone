import React from 'react';

const VideoPlayer = ({ video }) => {
    console.log("inside video player")
  return (
    <div className="video-player">
            <h2>{video.submission.title}</h2>
            <video controls>
        <source src={video.submission.mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.submission.description}</p>
    </div>
  );
};

export default VideoPlayer;