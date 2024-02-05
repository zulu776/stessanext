import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users($take: Int, $skip: Int) {
    users(take: $take, skip: $skip) {
      id
      name
      email
      subscriptions {
        createdAt
        subscriptionEndDate
        updatedAt
      }
      profile {
        document
        type
      }
      roleId
      createdAt
    }
  }
`;

export default GET_USERS;
