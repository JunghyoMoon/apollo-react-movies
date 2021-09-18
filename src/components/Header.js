import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    height: 50px;
    background-image: linear-gradient(to right, #f76c4f, #d853a6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = () => <Container>this is header</Container>;

export default Header;
