import { gql } from '@apollo/client';

const GET_CATEGORIES_SPECIFY = gql`
  query UserDocuments($categoryId: String!) {
    category(id: $categoryId) {
      name
    }
  }
`;

export default GET_CATEGORIES_SPECIFY;
