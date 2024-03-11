import React, { useState } from 'react';
import VideoThumbnail from './VideoThumbnail';

const VideoPlayer = ({ video,handleNextPage }) => {

  const [showThumbnail, setShowThumbnail] = useState(false);

  
    
  return (
    
  
    showThumbnail ? <VideoThumbnail />
    :
    <div className='flex'>
    {/* <button>Previous</button> */}
   
        <div className="video-player sm:w-90%  md:w-5/6  lg:w-4/6  xl:w-3/6 m-auto">
         <video controls autoPlay className='h-screen'>
     <source src={video.submission.mediaUrl} onEnded={()=>setShowThumbnail(true)} type="video/mp4" />
     Your browser does not support the video tag.
   </video>
         <h2>{video.submission.title}</h2>
   <p>{video.submission.description}</p>
   </div>

   
   {/* <button onClick={handleNextPage}>Next Page</button> */}
 </div>
  
    
  );
};

export default VideoPlayer;