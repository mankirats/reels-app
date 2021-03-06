import React from "react";
import { ScrollingDiv } from "./Style";
import VideoPlayer from "./VideoPlayer";
import HomeBar from "./HomeBar";

import vid1 from "./VideoFiles/vid1.mp4";
import vid2 from "./VideoFiles/vid2.mp4";
import AppLogo from "./AppLogo";
function MainVideoContainer() {
    return (
        <>
            <ScrollingDiv>
                <AppLogo></AppLogo>
                <VideoPlayer
                    playfile={vid1}
                    videoUser="User1"
                    videoDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                ></VideoPlayer>
                <VideoPlayer
                    playfile={vid2}
                    videoUser="User2"
                    videoDescription="Description for user 2 videoLorem Ipsum is simply dummy text of the printing and typesetting industry"
                ></VideoPlayer>
                <HomeBar></HomeBar>
            </ScrollingDiv>
        </>
    );
}

export default MainVideoContainer;
