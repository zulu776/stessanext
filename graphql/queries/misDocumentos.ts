import { gql } from '@apollo/client';

const GET_MIS_DOCUMENTOS = gql`
  query UserDocuments(
    $where: WhereUserDocumentsUniqueInput!
    $take: Int!
    $skip: Int!
  ) {
    userDocuments(where: $where, take: $take, skip: $skip) {
      createdAt
      fileUrl
      id
      code
      name
      active
      document {
        id
        categoryId
        name
        cost
      }
    }
  }
`;

const GET_MIS_ALL_DOCUMENTOS = gql`
  query UserDocuments($where: WhereUserDocumentsUniqueInput) {
    userDocuments(where: $where) {
      id
    }
  }
`;

const GET_CATEGORYS = gql`
  query Categorys {
    categorys {
      color
      name
      id
    }
  }
`;

const GET_MIS_ALL_DOCUMENTOS_NAME = gql`
  query LegalDocumentMasters {
    legalDocumentMasters {
      id
      name
      categoryId
    }
  }
`;

export {
  GET_MIS_DOCUMENTOS,
  GET_CATEGORYS,
  GET_MIS_ALL_DOCUMENTOS,
  GET_MIS_ALL_DOCUMENTOS_NAME,
};
