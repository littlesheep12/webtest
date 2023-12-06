import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "PowerAI",
  authors: [
    { name: "PowerAI", url: "#" },
  ],
  description: "powerai-website",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="container lg:px-28 flex-grow flex flex-col justify-center items-center">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}