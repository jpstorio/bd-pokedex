"use client";

import Image from "next/image";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app", // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            title
            author
        }
    }
`;

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Header />
            <Content />
            <Footer />
        </ApolloProvider>
    );
}
