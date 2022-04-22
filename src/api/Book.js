import { ApolloProvider, useQuery, gql } from "@apollo/client";
import { Client } from "./Client";

export const getBookQuery = gql`
  query {
    book {
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;
