import { todoMutationResolvers } from './todoMutation.resolvers';
import { todoQueryResolvers } from './todoQuery.resolvers';

export const todoResolvers = {
  ...todoQueryResolvers,
  ...todoMutationResolvers,
};
