import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    padding: 50px 0px;
    margin-bottom: 50px;
    grid-column: 1 / -1;
    background-image: linear-gradient(to right, #f76c4f, #d853a6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
`;

const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
`;

const Header = () => (
    <Container>
        <Title>Hyoflix with Apollo / GraphQL</Title>
        <SubTitle>
            practice apollo and graphql for nomadcoder instaclone project!
        </SubTitle>
    </Container>
);

export default Header;
