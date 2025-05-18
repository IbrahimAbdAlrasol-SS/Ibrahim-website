'use client';

import dynamic from 'next/dynamic';

// Dynamic import للمكونات التي تستخدم مكتبات تابعة للعميل
const HomeContent = dynamic(() => import('./components/homepage/HomeContent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return <HomeContent />;
}