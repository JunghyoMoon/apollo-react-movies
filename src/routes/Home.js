import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    width: 100%;
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(data);
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
