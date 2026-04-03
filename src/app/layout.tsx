import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-portfolio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taylor — Engineering & full-stack development",
  description:
    "Portfolio and consulting-style showcase: legacy modernisation, greenfield builds, and full-stack delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07080c] font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}
