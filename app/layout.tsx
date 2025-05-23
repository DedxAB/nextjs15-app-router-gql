import AppProvider from '@/context/AppProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next js 15 with GraphQL and MongoDB',
  description: 'Generated by DedxAB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
