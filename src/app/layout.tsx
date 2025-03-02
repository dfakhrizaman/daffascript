import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Lexend, Plus_Jakarta_Sans } from 'next/font/google';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/utils/theme';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daffa Fakhrizaman - Software Engineer',
  description:
    'Experienced Software Engineer specializing in web and mobile development.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
  keywords: [
    'Daffa Fakhrizaman',
    'Software Engineer',
    'Web Developer',
    'Mobile Developer',
    'Frontend Engineer',
    'Backend Engineer',
    'Next.js',
    'React',
  ],
  openGraph: {
    title: 'Daffa Fakhrizaman - Software Engineer',
    description:
      'Experienced Software Engineer specializing in web and mobile development.',
    url: 'https://daffascript.dev',
    siteName: 'Daffa Fakhrizaman',
    type: 'website',
    images: [
      {
        url: 'https://daffascript.dev/home/hero_landscape.png',
        width: 1200,
        height: 630,
        alt: 'Daffa Fakhrizaman - Software Engineer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#DBE3CE" />
        <meta name="author" content="Daffa Fakhrizaman" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Daffa Fakhrizaman',
              jobTitle: 'Software Engineer',
              url: 'https://daffascript.dev',
              sameAs: [
                'https://github.com/yourgithub',
                'https://linkedin.com/in/yourlinkedin',
                'https://twitter.com/yourtwitter',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${lexend.variable}`}
        style={{
          fontFamily:
            'var(--font-plus-jakarta-sans), var(--font-lexend), sans-serif',
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              component="main"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
