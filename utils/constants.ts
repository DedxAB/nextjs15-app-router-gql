if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
  throw new Error(
    '❌ Missing NEXT_PUBLIC_GRAPHQL_ENDPOINT in environment variables'
  );
}

export const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
