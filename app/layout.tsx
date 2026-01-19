import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import ScrollNavHandler from "./hooks/ScrollNavHandler";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactLenis } from "./utils/lenis";
import ToastProvider from "./components/ToastProvider";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const PlayfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HigherFeats Africa",
  description:
    "Our mission is to empower students, teachers, and educational institutions with the tools, resources, and support they need to succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${mulish.variable} ${PlayfairDisplay.variable}`}>
          <ScrollNavHandler />
          <Navbar />
          <div className="mt-16">{children}</div>
          <Footer />
          <ToastProvider />
        </body>
      </ReactLenis>
    </html>
  );
}
