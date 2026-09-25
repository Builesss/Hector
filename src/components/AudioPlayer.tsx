import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import './AudioPlayer.css';

// YouTube IFrame Player API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

// "Por el Resto de Mi Vida" - Andrés Cepeda (Official YouTube video ID)
const YOUTUBE_VIDEO_ID = 'HdKWlw7s2AE';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API script
    if (!document.getElementById('yt-api')) {
      const tag = document.createElement('script');
      tag.id = 'yt-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          fs: 0
        },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            if (e.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          }
        }
      });
    };

    // If API already loaded (e.g. HMR), init immediately
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="audio-player">
      {/* Hidden YouTube player */}
      <div ref={containerRef} style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div id="yt-player"></div>
      </div>

      <div className="audio-info">
        <Music size={14} />
        <span>Por el Resto de Mi Vida · Andrés Cepeda</span>
      </div>

      <button
        className={`audio-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label="Toggle music"
        title={isPlaying ? 'Pausar' : 'Reproducir música'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
