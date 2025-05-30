import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Badruk Group - Dubai Company Formation | Fast, Professional & Tax Optimized",
  description:
    "Professional Dubai company formation services. Fast setup in 24-48 hours with complete visa support. Tax-optimized business structures for international entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
