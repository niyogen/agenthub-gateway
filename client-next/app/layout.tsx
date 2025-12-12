import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalError from "./GlobalError";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FastGraph Client",
  description: "FastGraph Dynamic UI Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GlobalError>
          {children}
        </GlobalError>
      </body>
    </html>
  );
}
