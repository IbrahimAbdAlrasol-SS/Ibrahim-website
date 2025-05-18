'use client'; // أضف هذا السطر في الأعلى

import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// Dynamic Import للمكونات التي تحتاج إلى window/document
const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

const ClientComponents = dynamic(
  () => import('./ClientComponents'),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio of Ibrahim Abdulrasool - Software Developer</title>
        <meta 
          name="description" 
          content="This is the portfolio of Ibrahim Abdulrasool, a passionate and versatile software developer with a strong focus on mobile app development, desktop platforms, and Telegram bot automation." 
        />
      </Head>
      
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ClientComponents />
          <ToastContainer />
        </main>
        <Footer />
      </body>
    </html>
  );
}