import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { practiceAreas } from '../data/practiceAreas';

export default function AreasPracticaPage() {
  const [selectedArea, setSelectedArea] = useState<typeof practiceAreas[0] | null>(null);

  return (
    <div>
      <PageHero
        title="Áreas de Práctica"
        subtitle="12 especialidades legales para cada desafío empresarial"
        videoUrl="https://videos.pexels.com/video-files/5747459/5747459-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      {/* Grid de áreas */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className="text-left bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#3A7A8A] transition-all group"
              >
                <p className="text-[#C96A3A] text-sm font-semibold mb-1">{area.num}</p>
                <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-[#3A7A8A] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">{area.short}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedArea && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedArea(null)}
        >
          <div
            className="relative bg-[#C96A3A] text-white rounded-xl max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            <p className="text-sm font-semibold text-white/70 mb-1">{selectedArea.num}</p>
            <h3 className="font-serif text-2xl mb-4">{selectedArea.title}</h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-white/90">
              {selectedArea.full}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
