
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const httpLink = new HttpLink({
  uri: 'https://tech.z1.digital/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
