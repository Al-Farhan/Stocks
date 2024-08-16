import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://longtangkan.us-east-a.ibm.stepzen.net/api/rolling-gerbil/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'Apikey longtangkan::local.net+1000::b85a57cb10f3e657354d6c98e5346b53125561231b669bb654cd6b60816ddea1'
    }
  });

  export default client