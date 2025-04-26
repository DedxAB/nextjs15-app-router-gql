import { GRAPHQL_ENDPOINT } from '@/utils/constants';
import { DocumentNode, print } from 'graphql';
import { request } from 'graphql-request';

type FetchGraphQLOutput<T> = {
  data: T | null;
  error: string | null;
};

/*
 * @param query - The GraphQL query string or DocumentNode.
 * @param variables - Optional variables for the GraphQL query.
 * @returns A promise that resolves to an object containing the data or error.
 */
export async function fetchGraphQL<T>(
  query: string | DocumentNode,
  variables?: Record<string, unknown>
): Promise<FetchGraphQLOutput<T>> {
  try {
    const queryString = typeof query === 'string' ? query : print(query);
    const data = await request<T>(GRAPHQL_ENDPOINT, queryString, variables);
    return { data, error: null };
  } catch (err: unknown) {
    let errorMessage = 'Failed to fetch data from GraphQL API';
    if (err instanceof Error) {
      console.error('GraphQL Request Error:', err.message);
      errorMessage = err.message;
    } else {
      console.error('GraphQL Request Error:', err);
    }
    return { data: null, error: errorMessage };
  }
}
