"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
