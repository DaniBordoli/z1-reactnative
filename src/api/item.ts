import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      title
      image
      author
      content
      category {
        id
        title
      }
    }
  }
`;
