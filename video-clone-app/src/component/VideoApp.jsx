import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const VideoApp = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    fetchVideos(0); // Fetch initial page
  }, []);

  const fetchVideos = async (page) => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
      const data = await response.json();
    //   setVideos(data);
    setVideos(data.data.posts)
      console.log(data.data.posts)
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };


  return (
    <div className="app">
      <h1>Video Clone</h1>
      <div className="content">
        <VideoList videos={videos} onVideoClick={handleVideoClick} />


        {/* {selectedVideo && <VideoPlayer video={selectedVideo} />} */}
      </div>
    </div>
  );
};

export default VideoApp;
