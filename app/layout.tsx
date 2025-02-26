import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const IBMPlexMono = localFont({ src: '../public/fonts/IBM_Plex_Mono/IBMPlexMono-Medium.ttf' })
const pressStartToPlay = localFont({ src: '../public/fonts/Press_Start_2P/PressStart2P-Regular.ttf' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  return (
    <html lang="en">
      <body className={`${IBMPlexMono.className} antialiased text-glitch text-glitch-duration-slow`}>
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-black text-white z-10">
          <div className="text-xl font-bold">
            <a href="/">My Blog</a>
          </div>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </nav>
        <div className="h-screen bg-anime bg-center">
          {children}
        </div>
      </body>
    </html>
  );
}
