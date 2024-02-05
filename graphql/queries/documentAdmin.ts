import { gql } from '@apollo/client';

const GET_DOCUMENTS_ADMIN = gql`
  query UserDocument($userDocumentId: String!) {
    userDocument(id: $userDocumentId) {
      id
      fileUrl
    }
  }
`;

export default GET_DOCUMENTS_ADMIN;
