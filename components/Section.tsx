import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  background?: 'base' | 'white' | 'cream' | 'warm';
  decoration?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  background = 'base', 
  decoration = false,
  children 
}) => {
  const bgColors = {
    base: 'bg-[#fffbf7]',
    white: 'bg-white',
    cream: 'bg-gradient-to-b from-[#fff7ed] to-[#fffbf7]', // Light Orange/Cream
    warm: 'bg-gradient-to-b from-[#f5f0eb] to-[#fffbf7]', // Beige
  };

  return (
    <section id={id} className={`relative py-24 md:py-36 px-4 md:px-6 overflow-hidden ${bgColors[background]} ${className}`}>
      {decoration && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Organic Blobs - Warm Tones */}
            <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-primary-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob" />
            <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-warm-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-primary-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000" />
          </div>
        </>
      )}
      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};