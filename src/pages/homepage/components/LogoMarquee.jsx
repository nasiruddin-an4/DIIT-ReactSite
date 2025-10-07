import React from 'react';

const logos = [
  'https://www.diit.edu.bd/media/family/df2x_S6PagKR.png',
  'https://www.diit.edu.bd/media/family/DIC2x_kUQhuxG.png',
  'https://www.diit.edu.bd/media/family/diu2x_ykI8NsR.png',
  'https://www.diit.edu.bd/media/family/dc2x_vwb5r3W.png',
  'https://www.diit.edu.bd/media/family/DIA2x_4HFFFBj.png',
];

export default function LogoMarquee({ duration = 20, height = 56 }) {
  // Duplicate logos multiple times for truly seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8 max-w-7xl mx-auto">
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 4));
          }
        }
        
        .animate-scroll {
          animation: scroll ${duration}s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>

      <div className="relative py-5">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="animate-scroll">
          {duplicatedLogos.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 px-2 mx-4"
              style={{ height: `${height}px` }}
            >
              <img
                src={src}
                alt={`Logo ${(i % logos.length) + 1}`}
                className="max-h-full w-auto object-contain transition-all duration-300"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
