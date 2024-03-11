import React, { useState } from 'react';
import VideoThumbnail from './VideoThumbnail';
import { Navigate, useNavigate } from 'react-router-dom';
import VideoApp from './VideoApp';

const VideoPlayer = ({ video,pagecount }) => {

  const [showThumbnail, setShowThumbnail] = useState(false);
  const [count,setCount]=useState(pagecount)

const navigate = useNavigate()

  function handleEnded(){
    // navigate("/thumbnail")
    // setShowThumbnail(true)
  }

  
    
  return (
    
  //  count!=pagecount?<VideoApp />
  //  :
    
    
    <div className='flex'>
    {/* <button>Previous</button> */}
   
      <div className="video-player sm:w-90%  md:w-5/6  lg:w-4/6  xl:w-3/6 m-auto">

         <video controls autoPlay className='h-screen' onEnded={handleEnded}>
            <source src={video.submission.mediaUrl}  type="video/mp4" />
           Your browser does not support the video tag.
         </video>

         <h2>{video.submission.title}</h2>
         <p>{video.submission.description}</p>

      </div>
 </div>
  
    
  );
};

export default VideoPlayer;