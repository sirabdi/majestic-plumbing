import type { Metadata } from "next";
import "./globals.css";
import { gilmerHeavy } from "@/src/utils/fonts";
import { Footer, Header } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Majestic Plumbing",
  description:
    "Experience peace of mind with Majestic Plumbing’s tailored Planned Preventative Maintenance solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilmerHeavy.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
