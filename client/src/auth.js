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

export async function register(email, username, password) {
    const { data } = await graphQLRequest(`
    mutation Register($email: String!, $username: String!, $password: String!) {
      register(email: $email, username: $username, password: $password) {
        user {
          id
        }
        jwt
      }
    }
  `, {
        email,
        username,
        password,
    });

    return data.register;
}



