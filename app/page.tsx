'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
import { ITodo } from '@/models/todo.model';

const GET_TODOS = gql`
  query {
    todos {
      _id
      title
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      _id
      title
      completed
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery<{ todos: ITodo[] }>(GET_TODOS, { client });
  const [addTodo] = useMutation(ADD_TODO, {
    client,
    refetchQueries: [{ query: GET_TODOS }],
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addTodo({ variables: { title: 'New Task' } })}
      >
        Add Task
      </button>
      <ul className="mt-4 space-y-2">
        {data?.todos?.map((todo: ITodo) => (
          <li key={String(todo._id)}>
            {todo.title} {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}
