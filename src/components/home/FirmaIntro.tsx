import { useInView } from '../../hooks/useInView';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const timeline = [
  {
    num: '01.',
    title: 'Iniciamos',
    text: 'Operaciones hace 12 años en la Ciudad de México. Somos una Firma de Estrategia, Apertura y expansión de mercado y Servicios Jurídicos Internacionales.',
  },
  {
    num: '02.',
    title: 'Oficina España',
    text: 'En 2015 abrimos una segunda oficina en el noreste de España, en la Ciudad de Oviedo, capital de Asturias, y mantenemos presencia física con nuestros delegados en todo el país.',
  },
  {
    num: '03.',
    title: 'U.S. Desk',
    text: 'Abarcamos una red de cobertura y área de influencia en los Estados Unidos de América, en Austin Texas asesorando operaciones cross-border, reshoring, smartshoring y relocalización de empresas, con la cobertura de servicios jurídicos internacionales. Nuestra red abarca la Mexico-Texas Chamber of Commerce, de la cual somos fundadores, ubicada en el condado de Travis, en Austin Texas, EE. UU., y en Ciudad de México; somos consejeros de la Texas-European Chamber of Commerce; socios de Texas Global y tenemos una alianza con South Texas Advanced Manufacturing Partnership (STAMP), para apoyar la transferencia de tecnología de la alta manufactura en la transición del T-MEC.',
  },
  {
    num: '04.',
    title: 'China Desk',
    text: 'En 2018 firmamos un Joint Venture con la Red Global Mx, Organismo autónomo de la Secretaría de Relaciones Exteriores, para asesorar empresas chinas que desean hacer negocios en México.',
  },
];

const PREVIEW_LENGTH = 120;

type TimelineItem = typeof timeline[number];

function TimelineModal({ item, onClose }: { item: TimelineItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
        <p className="text-[#C96A3A] text-sm font-semibold mb-1">{item.num}</p>
        <h3 className="font-serif text-2xl text-gray-900 mb-4">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
}

export const FirmaIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [selected, setSelected] = useState<TimelineItem | null>(null);

  return (
    <section id="firma-intro" className="bg-white py-20 px-6 md:px-12 lg:px-16" ref={ref}>
      {/* Headline */}
      <div className={`max-w-6xl mx-auto text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed">
          Somos una Firma de profesionales del derecho, las relaciones internacionales, política pública y economistas comprometidos con la innovación constante y mejora en la prestación de{' '}
          <span className="text-[#C96A3A]">servicios de excelencia.</span>{' '}
          Ampliamos nuestros servicios para ser más que un referente del derecho, y sumarnos a los cambios de la Geopolítica internacional
        </p>
      </div>

      {/* Timeline 4 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {timeline.map((item, i) => {
          const isLong = item.text.length > PREVIEW_LENGTH;
          const preview = isLong ? item.text.slice(0, PREVIEW_LENGTH).trimEnd() + '...' : item.text;

          return (
            <div
              key={item.num}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="text-[#C96A3A] text-sm font-semibold mb-1">{item.num}</p>
              <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{preview}</p>
              {isLong && (
                <button
                  onClick={() => setSelected(item)}
                  className="mt-2 text-sm font-medium text-[#C96A3A] hover:text-[#B95A2A] transition-colors"
                >
                  Ver más →
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Split block debajo */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto rounded-xl overflow-hidden">
        {/* Imagen */}
        <div className="bg-gray-200 min-h-[280px] lg:col-span-1 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600')] bg-cover bg-center" />
        {/* Naranja */}
        <div className="bg-[#C96A3A] p-8 flex items-center">
          <p className="text-white text-base leading-relaxed font-light">
            La Firma ha desarrollado un servicio apoyado en la especialidad y la experiencia en una visión global de negocios enfocada en la <strong>prevención de riesgos económicos, políticos y legales</strong>, lo que nos ha permitido generar condiciones para el crecimiento, la productividad y la competitividad de nuestros clientes.
          </p>
        </div>
        {/* Teal */}
        <div className="bg-[#3A7A8A] p-8 flex flex-col justify-center">
          <h4 className="text-white font-serif text-xl mb-3">Representamos</h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Los intereses de grandes competidores en distintas industrias como Infraestructura; Metal; Telecom; Energía; TIC's, Seguridad Digital, IA, Agroindustria y Comercio.
          </p>
        </div>
      </div>

      {selected && <TimelineModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
