import { ApolloServer } from 'apollo-server';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

// resolves

// todo some manner of camelcase converter thing?

enum CompanyUserType {
  Operative = 50,
  Admin = 75,
  Owner = 100
}
export interface RequestContext  {
  companyID: Number
  companyUserID: Number
  companyUserType: CompanyUserType
  id: Number
}

const context = ({ 
  // req,
  //  res
   }): RequestContext => {
  // would decode jwt here but not today
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

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
