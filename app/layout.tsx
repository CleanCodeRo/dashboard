import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servicii Funerare Prezentare",
  description: "Prezentare servicii funerare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
