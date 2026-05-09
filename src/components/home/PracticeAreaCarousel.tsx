import { useState, useRef } from 'react';
import { practiceAreas, PracticeArea } from '../../data/practiceAreas';
import { useInView } from '../../hooks/useInView';

const ITEMS_PER_SLIDE = 3;
const slides = Array.from(
  { length: Math.ceil(practiceAreas.length / ITEMS_PER_SLIDE) },
  (_, i) => practiceAreas.slice(i * ITEMS_PER_SLIDE, i * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE)
);

const AreaModal = ({ area, onClose }: { area: PracticeArea; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <div
      className="relative bg-[#C96A3A] text-white rounded-xl max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
      >
        ×
      </button>
      <p className="text-sm font-semibold text-white/70 mb-1">{area.num}</p>
      <h3 className="font-serif text-2xl mb-4">{area.title}</h3>
      <div className="text-sm leading-relaxed whitespace-pre-line text-white/90">
        {area.full}
      </div>
    </div>
  </div>
);

export const PracticeAreaCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState<PracticeArea | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="areas"
      ref={ref}
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`flex items-center justify-between mb-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-white font-light text-xl tracking-wide">Áreas de práctica</h2>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="text-white/80 hover:text-white flex items-center gap-2 text-sm"
          >
            Más <span className="text-xl">→</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {slides[current].map((area, i) => (
            <div
              key={area.id}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-[#C96A3A] text-xs font-semibold mb-1">{area.num}</p>
              <h3 className="font-serif text-white text-lg mb-3">{area.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1 line-clamp-5">{area.short}</p>
              <button
                onClick={() => setModal(area)}
                className="mt-4 text-white/80 hover:text-white font-serif text-base self-start"
              >
                Más
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {modal && <AreaModal area={modal} onClose={() => setModal(null)} />}
    </section>
  );
};
