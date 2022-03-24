import React from "react";
import { VideoSidebarDiv } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faMessage,
    faArrowUpFromSquare,
} from "@fortawesome/free-regular-svg-icons";

function VideoSideBar(props) {
    return (
        <VideoSidebarDiv>
            <span>
                <FontAwesomeIcon icon={faHeart} size="xl" />
            </span>
            <span>
                <FontAwesomeIcon icon={faMessage} size="xl" />
            </span>
            <span>{/* <FontAwesomeIcon icon={faShare} size="xl" /> */}</span>
            <span>
                <FontAwesomeIcon icon="fa-duotone fa-arrow-up-right-from-square" />
                {/* <FontAwesomeIcon icon={faArrowUpFromSquare} size="xl" /> */}
            </span>
        </VideoSidebarDiv>
    );
}

export default VideoSideBar;
