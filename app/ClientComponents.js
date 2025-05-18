'use client';

import { ToastContainer } from 'react-toastify';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/helper/scroll-to-top';

const GoogleTagManager = dynamic(
  () => import('@next/third-parties/google').then((mod) => mod.GoogleTagManager),
  { ssr: false }
);

export default function ClientComponents() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </>
  );
}