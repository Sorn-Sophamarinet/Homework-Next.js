"use client";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import localFont from "next/font/local";
import NavbarWrapper from "@/components/header/NavbarWrapper";
import { Providers } from "@/lib/Providers";

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
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ubuntu.variable} ${khmerFont.variable} antialiased`}>
        <Providers>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Loading />}>
              <NavbarWrapper />
              {children}
            </Suspense>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
