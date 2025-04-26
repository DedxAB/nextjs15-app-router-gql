'use client';

import { TTodo } from '@/models/todo.model';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

type PageProps = {
  data: { todos: TTodo[] } | null;
  error: string | null;
};

export default function TodoList({ data, error }: PageProps) {
  const router = useRouter();

  if (error) {
    return <p>Error fetching todos: {error}</p>;
  }

  return (
    <>
      {data?.todos?.length === 0 && <p>No tasks available.</p>}
      <ul className="mt-4 space-y-2">
        {data?.todos?.map((todo: TTodo) => (
          <li
            key={String(todo._id)}
            className="flex justify-between items-center"
          >
            {todo.title} {todo.completed ? '✅' : '❌'}
            <span className="text-sm text-gray-500">
              ({dayjs(Number(todo.createdAt)).format('MMM D, YYYY')})
            </span>
            <button
              className="cursor-pointer"
              onClick={() => router.push(`/edit/${todo._id}`)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
