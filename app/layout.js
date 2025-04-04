import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta property="og:title" content="Mahjoubi Bilel - Portfolio Enseignant Informatique" />
  <meta property="og:description" content="Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques." />
  <meta property="og:image" content="/assets/photo.png" />
  <meta property="og:url" content="https://prof-info.vercel.app" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mahjoubi Bilel - Portfolio Enseignant Informatique" />
  <meta name="twitter:description" content="Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques." />
  <meta name="twitter:image" content="/assets/photo.png" />
  {/* Ajoutez d'autres métadonnées facebook, linkedin, etc. ici */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/assets/icon.ico" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="canonical" href="https://prof-info.vercel.app" />  

      </head>  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}