import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

const newServices = [
  {
    title: 'Contabilidad y Fiscalidad',
    desc: 'Gestión integral de registros contables y estrategias fiscales para corporativos.',
  },
  {
    title: 'Reclutamiento y HR Management',
    desc: 'Selección, evaluación, capacitación y administración de personal para cualquier área de trabajo.',
  },
  {
    title: 'Ingeniería Financiera',
    desc: 'Estudios de inversión, financiamiento corporativo y evaluación de proyectos.',
  },
  {
    title: 'Consultoría en Licitaciones',
    desc: 'Asesoría y representación en licitaciones públicas y privadas, nacionales e internacionales.',
  },
  {
    title: 'Formación Académica y Edición',
    desc: 'Producción de material didáctico, libros, revistas especializadas y plataformas educativas digitales; organización de congresos y simposios.',
  },
  {
    title: 'Energía y Sustentabilidad',
    desc: 'Búsqueda de sitios estratégicos, tramitología ante CRE y SENER, proyectos ejecutivos de ingeniería y cumplimiento ambiental para energías renovables.',
  },
];

const desks = [
  {
    title: 'US Desk — Austin, Texas',
    desc: 'Inteligencia de mercado y asesoría en operaciones cross-border a través de Williams Advisers.',
  },
  {
    title: 'Oficina España — Oviedo, Asturias',
    desc: 'Delegado oficial desde 2015 para empresas asturianas con interés en México y viceversa, con presencia en todo el país ibérico.',
  },
  {
    title: 'China Desk',
    desc: 'Atracción de capitales asiáticos y acompañamiento al inversionista mexicano para entrar al mercado chino.',
  },
];

const ferias = ['The Green Expo', 'Expo Manufactura', 'Intertraffic Américas', 'Expo CIHAC'];

export default function ServiciosPage() {
  return (
    <div>
      <PageHero
        title="Servicios Especializados"
        subtitle="Una consultoría de negocios de nueva generación"
        videoUrl="https://videos.pexels.com/video-files/5711449/5711449-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            {/* Nuevos servicios — ampliación del objeto social */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-gray-900 mb-3">Nuevos Servicios</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                La ampliación de nuestro objeto social nos permite ofrecer servicios integrales que
                fusionan lo jurídico con lo administrativo, financiero y técnico.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newServices.map((service) => (
                  <div key={service.title} className="border-l-4 border-[#C96A3A] pl-6">
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft-landing */}
            <div className="bg-gradient-to-r from-[#3A7A8A] to-[#2A6A7A] text-white rounded-lg p-12 mb-16">
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

            {/* Desks internacionales */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-gray-900 mb-8">Desks Internacionales</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {desks.map((desk) => (
                  <div key={desk.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{desk.title}</h3>
                    <p className="text-gray-600">{desk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Consejo Consultivo de Ferias */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-gray-900 mb-3">Consejo Consultivo de Ferias</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Participamos en el consejo consultivo de las ferias industriales más importantes de México.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ferias.map((feria) => (
                  <div
                    key={feria}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center font-medium text-gray-900 hover:shadow-lg transition-shadow"
                  >
                    {feria}
                  </div>
                ))}
              </div>
            </div>

            {/* Alianzas estratégicas */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-gray-900 mb-3">Alianzas Estratégicas</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-2xl">
                <h3 className="font-serif text-xl text-gray-900 mb-2">México Business</h3>
                <p className="text-gray-600">
                  Alianza estratégica con la plataforma de eventos de negocios líder en México, con más de 12 eventos sectoriales al año.
                </p>
              </div>
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
