import { todoResolvers } from './todo';

export const resolvers = {
  Query: {
    ...todoResolvers.Query,
  },
  Mutation: {
    ...todoResolvers.Mutation,
  },
};
