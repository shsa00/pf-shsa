import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shane | Full-Stack Web Developer (Laravel, PHP, MySQL, Vite)',
  description:
    'Portfolio of Shane, a Web Developer with 4 years of experience specializing in Laravel, PHP, MySQL, JavaScript, Bootstrap, and Vite.',
  keywords: [
    'Shane Web Developer',
    'Laravel Developer',
    'PHP Developer',
    'Full-Stack Developer',
    'MySQL Database Developer',
    'Vite Bootstrap Frontend',
    'Pixel Portfolio',
  ],
  authors: [{ name: 'Shane' }],
  openGraph: {
    title: 'Shane | Full-Stack Web Developer Portfolio',
    description:
      'Explore full-stack web applications built with Laravel, PHP, MySQL, and modern frontend tools like Vite and Next.js.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shane | Web Developer Portfolio',
    description: '4+ years of experience in Laravel, PHP, MySQL, JavaScript, and Vite.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}