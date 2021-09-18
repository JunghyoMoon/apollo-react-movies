import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Image = styled.img``;

const Movie = ({ id, title, medium_cover_image }) => (
    <Container>
        <Link to={`/${id}`}>
            <Title>{title}</Title>
            <SubTitle>{id}</SubTitle>
            <Image src={medium_cover_image} alt={title} />
        </Link>
    </Container>
);

export default Movie;
