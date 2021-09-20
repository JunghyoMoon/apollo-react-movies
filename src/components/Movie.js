import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled(Link)`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;

    &:hover {
        * {
            opacity: 0.6;
        }
    }

    &:active {
    }
`;

const InfoContainer = styled.div`
    margin-left: 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`;

const Rating = styled.h2`
    font-size: 25px;
    margin-bottom: 20px;
`;

const Summary = styled.span`
    font-size: 20px;
`;

const Image = styled.img`
    border-radius: 7px;
`;

const Movie = ({ id, title, rating, summary, medium_cover_image, isLiked }) => (
    <Container>
        <Wrapper to={`/${id}`}>
            <Image src={medium_cover_image} alt={title}></Image>
            <InfoContainer>
                <Title>{title}</Title>
                <Rating>★ {rating}</Rating>
                <Summary>
                    {summary.length >= 120
                        ? `${summary.slice(0, 120)}...`
                        : summary}
                </Summary>
            </InfoContainer>
        </Wrapper>
        <button>{isLiked ? "unlike" : "like"}</button>
    </Container>
);

export default Movie;
