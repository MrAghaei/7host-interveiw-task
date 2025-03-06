import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/(Components)/BootstrapClient";

const publicSans = Public_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://7hostinterviewtask.vercel.app"),
  keywords: ["task management", "task", "currency"],
  title: {
    default: "7Host Interview Task",
    template: `%s | 7Host Interview Task`,
  },
  openGraph: {
    description: "A project for 7 host interview task",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} `}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
