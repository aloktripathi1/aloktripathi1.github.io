import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aloktripathi.com"; // Update this with your actual domain
const GA_MEASUREMENT_ID = "G-0TGDV4RME6";

export const metadata: Metadata = {
  title: {
    default: "Alok Tripathi",
    template: "%s | Alok Tripathi",
  },
  description: "crafting intelligence from chaos - data science and ml portfolio",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/profile-pic.jpeg",
    apple: "/profile-pic.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Alok Tripathi",
    title: "Alok Tripathi",
    description: "crafting intelligence from chaos - data science and ml portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alok Tripathi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok Tripathi",
    description: "crafting intelligence from chaos - data science and ml portfolio",
    images: ["/opengraph-image"],
    creator: "@im_aloktripathi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-6 py-10 min-h-screen flex flex-col`}
      >
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <header>
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
