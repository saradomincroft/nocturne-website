import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nocturne | Drum and Bass Raves',
  description: 'Drum and Bass Raves Created by Stackpackers',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}