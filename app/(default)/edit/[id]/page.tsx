import { GET_TODO_BY_ID } from '@/graphql/queries/todos.query';
import { fetchGraphQL } from '@/lib/graphql-request';
import type { TodoResponse } from '../../types';
import EditTodo from './components/EditTodo';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function TodoEditPage({ params }: PageProps) {
  const { id } = await params;

  const { data, error } = await fetchGraphQL<TodoResponse>(GET_TODO_BY_ID, {
    id,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <EditTodo data={data} error={error} />
    </div>
  );
}
