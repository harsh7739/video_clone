import React, { useState, useEffect } from 'react';
// import VideoList from './VideoList';
// import VideoPlayer from './VideoPlayer';

const VideoApp = () => {
 

  useEffect(() => {
    fetchVideos(0); // Fetch initial page
  }, []);

  const fetchVideos = async (page) => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
      const data = await response.json();
      
      console.log(data.data.posts)
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };



  return (
    <div className="app">
      <h1>Video Clone</h1>
      
    </div>
  );
};

export default VideoApp;
