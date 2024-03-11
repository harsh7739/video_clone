import { Route, Routes } from "react-router-dom";
import VideoThumbnail from "../VideoThumbnail";

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/thumbnail" element={<VideoThumbnail />} />
        </Routes>
        </>
    )
}

export default MainRoute