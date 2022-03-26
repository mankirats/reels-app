import styled from "styled-components";
import { devices } from "./devices";

const ScrollingDiv = styled.div`
    position: relative;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 85vh;
    width: calc(20vw + 4rem);

    @media ${devices.laptop} {
        width: calc(32vw + 5rem);
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
    margin-bottom: 0.5rem;
    position: relative;
    width: 100%;
    height: 100%;
`;

const VideoFooterDiv = styled.div`
    width: calc(100% - 4.5rem);
    min-height: 5%;
    position: absolute;
    bottom: 40px;
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
    bottom: 50px;
    right: 20px;
    display: flex;
    color: white;
    flex-direction: column;
    span {
        padding: 0.3rem 0;
    }
`;

const HomeBarDiv = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    align-items: center;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: calc(5vh + 1rem);
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99;
`;

const AppLogoDiv = styled.div`
    position: sticky;
    width: 100%;
    height: 2rem;
    font-size: calc(0.8vh + 0.65rem);
    font-family: cursive;
    top: 20px;
    text-align: right;
    padding: 0 1rem;
    color: white;
    z-index: 9;
    background: #bdc3c7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        white,
        lightgrey
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        white,
        lightgrey
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export {
    StyledVideoPlayer,
    ScrollingDiv,
    VideoFooterDiv,
    VideoPlayerContainer,
    VideoUserDiv,
    VideoSidebarDiv,
    HomeBarDiv,
    AppLogoDiv,
};
