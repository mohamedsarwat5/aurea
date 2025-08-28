import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Poppins } from 'next/font/google'
import Navbar from "./navbar/navbar";
import Footer from "./Footer/Footer";

const PoppinsFont = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700', '500', '600']
})

export const metadata = {
  title: "Auréa",
  description: "Auréa The Best Face Oil in The World",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`md:pt-[60px] bg-[#E7F1E9] pt-16   duration-200 transition-all font-poppins ${PoppinsFont.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
