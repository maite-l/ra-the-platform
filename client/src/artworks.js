import { graphQLRequest } from "./util/graphql";

export async function getAllArtworks(color) {
  const graphqlQuery = `
  query getOtherArtworks($color: String) {
    entries(search: $color) {
      ... on artworks_default_Entry {
        id
        author {
          id
        }
        likes
        svgVariables
      }
    }
  }`;
  console.log(graphqlQuery);
  const artworks = (await graphQLRequest(graphqlQuery, { color: color })).data.entries;
  console.log(artworks);
  return artworks;
}

export async function getArtworksByUser(user) {
  const graphqlQuery = `
    query getMyArtworks ($authorId: [QueryArgument]) {
      artworksEntries(authorId: $authorId) {
        ... on artworks_default_Entry {
                id
                author {
                    id
                    username
                }
                likes
                svgVariables
            }
        }
    }`;
  const artworks = (await graphQLRequest(graphqlQuery, { authorId: user.id })).data.artworksEntries;
  return artworks;
}

export async function getArtwork(id) {
  const graphqlQuery = `
    query GetArtworkQuery($id: [QueryArgument]) {
      artworksEntries(id: $id) {
        ... on artworks_default_Entry {
          id
          svgVariables
          likes
          author {
            username
            id
          }
          dateCreated
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
        likes: "[]"
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

export async function likeArtwork(jwt, id, likes) {
  const graphqlQuery = `
    mutation LikeArtwork($id: ID, $likes: String) {
      save_artworks_default_Entry(id: $id, likes: $likes) {
        id
        likes
      }
    }`;
  await graphQLRequest(
    graphqlQuery,
    { id: parseInt(id), likes: likes },
    jwt);
  return true;
}