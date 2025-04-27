import { connectDB } from '@/database/db';
import Todo from '@/models/todo.model';

export const todoMutationResolvers = {
  Mutation: {
    addTodo: async (_: unknown, { title }: { title: string }) => {
      try {
        await connectDB();
        const todo = new Todo({ title, completed: false });
        await todo.save();
        return todo;
      } catch (error) {
        console.error('Error adding todo:', error);
        throw new Error('Failed to add todo');
      }
    },
    toggleTodo: async (_: unknown, { id }: { id: string }) => {
      try {
        await connectDB();
        const todo = await Todo.findById(id);
        if (!todo) throw new Error('Todo not found');
        todo.completed = !todo.completed;
        await todo.save();
        return todo;
      } catch (error) {
        console.error('Error toggling todo:', error);
        throw new Error('Failed to toggle todo');
      }
    },
    deleteTodo: async (_: unknown, { id }: { id: string }) => {
      try {
        await connectDB();
        await Todo.findByIdAndDelete(id);
        return true;
      } catch (error) {
        console.error('Error deleting todo:', error);
        throw new Error('Failed to delete todo');
      }
    },
  },
};
