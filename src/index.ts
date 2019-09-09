import { ApolloServer } from 'apollo-server';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

// resolves

// todo some manner of camelcase converter thing?

const apolloConfig: ApolloServerExpressConfig = { typeDefs, resolvers };

const server: ApolloServer = new ApolloServer(apolloConfig);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
