const { gql } = require('apollo-server');

const typeDefs = gql`
  type Todo {
    item: String!
  }
  type Query {
    todos: [Todo]!
  }
`;

module.exports = {
  typeDefs
};
