import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";

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
  title: {
    default: "Intakesense - AI-Powered Recruitment Platform",
    template: "%s | Intakesense"
  },
  description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment platform with full responsibility guarantee. Transform your hiring process with intelligent candidate matching and automated workflows.",
  keywords: [
    "AI recruitment",
    "hiring platform",
    "guaranteed placement",
    "talent acquisition",
    "recruitment automation",
    "candidate matching",
    "HR technology",
    "recruitment guarantee",
    "AI hiring",
    "recruitment software",
    "placement services",
    "hiring solution"
  ],
  authors: [{ name: "Intakesense", url: "https://intakesense.com" }],
  creator: "Intakesense",
  publisher: "Intakesense",
  metadataBase: new URL("https://intakesense.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en": "/en"
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Intakesense - AI-Powered Recruitment Platform",
    description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment with full responsibility guarantee.",
    url: "https://intakesense.com",
    siteName: "Intakesense",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/logo.png',
        secureUrl: 'https://intakesense.com/logo.png',
        // Remove incorrect dimensions - let WhatsApp detect actual size
        alt: 'Intakesense - AI-Powered Recruitment Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@intakesense",
    creator: "@intakesense",
    title: "Intakesense - AI-Powered Recruitment Platform",
    description: "Guaranteed placements in 12 days or it's free. AI-powered recruitment with responsibility guarantee.",
    images: [
      {
        url: '/logo.png',
        alt: 'Intakesense - AI-Powered Recruitment Platform',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Recruitment Technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-site-verification-code',
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
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
