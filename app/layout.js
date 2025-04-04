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
  title: "Mahjoubi Bilel",
  description: "Portfolio de l'enseignant d'informatique",
  icons: {
    icon: [
      { rel: "icon", url: "/assets/icon.ico", sizes: "256x256" },
      { rel: "icon", url: "/assets/iconlarge.png", sizes: "256x256" },
    ],
    shortcut: "/assets/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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