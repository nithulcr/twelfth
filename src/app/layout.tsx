import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import ClientLayout from '../components/ClientLayout';
import LenisProvider from '@/components/LenisProvider';
import ContactOffcanvas from '@/components/ContactOffcanvas';
import PreloaderControl from '@/components/PreloaderControl';
import Image from 'next/image';


import BlobCursor from '@/components/BlobCursor';


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Nitfolio',
  description: 'Frontend Developer & UI Animator',
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
        <link href="https://fonts.cdnfonts.com/css/dirtyline-36daysoftype-2022" rel="stylesheet" />
      </head>
      <body>
        <BlobCursor />
        {/* Preloader */}
        <div className="preloader">
          <div className="preloader-center">
            <Image
              src="/images/logo.webp"
              alt="Terrah logo"
              width={300}
              height={80}
              className="brand"
            />
          </div>
        </div>

        {/* <StickySocial /> */}
        <PreloaderControl />

        <LenisProvider>
          <ClientLayout>{children}</ClientLayout>
          <ContactOffcanvas />
        </LenisProvider>
      </body>
    </html>
  );
}
