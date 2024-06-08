import type { Metadata } from "next";
import "./globals.css";
import { Vesper_Libre } from "next/font/google";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTop from "@/components/layout/footer/scrollToTop/ScrollToTop";
import Navbar from "@/components/layout/navbar/Navbar";

const vesperLibre = Vesper_Libre({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ferdev",
  description: "o site de portfólio de ferdev",
  creator: "Fernando Freitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={vesperLibre.className}>
        <div className="container">
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
