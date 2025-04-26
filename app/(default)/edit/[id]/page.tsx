import { GET_TODO_BY_ID } from '@/graphql/queries/todos.query';
import { fetchGraphQL } from '@/lib/graphql-request';
import type { TodoResponse } from '../../types';
import EditTodo from './components/EditTodo';

export default async function TodoEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await fetchGraphQL<TodoResponse>(GET_TODO_BY_ID, {
    id: params.id,
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <EditTodo data={data} error={error} />
    </>
  );
}
