import { ApolloClient, InMemoryCache } from '@apollo/client';

import { env } from '../Constants';

const client = new ApolloClient({
  link: env.linkGQL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only'
    }
  }
});

export default client;
