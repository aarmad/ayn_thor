import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ayn Thor - Console Portable Double Écran',
  description: 'AYN Thor est une console portable de jeu exclusive à double écran avec processeur Snapdragon.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'antialiased text-dark bg-brand min-h-[100dvh] font-sans selection:bg-dark selection:text-primary'
        )}
      >
        <main className="p-0 sm:p-2 lg:p-4 pt-1 sm:pt-2 lg:pt-4 min-h-screen flex flex-col max-w-[1700px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
