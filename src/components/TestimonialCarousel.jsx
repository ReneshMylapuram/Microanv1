import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/testimonials.js';

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [hidden, setHidden] = useState(() => document.hidden);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const touchStart = useRef(null);
  const rotating = !hovered && !focused && !paused && !touching && !hidden && !reducedMotion;
  const move = (direction) => setActive((index) => (index + direction + testimonials.length) % testimonials.length);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return undefined;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % testimonials.length), 7000);
    return () => window.clearTimeout(timer);
  }, [active, rotating]);

  return (
    <div
      className="quote-panel testimonial-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Business testimonials"
      tabIndex={0}
      data-reveal
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}
    >
      <div className="testimonial-heading">
        <p>Testimonials</p>
        <button
          type="button"
          className="carousel-control carousel-play"
          aria-label={reducedMotion ? 'Automatic rotation disabled for reduced motion' : paused ? 'Resume automatic rotation' : 'Pause automatic rotation'}
          disabled={reducedMotion}
          onClick={() => setPaused((value) => !value)}
        >
          {reducedMotion ? 'Manual' : paused ? 'Play' : 'Pause'}
        </button>
      </div>
      <div
        className="testimonial-slides"
        aria-live={rotating ? 'off' : 'polite'}
        aria-atomic="true"
        onPointerDown={(event) => {
          if (event.pointerType !== 'touch') return;
          touchStart.current = { x: event.clientX, y: event.clientY };
          setTouching(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          const start = touchStart.current;
          if (start) {
            const dx = event.clientX - start.x;
            const dy = event.clientY - start.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
          }
          touchStart.current = null;
          setTouching(false);
        }}
        onPointerCancel={() => { touchStart.current = null; setTouching(false); }}
      >
        {testimonials.map((testimonial, index) => (
          <figure
            className={`testimonial-slide${index === active ? ' is-active' : ''}`}
            key={testimonial.business}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${testimonials.length}: ${testimonial.business}`}
            aria-hidden={index !== active}
          >
            {testimonial.quote ? <blockquote>“{testimonial.quote}”</blockquote> : (
              <p className="testimonial-pending">A business story will appear here once an approved testimonial is available.</p>
            )}
            <figcaption>
              <strong>{testimonial.business}</strong>
              {testimonial.quote
                ? testimonial.attribution && <span>{testimonial.attribution}</span>
                : <span>Testimonial pending</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel-navigation">
        <button type="button" className="carousel-control" aria-label="Previous testimonial" onClick={() => move(-1)}><span aria-hidden="true">←</span></button>
        <div className="carousel-indicators" role="group" aria-label="Choose a testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className="carousel-indicator"
              key={testimonial.business}
              aria-label={`Show ${testimonial.business} testimonial`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
            ><span /></button>
          ))}
        </div>
        <button type="button" className="carousel-control" aria-label="Next testimonial" onClick={() => move(1)}><span aria-hidden="true">→</span></button>
      </div>
    </div>
  );
}
