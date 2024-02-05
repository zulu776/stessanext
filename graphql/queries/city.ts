import { gql } from '@apollo/client';

const GET_CITY_STATE = gql`
  query City($cityId: String!) {
    city(id: $cityId) {
      name
      state {
        name
      }
    }
  }
`;

export default GET_CITY_STATE;
