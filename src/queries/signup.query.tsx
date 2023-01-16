import { gql  } from '@apollo/client';
import User from '../models/user.model';

// type AuthResponse = {
//   user: User
//   token: String
// }
  
const ADD_USER = gql`
  mutation Signup($first_name: String!,$last_name: String!,$email: String!,$password: String!) {
    signup(
      first_name: $first_name,
      last_name: $last_name,
      email: $email,
      password: $password
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

export default ADD_USER;