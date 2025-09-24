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
  title: "Intakesense - AI-Powered Recruitment Platform",
  description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment platform with full responsibility guarantee.",
  keywords: "AI recruitment, hiring platform, guaranteed placement, talent acquisition, recruitment automation",
  authors: [{ name: "Intakesense" }],
  creator: "Intakesense",
  publisher: "Intakesense",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Intakesense - AI-Powered Recruitment Platform",
    description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment with responsibility guarantee.",
    url: "https://intakesense.com",
    siteName: "Intakesense",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intakesense - AI-Powered Recruitment Platform",
    description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment with responsibility guarantee.",
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
