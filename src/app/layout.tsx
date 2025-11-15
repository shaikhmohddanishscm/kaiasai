import type { Metadata } from "next";
import { nunito, nunitoSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ikai Asai",
  description: "Official ikai Asai website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
