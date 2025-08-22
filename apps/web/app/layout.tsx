import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = { title: 'Lumina Editor' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
