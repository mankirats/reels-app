import styled from "styled-components";
import { devices } from "./devices";

const ScrollingDiv = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    max-width: calc(20vw + 4rem);
    scroll-behavior: smooth;
    @media ${devices.laptop} {
        width: 45vw;
    }
    @media ${devices.mobileL} {
        width: 100vw;
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
    min-width: 100%;
`;

export { StyledVideoPlayer, ScrollingDiv };
