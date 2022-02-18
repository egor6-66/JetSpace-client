import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import ApolloClient, {InMemoryCache} from "apollo-boost";
import {store} from "./store";
import {getToken} from "./services/cookies-customs";
import App from './App';
import './index.less';


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
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
