import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google"; // 1. Import Jost
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanShift",
  icons: "/Favicon.png",
  description: "Your go-to destination for home visualization",
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased font-jost`}
      >
        {children}
      </body>
    </html>
  );
}
