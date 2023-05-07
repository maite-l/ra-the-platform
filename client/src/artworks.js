import { graphQLRequest } from "./util/graphql";

export async function getAllArtworks() {
    const graphqlQuery = `
    query GetAllArtworksQuery {
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
            authorId
        }
        } 
    }`;
    const artwork = (await graphQLRequest(graphqlQuery, { id: id })).data.artworksEntries;
    return artwork;
}


export async function newArtwork(jsonString, jwt, user) {
    const graphqlQuery = `
    mutation NewArtwork($svgVariables: String, $authorId: ID) {
      save_artworks_default_Entry(
        svgVariables: $svgVariables
        title: "artwork"
        authorId: $authorId
      ) {
        id
      }
    }`;

    const artwork = (await graphQLRequest(
        graphqlQuery, 
        { svgVariables: jsonString, authorId: user.id },
        jwt
        )).data.save_artworks_default_Entry;
    return artwork;
}

export async function deleteArtwork(id, jwt) {
    const graphqlQuery = `
    mutation DeleteArtwork($id: Int!) {
      deleteEntry(id: $id)
    }`;
    await graphQLRequest(
        graphqlQuery, 
        { id: parseInt(id) },
        jwt);
    return true;
}