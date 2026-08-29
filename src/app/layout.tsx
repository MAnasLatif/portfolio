import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SpaceBackground } from "@/components/space-background";

import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "M. Anas Latif",
  description: "Software engineer, product builder, and UX designer.",
  applicationName: "M. Anas Latif Portfolio",
  icons: {
    icon: [
      { url: "/mal.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${ubuntuMono.variable}`}>
        <Providers>
          <div className="relative isolate min-h-svh overflow-x-hidden bg-[#03050a] text-white">
            <SpaceBackground />
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
