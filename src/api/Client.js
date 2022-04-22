import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
