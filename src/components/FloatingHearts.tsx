import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './FloatingHearts.css';

export default function FloatingHearts() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    const hearts = container.current.querySelectorAll('.heart');
    
    hearts.forEach((heart) => {
      gsap.set(heart, {
        x: 'random(0, 100vw)',
        y: '100vh',
        opacity: 0,
        scale: 'random(0.5, 1.5)'
      });

      gsap.to(heart, {
        y: '-20vh',
        x: '+=random(-50, 50)',
        opacity: 'random(0.3, 0.8)',
        rotation: 'random(-45, 45)',
        duration: 'random(10, 20)',
        repeat: -1,
        ease: 'none',
        delay: 'random(0, 10)'
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="floating-hearts-container">
      {Array.from({ length: 30 }).map((_, i) => (
        <svg key={i} className="heart" viewBox="0 0 32 29.6" width="32" height="30">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="var(--primary)"/>
        </svg>
      ))}
    </div>
  );
}
