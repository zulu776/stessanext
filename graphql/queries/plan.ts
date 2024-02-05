import { gql } from '@apollo/client';

const GET_PLAN_BY_USERS = gql`
  query User($userId: String!) {
    user(id: $userId) {
      subscriptions {
        id
        payments {
          id
          plan {
            frequency
            maxDocuments
            name
            cost
            transactions {
              amount
              userDocuments {
                name
              }
            }
          }
        }
        createdAt
        updatedAt
        subscriptionEndDate
      }
    }
  }
`;

export default GET_PLAN_BY_USERS;
