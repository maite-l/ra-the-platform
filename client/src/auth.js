import { graphQLRequest } from './util/graphql';

export async function authenticate(email, password) {
    const { data } = await graphQLRequest(`
    mutation MyMutation($email: String!, $password: String!) {
      authenticate(email: $email, password: $password) {
        user {
          email
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



