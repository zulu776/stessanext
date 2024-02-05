import { gql } from '@apollo/client';

const PAYMENTS_LAST_MONTH = gql`
  query Payments {
    lastMonth {
      id
      planId
      createdAt
      total
      subscriptionId
    }
  }
`;

export default PAYMENTS_LAST_MONTH;
