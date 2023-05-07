import { graphQLRequest } from './util/graphql';

export async function authenticate(email, password) {
    const { data } = await graphQLRequest(`
    mutation Authenticate($email: String!, $password: String!) {
      authenticate(email: $email, password: $password) {
        user {
          id
        }
        jwt
      }
    }
  `, {
        email,
        password,
    });

    return data.authenticate;

}



