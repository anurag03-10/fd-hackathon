import { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlide(index);
    }
  }, []);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <Navigation
        currentSlide={currentSlide}
        totalSlides={SLIDES.length}
        onSlideChange={handleSlideChange}
      />
      <div
        key={currentSlide}
        className="h-full w-full animate-fade-in"
      >
        <CurrentSlideComponent />
      </div>
    </div>
  );
}
