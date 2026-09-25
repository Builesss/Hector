import { useState } from 'react';
import { Gift, Heart } from 'lucide-react';
import './BirthdayGifts.css';

const GIFTS = [
  { id: 1, title: 'Vale por:', promise: 'Una cena romántica preparada por mí' },
  { id: 2, title: 'Vale por:', promise: 'Un masaje relajante de 1 hora' },
  { id: 3, title: 'Vale por:', promise: 'Un viaje sorpresa de fin de semana' }
];

export default function BirthdayGifts() {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);

  const openGift = (id: number) => {
    if (!openedGifts.includes(id)) {
      setOpenedGifts([...openedGifts, id]);
    }
  };

  return (
    <section className="birthday-gifts-section">
      <div className="gifts-header text-center">
        <h2 className="section-title">Tus Regalos Especiales</h2>
        <div className="title-underline"></div>
        <p className="gallery-subtitle">Haz clic en cada cajita para descubrir lo que te espera.</p>
      </div>

      <div className="gifts-container">
        {GIFTS.map((gift) => {
          const isOpened = openedGifts.includes(gift.id);
          return (
            <div 
              key={gift.id} 
              className={`gift-box ${isOpened ? 'opened' : ''}`}
              onClick={() => openGift(gift.id)}
            >
              <div className="gift-content">
                <Heart size={40} className="gift-icon" />
                <h3>{gift.title}</h3>
                <p>{gift.promise}</p>
              </div>
              <div className="gift-cover">
                <Gift size={60} className="gift-box-icon" />
                <span>Haz clic para abrir</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
