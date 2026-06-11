import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

export const CtaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="bg-[#F5F5F3] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight mb-4">
            ¿Sabes si hay riesgos<br />legales en tu empresa?
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            Conoce más sobre nuestro servicio especializado
          </p>
          <a
            href="/contacto"
            className="inline-block bg-[#C96A3A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B95A2A] transition-colors"
          >
            Contáctanos
          </a>
        </div>

        {/* Right - Imagen */}
        <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div
            className="rounded-xl overflow-hidden h-72 bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800')" }}
          />
        </div>
      </div>
    </section>
  );
};
