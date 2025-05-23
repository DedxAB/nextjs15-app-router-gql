import { GET_TODOS } from '@/graphql/queries/todos.query';
import client from '@/lib/apollo-client';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import type { TodosResponse } from './types';

export default async function HomePage() {
  const { data, errors } = await client.query<TodosResponse>({
    query: GET_TODOS,
    fetchPolicy: 'no-cache',
  });

  return (
    <main className="p-4">
      <section id="add-todo">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <AddTodo />
      </section>

      <section id="todo-list" className="mt-8">
        <h2 className="text-xl font-semibold mt-4">Tasks</h2>
        <TodoList
          data={data}
          error={errors && errors.length > 0 ? errors[0].message : null}
        />
      </section>
    </main>
  );
}
