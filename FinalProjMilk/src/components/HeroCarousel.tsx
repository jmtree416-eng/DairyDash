import { useEffect, useRef, useState } from "react";
import "./HeroCarousel.css";

export interface HeroSlide {
  tag: string;
  title: string;
  subtitle: string;
  photo?: string; // import a real photo later and set this field
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  intervalMs = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goTo(activeIndex - 1);
    else if (deltaX < -50) goTo(activeIndex + 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="hero-carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            {slide.photo ? (
              <img
                src={slide.photo}
                alt={slide.title}
                className="hero-slide-photo"
              />
            ) : (
              <div className="hero-slide-photo hero-slide-placeholder" />
            )}
            <div className="hero-slide-overlay">
              <p className="hero-slide-tag">{slide.tag}</p>
              <h2 className="hero-slide-title">{slide.title}</h2>
              <p className="hero-slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
