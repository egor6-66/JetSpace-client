import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider, ApolloClient, InMemoryCache, HttpLink, split} from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities'
import {GRAPH_QL_URL} from "./assets/constants";
import {store} from "./store";
import {getToken} from "./services/localStorage";
import App from './App';
import './index.less';


const wsLink = new WebSocketLink({uri: 'ws://localhost:5001/graphql', options: {reconnect: true}})
const httpLink = new HttpLink({uri: GRAPH_QL_URL})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    }, wsLink, httpLink,
);

export const client = new ApolloClient({
    uri: GRAPH_QL_URL,
    link: splitLink,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${getToken()}`
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
