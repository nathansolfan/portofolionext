// app/layout.tsx

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You might need to add a <Head> component here for setting the title and meta tags */}
      </head>
      <body className={inter.className}>
        <Navbar /> {/* Include the Navbar here */}
        {children}
      </body>
    </html>
  );
}
