'use client';

import { TOGGLE_TODO } from '@/graphql/mutations/todos.mutation';
import { TTodo } from '@/models/todo.model';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type PageProps = {
  data: { todo: TTodo } | null;
  error: string | null;
};

const EditTodo = ({ data, error }: PageProps) => {
  const [todo, setTodo] = useState<TTodo | null>(data?.todo || null);
  const router = useRouter();

  const handleChangeStatus = () => {
    if (todo) {
      setTodo({
        ...todo,
        completed: !todo.completed,
      });
    }
  };

  const [toggleTodo] = useMutation(TOGGLE_TODO, {
    variables: { todoId: todo?._id },
    onCompleted: (data) => {
      setTodo(data.toggleTodo);
    },
    onError: (error) => {
      console.error('Error toggling todo:', error);
    },
  });

  const handleUpdateTodoStatus = () => {
    if (todo) {
      toggleTodo({
        variables: { todoId: todo._id },
      });
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>{todo && <span>Title: {todo.title}</span>}</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Status:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              {todo?.completed ? 'Completed' : 'Not Completed'}
              <input
                type="checkbox"
                checked={todo?.completed}
                onChange={handleChangeStatus}
              />
            </label>
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded cursor-pointer w-fit"
            onClick={handleUpdateTodoStatus}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
