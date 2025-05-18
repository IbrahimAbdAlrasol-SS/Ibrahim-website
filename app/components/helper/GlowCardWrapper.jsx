// components/helper/GlowCardWrapper.jsx
"use client";
import dynamic from 'next/dynamic';

const GlowCard = dynamic(
  () => import('./glow-card'), // ✅ تأكد من المسار الصحيح
  { 
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center">
      Loading...
    </div> // يمكنك تخصيص مكون التحميل هنا
  }
);

const GlowCardWrapper = ({ children, identifier}) => {
  return (
    <div>


    
      {children}



    </div>
  );
};

export default GlowCardWrapper;