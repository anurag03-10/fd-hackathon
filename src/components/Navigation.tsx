import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_LABELS = [
  'Overview',
  'The Problem',
  'The Solution',
  'How It Works',
  'Benefits',
];

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export default function Navigation({ currentSlide, totalSlides, onSlideChange }: NavigationProps) {
  const [showThumbnails, setShowThumbnails] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        onSlideChange(Math.min(currentSlide + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        onSlideChange(Math.max(currentSlide - 1, 0));
      } else if (e.key === ' ') {
        e.preventDefault();
        onSlideChange(Math.min(currentSlide + 1, totalSlides - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, onSlideChange]);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/50">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            background: 'linear-gradient(90deg, #DB0011, #FF1A2E, #C4A000)',
          }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-8 z-50 flex items-center gap-3">
        <button
          onClick={() => setShowThumbnails(!showThumbnails)}
          className="text-hsbc-gray-300 hover:text-white text-sm font-medium transition-colors"
        >
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </button>
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => onSlideChange(Math.max(currentSlide - 1, 0))}
        disabled={currentSlide === 0}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-hsbc-gray-300 hover:text-white hover:border-hsbc-red/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => onSlideChange(Math.min(currentSlide + 1, totalSlides - 1))}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-hsbc-gray-300 hover:text-white hover:border-hsbc-red/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSlideChange(i)}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-8 h-2 bg-hsbc-red'
                  : 'w-2 h-2 bg-hsbc-gray-500 hover:bg-hsbc-gray-300'
              }`}
            />
            <span
              className={`text-[10px] font-medium transition-opacity duration-300 ${
                i === currentSlide
                  ? 'opacity-100 text-hsbc-gray-200'
                  : 'opacity-0 group-hover:opacity-60 text-hsbc-gray-400'
              }`}
            >
              {SLIDE_LABELS[i]}
            </span>
          </button>
        ))}
      </div>

      {/* Thumbnail overlay */}
      {showThumbnails && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowThumbnails(false)}
        >
          <div className="grid grid-cols-5 gap-4 p-8" onClick={(e) => e.stopPropagation()}>
            {SLIDE_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => {
                  onSlideChange(i);
                  setShowThumbnails(false);
                }}
                className={`rounded-xl p-6 flex flex-col items-center justify-center min-w-[140px] min-h-[90px] transition-all duration-200 ${
                  i === currentSlide
                    ? 'bg-hsbc-red/20 border border-hsbc-red/40'
                    : 'glass-card hover:bg-white/[0.08]'
                }`}
              >
                <span className="text-2xl font-bold text-hsbc-gray-200">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs text-hsbc-gray-400 mt-1">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
