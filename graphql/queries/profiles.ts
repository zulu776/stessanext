import { gql } from '@apollo/client';

const GET_PROFILES = gql`
  query Query {
    states {
      id
      name
    }
  }
`;

export default GET_PROFILES;
