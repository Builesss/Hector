import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LoveTypewriter.css';

gsap.registerPlugin(ScrollTrigger);

export default function LoveTypewriter() {
  const textRef = useRef<HTMLDivElement>(null);
  
  const text = "Hoy celebro el día de tu nacimiento y el milagro de compartir mi vida contigo. Feliz cumpleaños a mi amor, la mujer que ilumina cada uno de mis días.";

  useGSAP(() => {
    if(!textRef.current) return;
    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.from(chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      duration: 0.1,
      stagger: 0.05,
      ease: 'none'
    });
  }, { scope: textRef });

  return (
    <section className="typewriter-section min-h-screen flex items-center justify-center">
      <div ref={textRef} className="typewriter-text text-center">
        {text.split('').map((char, index) => (
          <span key={index} className="char">{char}</span>
        ))}
        <span className="cursor">|</span>
      </div>
    </section>
  );
}
