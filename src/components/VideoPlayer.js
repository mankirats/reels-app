import React, { useEffect, useRef } from "react";
import { StyledVideoPlayer, VideoPlayerContainer } from "./Style";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
function VideoPlayer(props) {
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        console.log("jnjk");
    };

    // useEffect(() => {
    //     videoRef.current.moveDown();
    //     console.log("hello");
    // }, []);

    return (
        <VideoPlayerContainer>
            <StyledVideoPlayer
                onClick={handleVideoPress}
                src={props.playfile}
                autoPlay
                muted
                loop
                ref={videoRef}
            ></StyledVideoPlayer>
            <VideoSideBar></VideoSideBar>
            <VideoFooter
                videoUser={props.videoUser}
                videoDescription={props.videoDescription}
            ></VideoFooter>
        </VideoPlayerContainer>
    );
}

export default VideoPlayer;
