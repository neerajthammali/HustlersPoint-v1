import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { FirebaseClientProvider } from '@/firebase/client-provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://neerajthammmali.vercel.app'),
  title: {
    default: 'HustlersPo!nt - Publish Your Ideas. Build Your Future.',
    template: '%s | HustlersPo!nt',
  },
  description: 'A creator platform for writers, founders, and learners to share powerful insights and grow an audience.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'HustlersPo!nt',
    description: 'A creator platform for writers, founders, and learners to share powerful insights and grow an audience.',
    type: 'website',
    locale: 'en_US',
    url: 'https://neerajthammmali.vercel.app',
    siteName: 'HustlersPo!nt',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', montserrat.variable, poppins.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </FirebaseClientProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
