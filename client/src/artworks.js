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

export async function newArtwork(jsonString, id) {
    console.log("newArtwork");
    const graphqlQuery = `
    mutation NewArtwork($svgVariables: String, $id: ID) {
      save_artworks_default_Entry(
        id: $id
        svgVariables: $svgVariables
        title: "artwork"
        authorId: "1"
      ) {
        id
      }
    }`;

    const artwork = (await graphQLRequest(graphqlQuery, {
        id: id, svgVariables: jsonString,
    })).data.save_artworks_default_Entry;
    console.log("graphqlQuery", graphqlQuery);
    return artwork;
}