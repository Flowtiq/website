import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VersionProvider } from "@/lib/VersionContext";
import { ClientOnly } from "@/components/ui/ClientOnly";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FlowTIQ",
    template: "%s — FlowTIQ",
  },
  description: "Verlos medewerkers van onnodige administratieve lasten",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <VersionProvider>
          <ClientOnly fallback={<div className="h-20" />}>
            <Navbar />
          </ClientOnly>
          <main className="flex-grow pt-20">
            <ClientOnly>
              {children}
            </ClientOnly>
          </main>
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </VersionProvider>
      </body>
    </html>
  );
}
