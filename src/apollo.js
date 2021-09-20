import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    // 클라이언트 쪽에서의 resolver! => 서버에서 받아온 데이터를 클라이언트에서 가공?
    resolvers: {
        Movie: {
            isLiked: () => false,
        },
    },
});

export default client;
