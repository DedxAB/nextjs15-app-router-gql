import { ApolloWrapper } from './ApolloWrapper';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
