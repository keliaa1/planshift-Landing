import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanShift",
  icons: "/Favicon.png",
  viewport: "width=device-width, initial-scale=1",
  description: "Your go-to destination for home visualization",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${playfair.variable} antialiased font-jost`}
      >
        {children}
      </body>
    </html>
  );
}
