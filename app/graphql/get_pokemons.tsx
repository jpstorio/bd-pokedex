import gql from "graphql-tag";

// Used to get pokemons based on integer parameter
export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            number
            name
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            classification
            types
            image
        }
    }
`;
