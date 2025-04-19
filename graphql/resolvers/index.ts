import { todoResolvers } from './todo';

const resolvers = {
  Query: {
    ...todoResolvers.Query,
  },
  Mutation: {
    ...todoResolvers.Mutation,
  },
};

export default resolvers;
