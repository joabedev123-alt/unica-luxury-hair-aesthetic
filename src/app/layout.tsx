import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Única Luxury Hair & Aesthetic | Hair and Beauty in Guyana',
    template: '%s | Única Luxury Hair & Aesthetic',
  },
  description:
    'Discover personalized hair extensions, brow, permanent makeup, aesthetic and barber services at Única Luxury Hair & Aesthetic in Georgetown, Guyana.',
  keywords: [
    'Luxury hair salon Guyana',
    'Hair extensions Guyana',
    'Mega hair Guyana',
    'Hair extension specialist Georgetown Guyana',
    'Beauty salon Georgetown Guyana',
    'Microblading Guyana',
    'Permanent makeup Guyana',
    'Brow services Guyana',
    'Lip blush Guyana',
    'Barber services Lusignan',
    'Hair salon East Coast Demerara',
    'Única Luxury Hair & Aesthetic',
    'Chay Castelo',
    'Mega Hair Tela Technique',
  ],
  authors: [{ name: 'Chay Castelo' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unicaguyana.com',
    title: 'Única Luxury Hair & Aesthetic | Hair and Beauty in Guyana',
    description:
      'Discover personalized hair extensions, brow, permanent makeup, aesthetic and barber services at Única Luxury Hair & Aesthetic in Georgetown, Guyana.',
    siteName: 'Única Luxury Hair & Aesthetic',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'Única Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Única Luxury Hair & Aesthetic | Guyana',
    description:
      'Personalized hair extensions, brows, permanent makeup and barber services by Chay Castelo.',
    images: ['/images/logo.jpeg'],
  },
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#050505] text-[#F4EFE6] min-h-screen flex flex-col font-sans selection:bg-[#C9A14A] selection:text-[#050505]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
