import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import VideoThumbnail from './VideoThumbnail';

const VideoApp = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState();
    const [pagecount,setPagecount]=useState(0)

  useEffect(() => {
    fetchVideos(pagecount); // Fetch initial page
  }, [pagecount]);

  const fetchVideos = async (page) => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?limit=1&page=${page}`);
      const data = await response.json();
    //   setVideos(data);
    setVideos(data.data.posts)
      console.log(data.data.posts)
      // console.log(data)

    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };
  

console.log(pagecount)
  return (
    <div style={{display:"flex"}} >
     
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>setPagecount(prev=>prev-1)} disabled={pagecount==0}>Prev</button>


        <div className="content ">
          <VideoList videos={videos} pagecount={pagecount}  onVideoClick={handleVideoClick} />
         
        </div>


        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          console.log(pagecount)
          setPagecount(prev=>prev+1)
        }}>Next</button>


    </div>
  );
};

export default VideoApp;
