import { Inter } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Victor Zarzar TS - NextJS',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}