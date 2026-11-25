import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter is the typeface of the GlassOS desktop itself, so the page and its screenshots read as one.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GlassOS: a Linux desktop made of glass",
  description:
    "GlassOS is Debian 13 with a desktop where every window, menu and bar is frosted glass. Free download for PCs and ARM computers.",
  applicationName: "GlassOS",
  openGraph: {
    title: "GlassOS",
    description: "A Linux desktop made of glass.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f15",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
