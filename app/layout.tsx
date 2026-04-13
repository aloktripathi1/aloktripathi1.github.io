import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { siteUrl, withBasePath } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = "G-F5K4GRR77Y";

export const metadata: Metadata = {
  title: {
    default: "Alok Tripathi",
    template: "%s | Alok Tripathi",
  },
  description: "crafting intelligence from chaos - data science and ml portfolio",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: withBasePath("/profile-pic.png"),
    apple: withBasePath("/profile-pic.png"),
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
        url: withBasePath("/opengraph-image.png"),
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
    images: [withBasePath("/opengraph-image.png")],
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
    <html lang="en" style={{ viewTransitionName: 'none' } as React.CSSProperties}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (prefers-reduced-motion: no-preference) {
              html {
                view-transition-name: none !important;
              }
            }
            * {
              view-transition-name: none !important;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
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
