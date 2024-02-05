import { gql } from '@apollo/client';

const GET_STATES = gql`
  query Query {
    states {
      id
      name
    }
  }
`;

export default GET_STATES;
