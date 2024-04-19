import { gql } from '@apollo/client';

export const QUERY_OBJECTIVES = gql`
  {
    objectives {
        name
        description
        points
        image
      }
  }
`;