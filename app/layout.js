import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next js  tutorial',
  description: 'cool app built with nextjs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-6xl">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
