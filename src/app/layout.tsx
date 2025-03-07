import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import Navbar from "../components/Navbar"; // Importar o Navbar
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"], // Especificar os pesos da fonte
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
