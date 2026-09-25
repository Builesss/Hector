import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import './PhotoGallery.css';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: '/img/photo1.jpeg', caption: 'Nuestra primera aventura' },
  { src: '/img/photo2.jpeg', caption: 'Días inolvidables' },
  { src: '/img/photo3.jpeg', caption: 'Sonrisas compartidas' },
  { src: '/img/photo4.jpeg', caption: 'Un momento perfecto' },
  { src: '/img/photo5.jpeg', caption: 'Tú y yo' },
  { src: '/img/photo6.jpeg', caption: 'Magia pura' },
  { src: '/img/photo7.jpeg', caption: 'Esa mirada...' },
  { src: '/img/photo8.jpeg', caption: 'Siempre juntos' },
  { src: '/img/photo9.jpeg', caption: 'Nuestro rincón favorito' },
  { src: '/img/photo10.jpeg', caption: 'Luz de mi vida' },
  { src: '/img/photo11.jpeg', caption: 'Para siempre' },
  { src: '/img/photo12.jpeg', caption: 'Mi mayor tesoro' },
  { src: '/img/photo13.jpeg', caption: 'Eternamente' }
];

export default function PhotoGallery() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useGSAP(() => {
    if(!container.current) return;
    const photos = gsap.utils.toArray('.polaroid-frame');
    
    photos.forEach((photo: any) => {
      // Random rotation between -6 and 6 degrees for the polaroid effect
      const rotation = Math.random() * 12 - 6;
      
      gsap.fromTo(photo, 
        { y: 150, opacity: 0, scale: 0.8, rotation: rotation * 2 },
        {
          scrollTrigger: {
            trigger: photo,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: rotation,
          duration: 1.2,
          ease: 'back.out(1.5)'
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="gallery-section relative">
      {/* Decorative background elements */}
      <div className="deco-circle circle-1"></div>
      <div className="deco-circle circle-2"></div>

      <div className="gallery-header text-center">
        <h2 className="section-title">Nuestros Momentos</h2>
        <div className="title-underline"></div>
        <p className="gallery-subtitle">Cada fotografía es un pedacito de nuestro corazón congelado en el tiempo.</p>
      </div>

      <div className="gallery-grid">
        {IMAGES.map((item, idx) => (
          <div 
            key={idx} 
            className="polaroid-frame"
            onClick={() => setSelectedImage(item.src)}
          >
            <div className="polaroid-img-wrapper">
              <img src={item.src} alt={`Moment ${idx + 1}`} loading="lazy" />
              <div className="img-overlay">
                <span className="zoom-icon">♥</span>
              </div>
            </div>
            <div className="polaroid-caption">
              {item.caption}
            </div>
            {/* Tape decoration */}
            <div className="tape"></div>
          </div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close"><X size={40}/></button>
          <img src={selectedImage} alt="Zoomed moment" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
