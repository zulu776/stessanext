import { gql } from '@apollo/client';

const GET_USER = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      name
      image
      roleId
      email
      documentsAvailable
      userDocuments {
        documentId
        fileUrl
      }
      profile {
        id
        address
        document
        documentType
        phone
        type
        cityId
      }
    }
  }
`;

export default GET_USER;
