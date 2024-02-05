import { gql } from '@apollo/client';

const GET_DOCUMENTS_LENGTH = gql`
  query UserDocuments {
    userDocuments {
      id
    }
  }
`;

export default GET_DOCUMENTS_LENGTH;
