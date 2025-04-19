import { connectDB } from '@/database/db';
import Todo from '@/models/todo.model';

export const todoMutationResolvers = {
  Mutation: {
    addTodo: async (_: unknown, { title }: { title: string }) => {
      await connectDB();
      const todo = new Todo({ title, completed: false });
      await todo.save();
      return todo;
    },
    toggleTodo: async (_: unknown, { id }: { id: string }) => {
      await connectDB();
      const todo = await Todo.findById(id);
      if (!todo) throw new Error('Not found');
      todo.completed = !todo.completed;
      await todo.save();
      return todo;
    },
    deleteTodo: async (_: unknown, { id }: { id: string }) => {
      await connectDB();
      await Todo.findByIdAndDelete(id);
      return true;
    },
  },
};
