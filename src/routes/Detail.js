import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader";

// 윗부분의 "query getMovie ~" 는 apollo를 위한 것 (변수의 타입검사 등.. apollo는 그 이후 변수를 실제 query에게 넘겨줄 것임.)
// 아래의 쿼리문은 graphql을 위한 것! (실제 서버로 넘어가는 쿼리문. apollo에게 변수를 전달받음.)
const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            rating
            language
            description_intro
            large_cover_image
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #f76c4f, #d853a6);
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Image = styled.img`
    width: 30%;
    border-radius: 7px;
`;

const Informations = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 50px;
`;

const Rating = styled.h2`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 50px;
`;

const Desc = styled.p`
    font-size: 20px;
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: {
            id: parseInt(id),
        },
    });
    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Image
                src={data.movie.large_cover_image}
                alt={data.movie.title}
            ></Image>
            <Informations>
                <Title>{data.movie.title}</Title>
                <Rating>
                    ★ {data.movie.rating} / {data.movie.language}
                </Rating>
                <Desc>{data.movie.description_intro}</Desc>
            </Informations>
        </Container>
    );
};

export default Detail;
