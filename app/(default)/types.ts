import { TTodo } from '@/models/todo.model';

export type TodosResponse = {
  todos: TTodo[];
};

export type TodoResponse = {
  todo: TTodo;
};
