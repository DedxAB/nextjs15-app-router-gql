'use client';

import { ADD_TODO } from '@/graphql/mutations/todos.mutation';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [addTodo] = useMutation(ADD_TODO);

  const router = useRouter();

  const handleAddTodo = async () => {
    try {
      await addTodo({
        variables: { title },
      });
      setTitle('');
      router.refresh();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleEnterKeyPress}
        placeholder="Add a new task"
        className="border p-2 rounded"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2 cursor-pointer hover:bg-blue-600"
        disabled={!title.trim()}
      >
        Add Task
      </button>
    </>
  );
}
