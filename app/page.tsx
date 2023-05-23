"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app", // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Header />
            <Content />
            <Footer />
        </ApolloProvider>
    );
}
