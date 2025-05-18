'use client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContent from '../components/homepage/HomeContent';
import BlogPage from '../blog/page';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}