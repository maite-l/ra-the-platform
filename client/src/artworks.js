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

export async function getArtwork(id) {
    const graphqlQuery = `
    query GetArtworkQuery($id: [QueryArgument]) {
        artworksEntries(id: $id) {
        ... on artworks_default_Entry {
            id
            svgVariables
        }
        } 
    }`;
    const artwork = (await graphQLRequest(graphqlQuery, { id: id })).data.artworksEntries;
    return artwork;
}


export async function newArtwork(jsonString, id) {
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
    return artwork;
}

export async function deleteArtwork(id) {
    const graphqlQuery = `
    mutation DeleteArtwork($id: Int!) {
      deleteEntry(id: $id)
    }`;
    await graphQLRequest(graphqlQuery, { id: parseInt(id) });
    return true;
}