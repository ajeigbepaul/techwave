import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "swiper/swiper-bundle.css";
import { Bricolage_Grotesque } from "next/font/google";
import { register } from "swiper/element/bundle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const secondaryFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
  adjustFontFallback: false,
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  register();
  return (
    <html lang="en">
      <body
        className={`${secondaryFont.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gray-50`}
      >
        {/* Header */}
        <header className="h-[14vh]">
          <Header />
        </header>

        {/* Main content - use flex-grow to allow it to grow and fill the remaining space */}
        <main className="flex-grow w-full">{children}</main>

        {/* Footer */}
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
