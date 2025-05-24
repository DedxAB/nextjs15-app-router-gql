import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetAllTodos{
    todos {
      _id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: ID!) {
    todo(id: $id) {
      _id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
