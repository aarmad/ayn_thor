import type { Metadata } from 'next';
import { Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

const display = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['500', '700', '900'],
});

const mono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ayn Thor - Console Portable Double Écran',
  description: 'AYN Thor est une console portable de jeu exclusive à double écran avec processeur Snapdragon.',
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
          display.variable,
          mono.variable,
          'antialiased text-ink bg-void min-h-[100dvh] font-mono cyber-grid'
        )}
      >
        <main className="p-0 sm:p-2 lg:p-4 min-h-screen flex flex-col max-w-[1700px] mx-auto select-none overflow-x-hidden">
          {/* HUD status bar */}
          <div className="hud-bar flex items-center justify-between gap-4 px-4 md:px-8 py-2 text-mono-xs text-brand/80">
            <span className="truncate">◢ AYN//THOR_OS <span className="text-accent">v2.6</span></span>
            <span className="hidden md:inline text-ink/40">LINK: SECURE · NODE: FR-PAR · LATENCY 08MS</span>
            <span className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-acid animate-pulse" /> ONLINE<span className="cursor-blink">_</span>
            </span>
          </div>

          <div className="cyber-frame w-full flex-1 bg-surface relative overflow-hidden flex flex-col font-mono">
            {children}
          </div>
        </main>
        <Toaster
          toastOptions={{
            style: {
              background: '#101722',
              color: '#d6f6ff',
              border: '1px solid rgba(0,240,255,0.4)',
              borderRadius: '2px',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '0.75rem',
            },
          }}
        />
      </body>
    </html>
  );
}
