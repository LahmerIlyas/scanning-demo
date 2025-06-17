import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import {selectedEnvironment} from '@/constants/environments';

const pepLink = new HttpLink({
  uri: selectedEnvironment.pepdirectGraphqlUrl,
});

const datoLink = new HttpLink({
  uri: selectedEnvironment.datoGraphqlUrl,
  headers: {
    'X-Environment': 'staging',
  },
});

const splitLink = ApolloLink.split(
  operation => operation.getContext().clientName === 'dato',
  datoLink,
  pepLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          items: {
            keyArgs: ['gtins'],
            merge(existing = {items: [], pagination: null}, incoming) {
              return {
                ...incoming,
                items: [...existing.items, ...incoming.items],
              };
            },
          },
        },
      },
    },
  }),
});
