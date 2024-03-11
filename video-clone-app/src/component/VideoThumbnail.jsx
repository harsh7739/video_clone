// import React, { useState } from 'react';
// import VideoPlayer from './VideoPlayer';

// const VideoThumbnail = ({ video, onClick }) => {
//     const [flag,setFlag]=useState(false)
//     const [selectedVideo,setSelectedVideo]=useState(null)
//   return (
//     <div className="video-thumbnail" >
//         {
//             selectedVideo? <VideoPlayer video={video} /> : 
//             <div style={{width:"40%",height:"200ox",border:"1px solid red",margin:"auto"}} onClick={() =>{
//                 setSelectedVideo(video)
//             }}  >
//             <img style={{width:"100%"}} src={video.submission.thumbnail} alt={video.title} />
//             <h3>{video.submission.title}</h3>
//             <p>{video.submission.description}</p>
//             </div>
//         }
     
                
//     </div>
//   );
// };

// export default VideoThumbnail;






import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { FcLike } from "react-icons/fc";

const VideoThumbnail = ({ video,handleNextPage }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [reactioncount,setReactioncount]=useState(video.reaction.count)
    localStorage.setItem("reaction_count",reactioncount)

    return (
        <div className="w-300px h-500px sm:w-90%  md:w-5/6  lg:w-4/6  xl:w-3/6 m-auto   p-4">
            {selectedVideo ? (
                <VideoPlayer video={video} handleNextPage={handleNextPage} />
            ) : (
                <div
                    // className="border  border-gray-300 rounded-md overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                >
                    <img
                        className="  object-cover sm:w-90%  md:w-5/6  lg:w-4/6  xl:w-5/6 m-auto"
                        src={video.submission.thumbnail}
                        alt={video.submission.title}
                        onClick={() => setSelectedVideo(video)}
                    />
                    <div className="p-4 m-auto sm:w-90%  md:w-5/6  lg:w-4/6  xl:w-3/6 m-auto"  >
                        <h3 className="text-lg font-semibold w-full">{video.submission.title}</h3>
                        <p className="text-sm  text-gray-600 ">{video.submission.description}</p>
                        <button onClick={()=>setReactioncount(prev=>prev+1)}><span className='text-red-950'>Likes</span> {reactioncount}</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoThumbnail;
