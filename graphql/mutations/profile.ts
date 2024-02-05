import { gql } from '@apollo/client';

const UPSERT_PROFILE = gql`
  mutation UpdateUserProfile(
    $where: UserWhereUniqueInput
    $data: UserUpdateWithProfileUpsert
  ) {
    updateUserProfile(where: $where, data: $data) {
      id
      name
    }
  }
`;

export default UPSERT_PROFILE;
