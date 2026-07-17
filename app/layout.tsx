import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/lib/aos";

const googleSans = Google_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna's Portfolio",
  description: "A portfolio website showcasing my work and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.className} h-full antialiased`}
    >
      <AOSProvider />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
