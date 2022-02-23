import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {GRAPH_QL_URL} from "./assets/constants";
import {store} from "./store";
import {getToken} from "./services/localStorage";
import App from './App';
import './index.less';



export const client = new ApolloClient({
    uri: GRAPH_QL_URL,
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
