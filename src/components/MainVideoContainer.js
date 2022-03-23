import React from "react";
import { ScrollingDiv } from "./Style";
import VideoPlayer from "./VideoPlayer";
import vid1 from "./vid1.mp4";
import vid2 from "./vid2.mp4";

function MainVideoContainer() {
    return (
        <ScrollingDiv>
            <VideoPlayer playfile={vid1}></VideoPlayer>
            <VideoPlayer playfile={vid2}></VideoPlayer>
        </ScrollingDiv>
    );
}

export default MainVideoContainer;
