import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { personalInfo } from '@/lib/data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://saqibb.dev'),
  title: {
    default: `${personalInfo.name} — ${personalInfo.tagline}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'Saqib Ali Butt',
    'Software Engineer',
    'AI',
    'Machine Learning',
    'Data Science',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'Python',
    'Portfolio',
  ],
  authors: [{ name: personalInfo.name, url: 'https://saqibb.dev' }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saqibb.dev',
    siteName: personalInfo.name,
    title: `${personalInfo.name} — ${personalInfo.tagline}`,
    description: personalInfo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ${personalInfo.tagline}`,
    description: personalInfo.description,
    creator: '@Saqibbdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
