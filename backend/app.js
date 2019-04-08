const { ApolloServer, gql } = require('apollo-server');
const open = require('open');
const { resolvers } = require('./graphql/resolvers/index');
const { typeDefs } = require('./graphql/schema/schema');

const server = new ApolloServer({
  resolvers,
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`Server ready on port ${url}!!`);
  open(url);
});
