import React from "react";
import { HomeBarDiv } from "./Style";
import { AiFillHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";

function HomeBar(props) {
    return (
        <>
            <HomeBarDiv>
                <span>
                    <AiFillHome size={32} color="white" />
                </span>
                <span>
                    <AiOutlineSearch size={32} color="white" />
                </span>
                <span>
                    <CgAddR size={32} color="white" />
                </span>
                <span>
                    <BiMessageAltDetail size={32} color="white" />
                </span>
                <span>
                    <AiOutlineUser size={32} color="white" />
                </span>
            </HomeBarDiv>
        </>
    );
}

export default HomeBar;
