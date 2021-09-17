import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(data);
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                data.movies.map((movie) => <h1>{movie.title}</h1>)
            )}
        </div>
    );
};

export default Home;
