import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import ClientLayout from '../components/ClientLayout';
import LenisProvider from '@/components/LenisProvider';
import ContactOffcanvas from '@/components/ContactOffcanvas';
import PreloaderControl from '@/components/PreloaderControl';
import Image from 'next/image';
import StickySocial from '@/components/StickySocial';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Terrah.',
  description: 'Empowering Businesses with Innovative IT Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* ✅ Add favicon using your file */}
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body>
        {/* Preloader */}
        <div className="preloader">
          <div className="preloader-center">
            <Image
              src="/images/logo2.png"
              alt="Terrah logo"
              width={200}
              height={80}
              className="brand"
            />
          </div>
        </div>

        <StickySocial />
        <PreloaderControl />

        <LenisProvider>
          <ClientLayout>{children}</ClientLayout>
          <ContactOffcanvas />
        </LenisProvider>
      </body>
    </html>
  );
}
