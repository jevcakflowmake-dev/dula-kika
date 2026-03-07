import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dula Kika | Moderní dula Praha",
    template: "%s | Dula Kika",
  },
  description: "Pomohu ti ke krásnějšímu zážitku z porodu, který budeš mít celý život. Moderní dula Kristýna Pokorná, Praha a Středočeský kraj.",
  keywords: ["dula", "porod", "Praha", "porodní dula", "Kika", "Kristýna Pokorná", "těhotenství", "poporodní péče"],
  openGraph: {
    title: "Dula Kika | Moderní dula Praha",
    description: "Pomohu ti ke krásnějšímu zážitku z porodu, který budeš mít celý život.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
