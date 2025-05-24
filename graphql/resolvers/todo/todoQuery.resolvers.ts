import { connectDB } from '@/database/db';
import Todo from '@/models/todo.model';

export const todoQueryResolvers = {
  Query: {
    todos: async () => {
      try {
        await connectDB();
        const todos = await Todo.find();
        return todos;
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw new Error('Failed to fetch todos');
      }
    },
    todo: async (_: unknown, { id }: { id: string }) => {
      try {
        await connectDB();
        return await Todo.findById(id);
      } catch (error) {
        console.error('Error fetching todo:', error);
        throw new Error('Failed to fetch todo');
      }
    },
  },
};
