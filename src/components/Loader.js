import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#f76c4f, #d853a6);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Message = styled.h1`
    font-size: 80px;
`;

const Loader = () => (
    <Container>
        <Message>Loading...</Message>
    </Container>
);

export default Loader;
