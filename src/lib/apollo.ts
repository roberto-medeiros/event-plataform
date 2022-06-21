import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oawb271j2a01xr7lyuhtco/master',
  cache: new InMemoryCache()
})
