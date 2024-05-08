import type { Metadata } from "next";
import "./globals.css";
import { Vesper_Libre } from "next/font/google";

const vesperLibre = Vesper_Libre({ 
  weight: "400",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={vesperLibre.className}>{children}</body>
    </html>
  );
}
