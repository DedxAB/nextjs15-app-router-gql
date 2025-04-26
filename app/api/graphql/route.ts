import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';
import { GRAPHQL_ENDPOINT } from '@/utils/constants';
import { createSchema, createYoga, Plugin } from 'graphql-yoga';

interface NextContext {
  params: Promise<Record<string, string>>;
}

const loggerPlugin: Plugin = {
  async onExecute({ args }) {
    console.log('------------------------------------');
    console.log('🚀 GraphQL Request:', args.document.loc?.source.body);
    console.log('🎯 Variables:', args.variableValues);
    console.log('------------------------------------');
  },
};

// 🔥 Log the environment
if (process.env.NODE_ENV === 'development') {
  console.log('\n🚀 Server running in Development mode \n');
} else if (process.env.NODE_ENV === 'production') {
  console.log('\n🏭 Server running in Production mode \n');
} else {
  console.log(`\n⚡ Server running in ${process.env.NODE_ENV} mode \n`);
}

const { handleRequest } = createYoga<NextContext>({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: GRAPHQL_ENDPOINT,
  fetchAPI: { Response },
  logging: true,
  plugins: process.env.NODE_ENV === 'development' ? [loggerPlugin] : [],
});

export { handleRequest as GET, handleRequest as POST };
