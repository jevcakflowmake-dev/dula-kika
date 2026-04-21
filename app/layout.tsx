import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="cs" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
