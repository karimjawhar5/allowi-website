import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Allowi – Smart Cashless Allowance for Kids',
  description:
    'Allowi replaces cash with a fun, RFID-powered bracelet that lets children pay safely while parents stay in full control.',
  openGraph: {
    title: 'Allowi – Smart Cashless Allowance for Kids',
    description:
      'A safer, smarter way for children to pay. Join our wait-list to get early access.',
    images: ['/images/hero.webp'],
    siteName: 'Allowi',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
