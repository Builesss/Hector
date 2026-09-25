import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5
    })
    .from(subTextRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="hero min-h-screen flex items-center justify-center relative">
      <div className="hero-content text-center">
        <h1 ref={textRef} className="hero-title">¡Feliz Cumpleaños, Mi Amor!</h1>
        <p ref={subTextRef} className="hero-subtitle">Celebrando tu vida y el maravilloso regalo que eres para mí...</p>
      </div>
      <div className="hero-scroll-indicator">
        <span>Descubre</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
