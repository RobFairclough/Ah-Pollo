import { ApolloServer, ServerInfo } from 'apollo-server';
import { ApolloServerExpressConfig, PubSub } from 'apollo-server-express';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';
import { CompanyUserType } from './enums';
import {  ContextFunction } from 'apollo-server-core';

// resolves
export const pubsub = new PubSub();

export interface RequestContext  {
  companyID: number
  companyUserID: number
  companyUserType: CompanyUserType
  id: number
}

const context: ContextFunction = ({ 
    // req,
    // res
   }): RequestContext => {
  // would decode jwt here but not this day
  const companyID = 1912;
  const companyUserID = 5685;
  const companyUserType = CompanyUserType.Owner;
  const id = 5702;
  return {
    companyID, companyUserID, companyUserType, id,
  };
};

const apolloConfig: ApolloServerExpressConfig = { typeDefs, resolvers, context };

const server: ApolloServer = new ApolloServer(apolloConfig);

server.listen().then(({ url, port, address}:ServerInfo) => {
  console.log(`🚀  Server ready at ${url}, running on port ${port} 🚀, lets lunch 🍔 and learn 👨‍🎓`);
});
