import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guli Ahmedova | Portfolio",
  description: "Created By Guli Ahmedova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextThemesProvider attribute="class" defaultTheme="dark"> */}
          {children}
        {/* </NextThemesProvider> */}
      </body>
    </html>
  );
}
