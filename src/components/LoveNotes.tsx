import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './LoveNotes.css';

const NOTES = [
  "Eres el sol que ilumina mis mañanas y la paz de mis noches.",
  "Cada año a tu lado es el mejor año de mi vida.",
  "Admiro la mujer en la que te has convertido y todo lo que logras.",
  "Gracias por enseñarme lo que significa el amor verdadero.",
  "Que todos tus deseos se cumplan hoy, yo ya cumplí el mío al tenerte.",
  "Te volvería a elegir en esta vida y en mil vidas más."
];

export default function LoveNotes() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(!container.current) return;
    const notes = gsap.utils.toArray('.love-note');
    
    gsap.from(notes, {
      y: 50,
      opacity: 0,
      rotation: () => Math.random() * 20 - 10,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(1.5)'
    });
  }, { scope: container });

  return (
    <section ref={container} className="love-notes-section min-h-screen">
      <div className="text-center mb-10">
        <h2 className="section-title">Palabras Para Ti</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="notes-grid">
        {NOTES.map((note, idx) => (
          <div key={idx} className="love-note">
            <div className="pin"></div>
            <p>{note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
