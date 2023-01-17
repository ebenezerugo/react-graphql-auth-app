import { gql  } from '@apollo/client';

const CREATE_ITEM = gql`
mutation CreateItem($name: String!,$description: String!) {
    createItem(
       name: $name,
       description: $description,
      ) {
        uuid
        name
        description
      }
  }
`;

export default CREATE_ITEM;