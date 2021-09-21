import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

// 아폴로는 cache를 가짐? => 이미 받아온 데이터를 저장해 둠. 다시 홈이나 이전에 선택했던 디테일 페이지로 가면 로딩 없이 원래 저장된 데이터를 아폴로가 사용할 것임?

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            rating
            summary
            medium_cover_image
            isLiked @client
        }
    }
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin-bottom: 100px;
`;

const Home = () => {
    const { loading, data } = useQuery(GET_MOVIES);
    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Header />
            {data.movies &&
                data.movies.map((movie, index) => (
                    <Movie key={index} {...movie} />
                ))}
        </Container>
    );
};

export default Home;
