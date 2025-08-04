import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'OITOMI - Traditional Japanese Crafts',
  description: '日本の伝統工芸品を世界へ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-serif">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}