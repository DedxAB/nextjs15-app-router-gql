import { GET_TODOS } from '@/graphql/queries/todos.query';
import { fetchGraphQL } from '@/lib/graphql-request';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import type { TodosResponse } from './types';

export default async function page() {
  const { data, error } = await fetchGraphQL<TodosResponse>(GET_TODOS);

  return (
    <main className="p-4">
      <section id="add-todo">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <AddTodo />
      </section>

      <section id="todo-list" className="mt-8">
        <h2 className="text-xl font-semibold mt-4">Tasks</h2>
        <TodoList data={data} error={error} />
      </section>
    </main>
  );
}
