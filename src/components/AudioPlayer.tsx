import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        // Fade in
        audioRef.current.volume = 0;
        let vol = 0;
        const interval = setInterval(() => {
          if (vol < 0.9) {
            vol += 0.1;
            if(audioRef.current) audioRef.current.volume = vol;
          } else {
            clearInterval(interval);
          }
        }, 200);
      } else {
        // Fade out
        let vol = audioRef.current.volume;
        const interval = setInterval(() => {
          if (vol > 0.1) {
            vol -= 0.1;
            if(audioRef.current) audioRef.current.volume = vol;
          } else {
            clearInterval(interval);
            if(audioRef.current) {
              audioRef.current.pause();
              audioRef.current.volume = 1;
            }
          }
        }, 100);
      }
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      {/* Fallback romantic audio, ideally replaced with a local file in public dir */}
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" />
      <button 
        className={`audio-btn ${isPlaying ? 'playing' : ''}`}
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
