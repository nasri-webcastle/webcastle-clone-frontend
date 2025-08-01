// src/app/layout.tsx

import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Montserrat } from 'next/font/google';
import CursorCircle from "@/app/components/CursorCircle"; // ✅ NEW


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});
export const metadata = {
  title: "WebCastle Clone",
  description: "Frontend clone using Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
          <CursorCircle /> {/* Add Cursor Circle */}        
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
