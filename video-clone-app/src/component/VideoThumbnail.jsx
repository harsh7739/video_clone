import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const VideoThumbnail = ({ video, onClick }) => {
    const [flag,setFlag]=useState(false)
    const [selectedVideo,setSelectedVideo]=useState(null)
  return (
    <div className="video-thumbnail" onClick={() => onClick(video)}>

            <div style={{width:"40%",border:"1px solid red",margin:"auto"}}>
      <img style={{width:"100%"}} src={video.submission.thumbnail} alt={video.title} />
      <h3>{video.submission.title}</h3>
      <p>{video.submission.description}</p>
        </div>
        
    
        
    </div>
  );
};

export default VideoThumbnail;