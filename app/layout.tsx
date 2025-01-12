import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArmenian = Noto_Sans_Armenian({
  variable: "--font-Noto_Sans_Armenian",
  subsets: ['armenian'],
});

export const metadata: Metadata = {
  title: "Immun",
  description: "Immun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${notoSansArmenian} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
