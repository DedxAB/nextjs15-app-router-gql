import fs from 'fs';
import path from 'path';

const todoTypeDefs = fs.readFileSync(
  path.join(process.cwd(), 'graphql', 'typeDefs', 'todo.graphql'),
  'utf-8'
);
const userTypeDefs = fs.readFileSync(
  path.join(process.cwd(), 'graphql', 'typeDefs', 'user.graphql'),
  'utf-8'
);

const typeDefs = `${todoTypeDefs}\n${userTypeDefs}`;

export default typeDefs;
