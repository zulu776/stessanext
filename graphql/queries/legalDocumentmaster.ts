import { gql } from '@apollo/client';

export const GET_UNIQUE_DOCUMENT_MASTER = gql`
  query LegalDocumentMaster($legalDocumentMasterId: String!) {
    legalDocumentMaster(id: $legalDocumentMasterId) {
      priceDescount
      cost
      name
      id
      description
      category {
        name
      }
    }
  }
`;
