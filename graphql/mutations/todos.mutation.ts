import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      _id
      title
      completed
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($todoId: ID!) {
    toggleTodo(id: $todoId) {
      _id
      title
      completed
    }
  }
`;
