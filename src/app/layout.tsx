'use client'
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import localFont from "next/font/local";
import NavbarWrapper from "@/components/header/NavbarWrapper";
import { Provider } from "react-redux";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/product";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const myFont = localFont({
  src: "../../public/fonts/Howdybun.otf",
  variable: "--font-howdybun",
  display: "swap",
});
export const khmerFont = localFont({
  src: "../../public/fonts/Moul-Regular.ttf",
  variable: "--font-khmer",
  display: "swap",
});
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ubuntu.variable} ${khmerFont.variable} antialiased`}>
        <Provider>
          <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>
          <NavbarWrapper />
            {children}
          </Suspense>
        </ErrorBoundary>
        </Provider>
      </body>
    </html>
  );
}