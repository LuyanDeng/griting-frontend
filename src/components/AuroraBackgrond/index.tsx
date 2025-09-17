import React from 'react';

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ children, className }) => {
  return (

    <div className={`relative isolate w-full bg-[#02041D] overflow-hidden ${className}`}>
      
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          backgroundImage: 'linear-gradient(180deg, #02041D 9.31%, #002366 95.61%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-[-1] opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(40% 40% at 20% 30%, rgba(32, 189, 211, 0.4), transparent),
            radial-gradient(30% 30% at 20% 80%, rgba(166, 83, 173, 0.3), transparent),
            radial-gradient(80% 80% at 80% 20%, rgba(82, 59, 197, 0.8), transparent),
            radial-gradient(50% 50% at 90% 85%, rgba(32, 189, 211, 0.5), transparent)
          `,
          backgroundRepeat: 'no-repeat',
          filter: 'blur(120px)', // This is the key to the soft, blurry effect
        }}
        aria-hidden="true"
      />

      {/* 
        Layer 3: Your actual page content.
        `z-10` ensures it's on top of the background layers.
        `flex flex-col items-center` mimics your original layout structure.
      */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
