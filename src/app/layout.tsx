import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MovingBorder from "@/components/Animation/MovingBorder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F.R.O.N.T.",
  description: "Handbook for front-end development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MovingBorder>
          <Header/>
          <main>{children}</main>
        </MovingBorder>
      </body>
    </html>
  );
}
