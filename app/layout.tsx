import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import { Viewport } from "next";
import "@/app/globals.css";
import LCARS from "./ui/lcars";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starfleet Database",
  description: "Subspace connection to the United Federation of Planet's Starfleet Database",
  icons: {
    icon: '/favicon.ico',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} antialiased`}
      >
        <LCARS>
          {children}
        </LCARS>
      </body >
    </html >
  );
}
