import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, Arima_Madurai } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/motion/CursorGlow";
import MainLayout from "@/components/layout/MainLayout";
import LenisProvider from "@/components/motion/LenisProvider";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const arimaMadurai = Arima_Madurai({
  subsets: ["latin", "tamil"],
  variable: "--font-arima-madurai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluency | Premium English Learning",
  description: "Cinematic English learning platform for global communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} ${manrope.variable} ${arimaMadurai.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <LenisProvider>
          <CursorGlow />
          <MainLayout>{children}</MainLayout>
        </LenisProvider>
      </body>
    </html>
  );
}
