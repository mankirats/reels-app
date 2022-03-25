import React from "react";
import { VideoSidebarDiv } from "./Style";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";

function VideoSideBar(props) {
    return (
        <VideoSidebarDiv>
            <span>
                <AiOutlineHeart size={35} />
            </span>
            <span>
                <BiCommentDetail size={35} />
            </span>
            <span>
                <FiShare size={35} />
            </span>
        </VideoSidebarDiv>
    );
}

export default VideoSideBar;
