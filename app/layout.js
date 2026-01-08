
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import {GoogleAnalytics} from "@next/third-parties/google";



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


export const metadata = {
  title: "Mahjoubi Bilel - Portfolio Enseignant Informatique",
  description: "Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques.",
  keywords: "Mahjoubi Bilel, portfolio, enseignant informatique, scratch, AppInventor, Microbit, projets éducatifs",
  author: "Mahjoubi Bilel",
  icons: {
    icon: "/assets/icon.ico",
    shortcut: "/assets/icon.ico",
    apple: "/assets/icon.ico",
  },
  manifest: "/manifest.json",
  robots: "index, follow",
  openGraph: {
    title: "Mahjoubi Bilel - Portfolio Enseignant Informatique",
    description: "Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques.",
    url: "https://prof-info.vercel.app",
    siteName: "Mahjoubi Bilel",
    images: [
      {
        url: "/assets/photo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahjoubi Bilel - Portfolio Enseignant Informatique",
    description: "Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques.",
    images: ["/assets/photo.png"],
    site: "@MahjoubiBilel",
    creator: "@MahjoubiBilel",
  },
  alternates: {
    canonical: "https://prof-info.vercel.app",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "google": "nositelink",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mahjoubi Bilel",
              "url": "https://prof-info.vercel.app/",
            }),
          }}
        />
        <Header />
        <StairTransition />
        <PageTransition>
          {children} 
           <GoogleAnalytics gaId="G-YTT7VFLWN2" />  
        </PageTransition>
      </body>
    </html>
  );
}