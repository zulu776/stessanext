import { gql } from '@apollo/client';

const GET_USERS_LENGTH = gql`
  query Users {
    users {
      id
      createdAt
    }
  }
`;

export default GET_USERS_LENGTH;
