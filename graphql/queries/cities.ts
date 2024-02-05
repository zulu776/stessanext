import { gql } from '@apollo/client';

const GET_CITIES = gql`
  query Cities {
    cities {
      id
      name
      stateId
    }
  }
`;

export default GET_CITIES;
