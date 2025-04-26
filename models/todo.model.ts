import mongoose, { Schema } from 'mongoose';

export type TTodo = {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const todoSchema = new Schema<TTodo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model<TTodo>('Todo', todoSchema);

export default Todo;
