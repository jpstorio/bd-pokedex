import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
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

export default function Content() {
    const { loading, error, data } = useQuery(GET_BOOKS, {
        variables: { first: 10 },
    });
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data.pokemons.map((data: any) => {
                return (
                    <div>
                        <div>
                            <img src={data.image} />
                        </div>
                        <div>{data.number}</div>
                        <div>{data.name}</div>
                        <div>{data.classification}</div>
                        {data.types.map((types: any) => (
                            <div>{types}</div>
                        ))}
                        <div>Minimum Height: {data.height.minimum}</div>
                        <div>Maximum Height: {data.height.maximum}</div>
                        <div>Minimum Weight: {data.weight.minimum}</div>
                        <div>Maximum Weight: {data.weight.maximum}</div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}
