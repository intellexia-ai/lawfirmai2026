import { useInView } from '../../hooks/useInView';
import { useRef } from 'react';

const timeline = [
  {
    num: '01.',
    title: 'Iniciamos',
    text: 'Operaciones hace 11 años en la Ciudad de México. Somos una Firma de Estrategia, Apertura de mercado y Servicios Jurídicos Internacionales.',
  },
  {
    num: '02.',
    title: 'Oficina España',
    text: 'En 2015 abrimos una segunda oficina en el noreste de España, en la Ciudad de Oviedo, capital de Asturias, y mantenemos presencia física con nuestros delegados en todo el país.',
  },
  {
    num: '03.',
    title: 'U.S. Desk',
    text: 'Abarcamos una red de cobertura y área de influencia en los Estados Unidos de América, en Austin Texas, asesorando operaciones cross-border y servicios jurídicos internacionales.',
  },
  {
    num: '04.',
    title: 'China Desk',
    text: 'En 2018 firmamos un Joint Venture con la Red Global Mx, Organismo autónomo de la Secretaría de Relaciones Exteriores, para asesorar empresas chinas que desean hacer negocios en México.',
  },
];

export const FirmaIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section id="firma-intro" className="bg-white py-20 px-6 md:px-12 lg:px-16" ref={ref}>
      {/* Headline */}
      <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed">
          Somos una Firma de abogados conformada por profesionales comprometidos con la innovación constante y mejora en la prestación de{' '}
          <span className="text-[#C96A3A]">servicios legales de excelencia.</span>
        </p>
      </div>

      {/* Timeline 4 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {timeline.map((item, i) => (
          <div
            key={item.num}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <p className="text-[#C96A3A] text-sm font-semibold mb-1">{item.num}</p>
            <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Split block debajo */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto rounded-xl overflow-hidden">
        {/* Imagen */}
        <div className="bg-gray-200 min-h-[280px] lg:col-span-1 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600')] bg-cover bg-center" />
        {/* Naranja */}
        <div className="bg-[#C96A3A] p-8 flex items-center">
          <p className="text-white text-base leading-relaxed font-light">
            La Firma ha desarrollado un servicio apoyado en la especialidad y la experiencia en una visión legal integral enfocada en la <strong>prevención de riesgos legales</strong>, lo que nos ha permitido generar condiciones para el crecimiento, la productividad y la competitividad de nuestros clientes.
          </p>
        </div>
        {/* Teal */}
        <div className="bg-[#3A7A8A] p-8 flex flex-col justify-center">
          <h4 className="text-white font-serif text-xl mb-3">Representamos</h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Los intereses de grandes competidores en distintas industrias como Infraestructura; Metal; Telecom; Energía; TIC's, Seguridad Digital, Agroindustria y Comercio.
          </p>
        </div>
      </div>
    </section>
  );
};
