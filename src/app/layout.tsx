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
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  variable: '--font-lexend',
});
export const metadata: Metadata = {
  title: 'Daffa F',
  description: 'Software Engineer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${lexend.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
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
