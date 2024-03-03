import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>
            <Header />
            <Navbar />
            {/* {children} */}
          </main>
        </Providers>
      </body>
    </html>
  );
}
