import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import '../globals.css';

import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import { Toaster } from 'sonner';
import AuthProvider from '@/context/AuthProvider'; // Adjust import path if needed

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'True Feedback',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster position="top-right" richColors />
        </body>
      </AuthProvider>
    </html>
  );
}