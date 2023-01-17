import {gql} from '@apollo/client';

const GET_ITEMS = gql`
    query GetItem($page: Int, $count: Int) {
        getItems (page: $page, count: $count) {
            items {
                uuid
                name
                description
            }
            pagination {
                currentPage
                maxPages
            }
        }
    }

`;

export default GET_ITEMS;