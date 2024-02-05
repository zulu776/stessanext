import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query UserDocuments {
    userDocuments {
      id
      documentId
    }
  }
`;

export default GET_CATEGORIES;
