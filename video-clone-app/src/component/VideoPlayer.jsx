import React from 'react';

const VideoPlayer = ({ video }) => {
    console.log("inside video player")
  return (
    <div className="video-player">
            <video controls autoPlay>
        <source src={video.submission.mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <h2>{video.submission.title}</h2>
      <p>{video.submission.description}</p>
    </div>
  );
};

export default VideoPlayer;