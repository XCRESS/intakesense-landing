import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Intakesense - Hiring That Makes Sense",
  description: "Revolutionary recruitment platform that takes responsibility for keeping your positions filled. No more empty seats, just continuous intelligent talent acquisition.",
  keywords: "recruitment, hiring, talent acquisition, job portal, AI hiring, guaranteed placement",
  authors: [{ name: "Intakesense" }],
  creator: "Intakesense",
  publisher: "Intakesense",
  openGraph: {
    title: "Intakesense - Hiring That Makes Sense",
    description: "Revolutionary recruitment platform that takes responsibility for keeping your positions filled.",
    url: "https://intakesense.com",
    siteName: "Intakesense",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intakesense - Hiring That Makes Sense",
    description: "Revolutionary recruitment platform that takes responsibility for keeping your positions filled.",
    creator: "@intakesense",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0066FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <CursorFollower className="hidden lg:block" /> */}
        {children}
      </body>
    </html>
  );
}
