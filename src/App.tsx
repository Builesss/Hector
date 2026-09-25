import { Suspense, lazy, useEffect } from 'react';
import confetti from 'canvas-confetti';
import FloatingHearts from './components/FloatingHearts';
import AudioPlayer from './components/AudioPlayer';

// Lazy load heavier components to optimize performance
const Hero = lazy(() => import('./components/Hero'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const LoveTypewriter = lazy(() => import('./components/LoveTypewriter'));
const BirthdayGifts = lazy(() => import('./components/BirthdayGifts'));
const VideoModal = lazy(() => import('./components/VideoModal'));
const LoveNotes = lazy(() => import('./components/LoveNotes'));

function App() {
  useEffect(() => {
    // Fire confetti when the page loads
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb6c1', '#ff69b4', '#ffd700']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb6c1', '#ff69b4', '#ffd700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <>
      <div className="golden-hour"></div>
      <FloatingHearts />
      
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando memorias...</div>}>
          <Hero />
          <LoveTypewriter />
          <PhotoGallery />
          <BirthdayGifts />
          <LoveNotes />
          <VideoModal />
        </Suspense>
      </main>

      <AudioPlayer />
    </>
  );
}

export default App;
