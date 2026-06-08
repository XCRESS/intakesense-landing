import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Intakesense — Talent Acquisition, Guaranteed",
    template: "%s | Intakesense",
  },
  description:
    "India's only recruitment platform with a 12-day delivery and 90-day performance guarantee. AI-powered talent acquisition with ₹0 upfront — you only pay when it works.",
  keywords: [
    "recruitment India",
    "talent acquisition India",
    "guaranteed placement",
    "AI recruitment platform",
    "hire candidates India",
    "HR technology India",
    "recruitment guarantee",
    "performance-based hiring",
    "top recruitment agency India",
    "placement services",
  ],
  authors: [{ name: "Intakesense", url: "https://intakesense.com" }],
  creator: "Intakesense",
  publisher: "Intakesense",
  metadataBase: new URL("https://intakesense.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Intakesense — Talent Acquisition, Guaranteed",
    description:
      "India's only recruitment platform with a 12-day delivery and 90-day performance guarantee.",
    url: "https://intakesense.com",
    siteName: "Intakesense",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "Intakesense — Talent Acquisition, Guaranteed",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@intakesense",
    creator: "@intakesense",
    title: "Intakesense — Talent Acquisition, Guaranteed",
    description:
      "India's only recruitment platform with a 12-day delivery and 90-day performance guarantee.",
    images: [{ url: "/logo.png", alt: "Intakesense" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Recruitment Technology",
};

export const viewport: Viewport = {
  themeColor: "#178fbf",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
