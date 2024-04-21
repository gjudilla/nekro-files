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

export const QUERY_LAWS = gql`
  {
    laws {
        name
        effect
        icon
      }
  }
`;

export const QUERY_FACTIONS = gql`
  {
    laws {
        name
        icon
      }
  }
`;