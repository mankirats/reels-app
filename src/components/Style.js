import styled from "styled-components";
import { devices } from "./devices";

const ScrollingDiv = styled.div`
    position: relative;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    width: calc(20vw + 4rem);

    @media ${devices.laptop} {
        width: calc(25vw + 4rem);
    }
    @media ${devices.mobileL} {
        width: calc(100vw - 1rem);
    }
`;

const StyledVideoPlayer = styled.video`
    position: relative;
    background-color: white;
    border-radius: 10px;
    display: grid;
    place-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* scroll-snap-align: start; */
    object-fit: fill;
    position: relative;
    height: 100%;
    width: 100%;
`;

const VideoPlayerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const VideoFooterDiv = styled.div`
    width: calc(100% - 4.5rem);
    min-height: 5%;
    position: absolute;
    bottom: 20px;
    left: 8px;
    color: white;
    font-weight: 100;

    font-size: calc(0.4vh + 0.7rem);
    letter-spacing: 0.3px;
    padding: 1rem 1rem;
`;

const VideoUserDiv = styled.div`
    font-weight: 200;
    padding: 0.5rem 0;
`;

const VideoSidebarDiv = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    color: white;
    flex-direction: column;
    span {
        padding: 0.5rem 0;
    }
`;

export {
    StyledVideoPlayer,
    ScrollingDiv,
    VideoFooterDiv,
    VideoPlayerContainer,
    VideoUserDiv,
    VideoSidebarDiv,
};
