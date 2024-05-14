import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./component/header";
import "./globals.css";
import Provider from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Books",
  description: "Book Review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Header/>      
        {children}
        </Provider>
        </body>
    </html>
  );
}
