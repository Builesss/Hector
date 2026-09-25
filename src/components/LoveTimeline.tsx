import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LoveTimeline.css';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { date: "El primer cruce de miradas", desc: "Cuando nuestros ojos se encontraron y supe que eras tú." },
  { date: "El día que dijiste 'Sí'", desc: "El comienzo de nuestra más grande y hermosa aventura." },
  { date: "Nuestra boda", desc: "Cuando sellamos nuestro amor y te convertiste en mi esposa." },
  { date: "Tu Cumpleaños Hoy", desc: "Un año más de vida, de magia y de amarte con toda mi alma. ¡Feliz día!" }
];

export default function LoveTimeline() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if(!container.current) return;
    const items = container.current.querySelectorAll('.timeline-item');
    
    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    });

    const line = container.current.querySelector('.timeline-line');
    gsap.fromTo(line, 
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="timeline-section relative">
      <div className="timeline-line-bg"></div>
      <div className="timeline-line"></div>
      
      <div className="timeline-container">
        {milestones.map((ms, i) => (
          <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{ms.date}</h3>
              <p>{ms.desc}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
