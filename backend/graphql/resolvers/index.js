const resolvers = {
  Query: {
    todos: () => {
      return [
        {
          item: 'hello'
        },
        {
          item: 'good bye'
        },
        {
          item: 'this should work'
        }
      ];
    }
  }
};

module.exports = {
  resolvers
};
