import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

import { ThemeProvider } from './_components/theme-provider';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Hudson Sena',
  description: 'Landing Page de teste para outras landing pages. O principal intuito nesse projeto, é criar uma landing page base usando Next e Tailwind como forma de estudo dos mesmos, e com isso, facilitar a criação de outras landing pages futuras.',
  keywords: [
    'Nexts.js',
    'Next.js 14',
    'React.js',
    'Hudson Sena',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS'
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialised',
        fontSans.variable,
        fontHeading.variable,
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
