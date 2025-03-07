import "./globals.css";
import Navbar from "./components/navBar"; 
import { Barlow_Condensed } from "next/font/google";
import GlowingCursor from "./components/customcursor";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-custom", 
}); // Fonts

export const metadata = {
  title: "Portfolio V2",
  description: "Website portfolio V2 using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlowCondensed.variable}>
      <body>
        <GlowingCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
