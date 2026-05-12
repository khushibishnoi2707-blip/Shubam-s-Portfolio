import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/layout/page-transition";
import { Providers } from "@/components/layout/providers";
import { profile } from "@/data";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI/ML Portfolio`,
    template: `%s | ${profile.name}`
  },
  description:
    "Portfolio of Shubham Gupta, a final-year Computer Science student specializing in Data Science, AI/ML, LLM engineering, RAG systems, and analytics applications.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${profile.name} | AI/ML Portfolio`,
    description:
      "AI/ML, LLM engineering, RAG, deep learning, analytics, and product-grade interfaces.",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI/ML Portfolio`,
    description: "AI/ML engineer in training building intelligent, data-driven systems.",
    images: ["/og"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
