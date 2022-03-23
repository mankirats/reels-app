import React, { useEffect, useRef } from "react";
import { StyledVideoPlayer } from "./Style";
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
        <>
            <StyledVideoPlayer
                onClick={handleVideoPress}
                src={props.playfile}
                autoPlay
                muted
                loop
                ref={videoRef}
            ></StyledVideoPlayer>
        </>
    );
}

export default VideoPlayer;
