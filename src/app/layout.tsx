import type { Metadata } from "next";
import "./globals.css";
import SimpleNavigation from "@/components/SimpleNavigation";
import Footer from "@/components/Footer";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Concept Site",
  description: "A minimal Next.js site with Japanese aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <SimpleNavigation />
        {children}
        <Footer />
        <RecaptchaProvider />
      </body>
    </html>
  );
}