import type { Metadata } from 'next';
import './globals.css';
import './reset.css';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Beglarian Fabrics',
  description:
    'Deadstock fabrics from France. Wholesale deadstock fabrics made in France and Italy. Beglarian Fabrics',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={'content'}>{children}</div>
      </body>
    </html>
  );
}
