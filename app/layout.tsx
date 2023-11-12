import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ReactNode } from "react"; // Import ReactNode type

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode; // Use ReactNode type for the children prop
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={rubik.className}>
      <header>
        {/* Add header content here */}
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}
