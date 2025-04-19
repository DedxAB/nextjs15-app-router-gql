import { connectDB } from '@/database/db';
import Todo from '@/models/todo.model';

export const todoQueryResolvers = {
  Query: {
    todos: async () => {
      await connectDB();
      return Todo.find();
    },
  },
};
