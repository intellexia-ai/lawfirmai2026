import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

const tabs = [
  {
    id: 'somos',
    label: 'Somos',
    content: 'Firma de abogados especialistas en análisis, mitigación y administración de Riesgo Legal. 3 continentes, 4 países, 87+ ciudades. Profesionales comprometidos con la innovación constante y la excelencia en la prestación de servicios jurídicos.',
  },
  {
    id: 'equipo',
    label: 'Equipo',
    content: 'Nuestro equipo está conformado por abogados, mediadores y especialistas con experiencia de 15+ años en sus respectivas áreas. Comprometidos con la calidad, la innovación y la satisfacción de nuestros clientes.',
  },
  {
    id: 'organizacion',
    label: 'Organización',
    content: 'Estructura organizacional con presencia en 4 países (México, España, USA, China). Derecho Corporativo, Administrativo, Propiedad Intelectual, Litigio, MASC, Impuestos, Comercio Internacional, Telecom, Energético.',
  },
];

const values = [
  'Eficacia técnica',
  'Probidad de vida',
  'Pasión',
  'Confianza',
  'Prudencia',
  'Innovación',
  'Disponibilidad',
  'Empatía',
];

const team = [
  { name: 'Bernardo Camacho', areas: 'Litigio Civil y Mercantil, Administrativo, Constitucional' },
  { name: 'Fernando Díaz', areas: 'RSE, Internacional, Proyectos' },
  { name: 'Juan Carlos Prieto', areas: 'TIC, Diplomacia empresarial' },
  { name: 'Liv Espinoza', areas: 'Anticorrupción, Compliance, Litigio Administrativo' },
  { name: 'Mariana Ortega', areas: 'Mediador certificado, Civil, Mercantil' },
  { name: 'Mauricio Jaramillo', areas: 'Dirección, Proyectos Internacionales, IE y Comercio' },
];

export default function LaFirmaPage() {
  const [activeTab, setActiveTab] = useState('somos');
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  return (
    <div>
      <PageHero
        title="La Firma"
        subtitle="11 años de excelencia legal y compromiso con nuestros clientes"
        videoUrl="https://videos.pexels.com/video-files/5474156/5474156-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex gap-8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#3A7A8A] text-[#3A7A8A]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="font-serif text-xl">{tab.label}</span>
              </button>
            ))}
          </div>
          <FadeIn delay={0}>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {tabs.find((t) => t.id === activeTab)?.content}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-gray-900">Nuestros Valores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value) => (
              <div key={value} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl mb-10 text-gray-900">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop')`,
                  }}
                />
                <div className="p-4">
                  <h3 className="font-serif text-lg text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.areas}</p>
                  <a href="#contacto" className="text-[#C96A3A] hover:text-[#B95A2A] text-sm font-medium mt-3 inline-block">
                    Contactar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
