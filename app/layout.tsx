import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/tailwind.css';
import { CartProvider } from '../components/CartContent'; // Adjust the path accordingly

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chill Vibes Cafe',
  description: 'Your cozy corner for great coffee, delicious food, and relaxing atmosphere',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50 min-h-screen flex flex-col`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}