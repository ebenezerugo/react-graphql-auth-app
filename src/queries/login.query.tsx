import { gql  } from '@apollo/client';

const LOGIN_USER = gql`
mutation Login($email: String!,$password: String!) {
    login(
      email: $email,
      password: $password,
      ) {
        token
        user {
            uuid
            first_name
            last_name
            email
            email_verified_at
            email_verification_token
        }
      }
  }
`;

export default LOGIN_USER;