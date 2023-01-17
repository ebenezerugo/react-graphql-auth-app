import { gql  } from '@apollo/client';

const VERIFY_ME = gql`
mutation CreateItem($token: String!) {
    createItem(
       token: $token
      ) {
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

export default VERIFY_ME;