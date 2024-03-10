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

const VideoThumbnail = ({ video }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [reactioncount,setReactioncount]=useState(video.reaction.count)
    localStorage.setItem("reaction_count",reactioncount)

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            {selectedVideo ? (
                <VideoPlayer video={video} />
            ) : (
                <div
                    className="border border-gray-300 rounded-md overflow-hidden cursor-pointer"
                    // onClick={() => setSelectedVideo(video)}
                >
                    <img
                        className="w-full h-48 object-cover"
                        src={video.submission.thumbnail}
                        alt={video.submission.title}
                        onClick={() => setSelectedVideo(video)}
                    />
                    <div className="p-4" >
                        <h3 className="text-lg font-semibold w-full">{video.submission.title}</h3>
                        <p className="text-sm text-gray-600 w-full">{video.submission.description}</p>
                        <button onClick={()=>setReactioncount(prev=>prev+1)}>Like <FcLike /> {reactioncount}</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoThumbnail;
