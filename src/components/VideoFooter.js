import React from "react";
import { VideoFooterDiv, VideoUserDiv } from "./Style";
function VideoFooter(props) {
    return (
        <VideoFooterDiv>
            <VideoUserDiv>{props.videoUser}</VideoUserDiv>
            <div>
                <span>{props.videoDescription}</span>
            </div>
        </VideoFooterDiv>
    );
}

export default VideoFooter;
