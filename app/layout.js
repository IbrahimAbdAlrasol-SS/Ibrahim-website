import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";

import ClientComponents from "./ClientComponents";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ibrahim Abdulrasool - Software Developer",
  description:
    "This is the portfolio of Ibrahim Abdulrasool , a passionate and versatile software developer with a strong focus on mobile app development, desktop platforms, and Telegram bot automation. With solid experience in technologies like Flutter, Dart, Python, .NET, C++, C#, and Java, I build efficient and user-friendly applications that bridge functionality with performance.I specialize in building smart solutions powered by Firebase, MySQL, and Git version control. Currently, my main interest lies in crafting intelligent bots, automating workflows, and developing robust cross-platform mobile applications..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ClientComponents />
        </main>
        <Footer />
      </body>

    </html>
  );
  
}