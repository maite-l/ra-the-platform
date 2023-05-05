import { graphQLRequest } from "./graphql";

export async function getArtworks() {
    const graphqlQuery = `
    query GetArtworksQuery {
        artworksEntries {
            ... on artworks_default_Entry {
                id
                author {
                    id
                }
                svgVariables
            }
        }
    }`;
    const artworks = (await graphQLRequest(graphqlQuery)).data.artworksEntries;
    return artworks;
}