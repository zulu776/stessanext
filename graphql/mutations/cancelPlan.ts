import { gql } from '@apollo/client';

const CANCEL_PLAN = gql`
  mutation UpdateUserCancelSubscription(
    $where: SubscriptionWhereUniqueInput!
    $data: SubscriptionCancelUpdateUserInput
  ) {
    updateUserCancelSubscription(where: $where, data: $data) {
      id
    }
  }
`;

export default CANCEL_PLAN;
