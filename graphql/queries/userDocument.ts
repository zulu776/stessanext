import { gql } from '@apollo/client';

const GET_DOCUMENTS = gql`
  query UserDocuments($take: Int, $skip: Int) {
    userDocuments(take: $take, skip: $skip) {
      id
      name
      createdAt
      code
      document {
        name
        category {
          name
          color
        }
      }
      user {
        name
      }
    }
  }
`;

export default GET_DOCUMENTS;
