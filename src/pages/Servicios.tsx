import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

const services = [
  {
    title: 'Texas-European Chamber of Commerce México',
    desc: 'Facilitamos negocios entre empresas de Texas, Europa y México.',
  },
  {
    title: 'Centro de Negocios México-China',
    desc: 'Asesoramiento especializado para empresas chinas en México.',
  },
  {
    title: 'Embajadores de Negocios Conscientes',
    desc: 'Iniciativa UNESCO de negocios sustentables y responsables.',
  },
];

export default function ServiciosPage() {
  return (
    <div>
      <PageHero
        title="Servicios Especializados"
        subtitle="Tres pilares de inteligencia comercial internacional"
        videoUrl="https://videos.pexels.com/video-files/5711449/5711449-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, i) => (
                <div key={i} className="border-l-4 border-[#C96A3A] pl-6">
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#3A7A8A] to-[#2A6A7A] text-white rounded-lg p-12 mb-12">
              <h2 className="font-serif text-2xl mb-4">Soft-Landing e Inteligencia de Mercado</h2>
              <p className="leading-relaxed mb-4">
                Ofrecemos servicios de soft-landing para empresas que inician operaciones en México, incluyendo:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#C96A3A] font-bold">✓</span>
                  <span>Análisis de mercado y viabilidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C96A3A] font-bold">✓</span>
                  <span>Identificación de socios y proveedores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C96A3A] font-bold">✓</span>
                  <span>Asesoría regulatoria y fiscal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C96A3A] font-bold">✓</span>
                  <span>Constitución de empresa y permisos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C96A3A] font-bold">✓</span>
                  <span>Acompañamiento en primeros pasos</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Convierte tus aspiraciones internacionales en negocios consolidados
              </p>
              <a
                href="#contacto"
                className="inline-block bg-[#C96A3A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B95A2A] transition-colors"
              >
                Agendar Consulta
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
