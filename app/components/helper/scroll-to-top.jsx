'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (typeof window === 'undefined') return;
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white" />
    </button>
  );
}