import { useState } from 'react';
import { X, Play } from 'lucide-react';
import './VideoModal.css';

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="video-section flex items-center justify-center">
      <button className="play-video-btn" onClick={() => setIsOpen(true)}>
        <Play size={40} fill="currentColor" />
        <span>Nuestro Video</span>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>
            <div className="video-wrapper">
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                controls 
                autoPlay 
                className="romantic-video"
              ></video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
