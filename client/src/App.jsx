import React from 'react';
// import Dashboard from './components/Dashboard';
import './main.css';
import backgroundImage from './assets/TI_background.png';

import AppNavbar from './components/Navbar';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Dashboard phase="action" />
                {/* Other components if any */}
            </div>
            <ApolloProvider client={client}>
                <AppNavbar />
                <Outlet />
            </ApolloProvider>
        </>
    )
}

export default App;
