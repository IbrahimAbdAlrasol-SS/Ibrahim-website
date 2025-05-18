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

const GlowCardWrapper = ({ children, identifier , childr}) => {
  return (
    <div>


       // مفروض المشكله هنا حاول تحلها , باختصار شيل ssr 
       // ولا تخليها تضرب الصفحه
      <GlowCard identifier= {identifier}>
        {childr}
      </GlowCard>
      {children}



    </div>
  );
};

export default GlowCardWrapper;