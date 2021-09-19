import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

// 윗부분의 "query getMovie ~" 는 apollo를 위한 것 (변수의 타입검사 등.. apollo는 그 이후 변수를 실제 query에게 넘겨줄 것임.)
// 아래의 쿼리문은 graphql을 위한 것! (실제 서버로 넘어가는 쿼리문. apollo에게 변수를 전달받음.)
const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Container = styled.div`
    width: 100%;
    background-image: linear-gradient(to right, #f76c4f, #d853a6);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: {
            id,
        },
    });

    return <Container>Details about this movie: {id}</Container>;
};

export default Detail;
