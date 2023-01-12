import React, { useState } from "react";

import { Bloco, Container, SvgMoon, SvgSun } from "./style";

import { FaRegMoon, FaRegSun } from "react-icons/fa";

function Switch({clickTheme}){

    return(
        <Container>
            <Bloco onClick={clickTheme}>
                <SvgSun><FaRegMoon/></SvgSun>
                <SvgMoon><FaRegSun/></SvgMoon>
            </Bloco>
        </Container>
    );
};

export default Switch;