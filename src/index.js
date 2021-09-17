import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import client from "./apollo";
import { ApolloProvider } from "@apollo/react-hooks";

// CRA처럼, 이미 대부분의 것들을 준비해둔 'apollo-boost'.
// client 설정만 해주면 간단하게 사용할 수 있음. (client: 데이터 요청할 url?)

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);
