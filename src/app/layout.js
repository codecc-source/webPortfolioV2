import "./globals.css";
import Navbar from "./components/navBar"; 
import Head from "next/head";
import { Barlow_Condensed } from "next/font/google";
import GlowingCursor from "./components/customcursor";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-custom", 
}); //Fonts

export const metadata = {
  title: "Portfolio V2",
  description: "Website portfolio V2 using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="barlowCondensed.variable">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <body
      >
        <GlowingCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
