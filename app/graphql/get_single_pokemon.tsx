import gql from "graphql-tag";

// Used to get Specific Pokemons by ID/Name
export const GET_SINGLE_POKEMON = gql`
    query pokemon($id: String, $name: String) {
        pokemon(id: $id, name: $name) {
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
