import { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

const AppWrapper = ({ Component, pageProps, apolloClient }: any) => {
    return (
        <Container>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Container>
    );
}

export default withApollo(AppWrapper);