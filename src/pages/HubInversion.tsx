import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';
import { ArrowRight, Globe, Shield, Zap, TrendingUp, Users, Plane } from 'lucide-react';

const paradigmaStats = [
  { value: '12+', label: 'Años de trayectoria' },
  { value: '87+', label: 'Ciudades bajo influencia' },
  { value: '3', label: 'Continentes' },
  { value: '4', label: 'Países con presencia' },
];

const hubAreas = [
  {
    icon: Globe,
    title: 'Comercio Exterior & T-MEC',
    tag: 'Cumplimiento y Defensa Arancelaria',
    items: [
      'Programas IMMEX, PROSEC y Draw-Back (implementación llave en mano)',
      'Defensa comercial ante la UPCI: dumping y subsidios',
      'Certificación de reglas de origen — Capítulo 4 T-MEC',
      'Control de Anexos 24 y 31; Certificación OEA',
      'Participación activa en mesas de negociación y revisión del T-MEC',
    ],
  },
  {
    icon: Shield,
    title: 'Recintos Fiscalizados Estratégicos',
    tag: 'Zonas Francas — RFE',
    items: [
      'Única firma mexicana miembro permanente de la WFZO (140 países)',
      'Planeación, tramitación y gobierno corporativo de RFE',
      'Experiencia directa en los RFE de San Luis Potosí y Puerto Chiapas',
      'Gestión jurídica ante SAT y autoridades hacendarias',
      'Auditorías operacionales para conservar el registro del recinto',
    ],
  },
  {
    icon: Zap,
    title: 'Infraestructura & Energía',
    tag: 'Construcción · Energías Renovables',
    items: [
      'Asesoría ante la CRE y SENER para plantas generadoras y campos de extracción',
      'Gestión de coinversiones bilaterales (red CMIC–ASTUREX)',
      'Ingeniería ambiental aplicada y certificaciones de descarbonización',
      'Workshop Expo CIHAC — pioneros en atracción de capital para construcción',
      'Proyectos desde pre-inversión hasta aftercare',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Ingeniería Financiera & Soft Landing',
    tag: 'Estudios · Capital Humano · Licitaciones',
    items: [
      'Evaluación económica de proyectos y análisis predictivo de viabilidad',
      'Reclutamiento y headhunting de directivos técnicos alineados a compliance',
      'Soft landing operativo: contratación, contabilidad y administración fiscal inicial',
      'Representación en licitaciones públicas y privadas nacionales e internacionales',
      'Mediación privada comercial como mecanismo expedito de solución de controversias',
    ],
  },
  {
    icon: Users,
    title: 'Competitividad 4.0',
    tag: 'LegalTech · Mediación Digital · Compliance',
    items: [
      'CLM y firmas electrónicas avanzadas con validez en operaciones aduaneras',
      'Optimización de ecosistemas e-commerce bajo disciplina regulatoria T-MEC',
      'Mediadores privados certificados por el CJA — convenios con fuerza de cosa juzgada',
      'Software propietario DEI-MENTE: auditoría de anticorrupción (ISO 37001)',
      'Regulación, promoción e implementación de Inteligencia Artificial aplicada',
    ],
  },
  {
    icon: Plane,
    title: 'Movilidad Global & Migración Corporativa',
    tag: 'EB-5 · Golden Visa · Canadá',
    items: [
      'Visa EB-5 (Estados Unidos) y E-2 para inversionistas',
      'Golden Visa Portugal / Unión Europea',
      'Canadá Start-up Visa y programas de inversionista inmigrante de Quebec',
      'Gestión exprés de visas de residencia temporal y permanente ante INM',
      'Apostillado, homologación y legalización consular de documentos',
    ],
  },
];

const desks = [
  {
    region: 'US Desk',
    city: 'Austin, Texas',
    focus: 'Tech & Venture Capital',
    desc: 'Operado a través del Bilateral Tech Council / Williams Advisers. Estructuración legal de transacciones cross-border y enlace corporativo de capital estadounidense.',
    chambers: ['Mexico–Texas Chamber of Commerce', 'Texas–Europe Chamber of Commerce (TECC)'],
  },
  {
    region: 'Oficina España',
    city: 'Oviedo, Asturias',
    focus: 'Inversión España–México',
    desc: 'Establecidos físicamente desde 2015 en el Principado de Asturias. Delegados oficiales para la internacionalización empresarial ibérica-latinoamericana vía la red exterior de ASTUREX.',
    chambers: ['Red Exterior de ASTUREX', 'CEEI Asturias'],
  },
  {
    region: 'China Desk',
    city: 'Tianjin / Beijing',
    focus: 'Atracción Nearshoring',
    desc: 'Operado por conducto del Centro de Cooperación y Negocios México–China (CCNMC) en alianza estratégica con la Red Global Mx, Capítulo Beijing.',
    chambers: ['Red Global Mx — SRE', 'CCNMC Beijing'],
  },
];

const credenciales = [
  {
    title: 'World Free Zones Organization',
    detail: 'Primera y única firma mexicana con membresía permanente. 1,600+ miembros, 140 países. Sede: Emiratos Árabes Unidos.',
    highlight: true,
  },
  {
    title: 'Firma Líder Diamante — Comercio Exterior',
    detail: 'Tops México · 2020–2026',
    highlight: false,
  },
  {
    title: 'Firma Líder Diamante — Inversión Extranjera',
    detail: 'Tops México · 2020–2026',
    highlight: false,
  },
  {
    title: 'Empresa Mexicana del Año / The Law Award',
    detail: 'Latin American Quality Institute · 2021',
    highlight: false,
  },
  {
    title: 'Proveedor Jurídico Internacional',
    detail: 'Red Exterior de ASTUREX (España) · Permanente',
    highlight: false,
  },
  {
    title: 'Clientes Fortune 500',
    detail: 'Al servicio de corporativos globales en sectores críticos: metalurgia, energía, telecomunicaciones e IT.',
    highlight: false,
  },
];

const ferias = [
  { name: 'Expo CIHAC', logo: '/ferias/expo-cihac.png' },
  { name: 'Expo Manufactura', logo: '/ferias/expo-manufactura.png' },
  { name: 'The Green Expo', logo: '/ferias/the-green-expo.png' },
  { name: 'Intertraffic Américas', logo: '/ferias/intertraffic-americas.png' },
];

export default function HubInversionPage() {
  return (
    <div>
      <PageHero
        title="Hub de Inversión & Inteligencia Comercial"
        subtitle="Socio estratégico en la nueva economía transnacional — de la asesoría jurídica al ciclo completo de inversión"
        imageUrl="/assets/hub-hero.png"
        imagePosition="center 65%"
        height="h-screen"
        textPosition="center"
      />

      {/* Paradigma */}
      <section className="bg-[#1A1A2E] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-[#C96A3A] text-xs font-semibold uppercase tracking-widest mb-4">Arquitectura Operativa Avanzada</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 max-w-3xl leading-tight">
              Del despacho tradicional al Hub de Inteligencia Legal
            </h2>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-12">
              CRZ//A redefine el alcance de la asesoría de negocios. Ya no nos limitamos a la interpretación
              de la norma — intervenimos directamente en la optimización operativa, financiera y estratégica
              del inversionista, acompañando cada fase bajo un esquema llave en mano en tres continentes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {paradigmaStats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#C96A3A] pl-4">
                  <p className="font-serif text-4xl text-white mb-1">{s.value}</p>
                  <p className="text-white/50 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Estrategias: nearshoring/reshoring */}
      <section className="bg-[#3A7A8A] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { term: 'Reshoring', desc: 'Repatriación de operaciones al mercado de origen' },
                { term: 'Nearshoring', desc: 'Relocalización estratégica hacia México como hub manufacturero' },
                { term: 'Smart Shoring', desc: 'Arquitectura híbrida que optimiza costo, talento y riesgo regulatorio' },
              ].map((item) => (
                <div key={item.term} className="bg-white/10 rounded-xl px-6 py-8 backdrop-blur-sm">
                  <p className="font-serif text-2xl mb-2">{item.term}</p>
                  <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6 Áreas del Hub */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-[#C96A3A] text-xs font-semibold uppercase tracking-widest mb-3">Pilares del Hub</p>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">Áreas de Especialización</h2>
            <p className="text-gray-500 max-w-2xl mb-12">
              Seis ejes integrados que cubren el ciclo completo de la inversión transfronteriza,
              desde la estructuración inicial hasta el compliance continuo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hubAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-[#C96A3A]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[#C96A3A]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900 leading-snug">{area.title}</h3>
                        <span className="text-xs text-[#3A7A8A] font-medium">{area.tag}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#C96A3A] mt-0.5 flex-shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Desks internacionales */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-[#C96A3A] text-xs font-semibold uppercase tracking-widest mb-3">Cobertura Geográfica</p>
            <h2 className="font-serif text-3xl text-gray-900 mb-12">Desks Internacionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {desks.map((desk) => (
                <div key={desk.region} className="bg-white border border-gray-200 rounded-xl p-8">
                  <div className="mb-4">
                    <span className="inline-block text-xs font-semibold text-white bg-[#3A7A8A] px-3 py-1 rounded-full mb-3">
                      {desk.focus}
                    </span>
                    <h3 className="font-serif text-xl text-gray-900">{desk.region}</h3>
                    <p className="text-[#C96A3A] text-sm font-medium">{desk.city}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{desk.desc}</p>
                  <ul className="space-y-1">
                    {desk.chambers.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-[#C96A3A] flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credenciales */}
      <section className="bg-[#1A1A2E] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-[#C96A3A] text-xs font-semibold uppercase tracking-widest mb-3">Validación Externa</p>
            <h2 className="font-serif text-3xl mb-12">Perfil Validado por Organismos Globales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {credenciales.map((c) => (
                <div
                  key={c.title}
                  className={`rounded-xl p-6 border ${
                    c.highlight
                      ? 'border-[#C96A3A] bg-[#C96A3A]/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  {c.highlight && (
                    <span className="inline-block text-xs font-semibold text-[#C96A3A] uppercase tracking-widest mb-3">
                      Distinción única en México
                    </span>
                  )}
                  <h3 className="font-serif text-lg mb-2">{c.title}</h3>
                  <p className="text-white/60 text-sm">{c.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Consejo Ferias */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <h2 className="font-serif text-2xl text-gray-900 mb-2">Consejo Consultivo de Ferias</h2>
            <p className="text-gray-500 text-sm mb-8">Participamos en el consejo consultivo de las ferias industriales más importantes de México.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ferias.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center justify-center border border-gray-200 rounded-lg bg-white p-6 h-28 hover:shadow-md transition-shadow"
                >
                  <img
                    src={f.logo}
                    alt={f.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA → Simulador */}
      <section className="bg-gradient-to-br from-[#3A7A8A] to-[#1A1A2E] py-24 px-6 text-white text-center">
        <FadeIn delay={0}>
          <p className="text-[#C96A3A] text-xs font-semibold uppercase tracking-widest mb-4">Inteligencia Artificial Aplicada</p>
          <h2 className="font-serif text-4xl mb-4 max-w-2xl mx-auto leading-tight">
            Simula tu ruta de expansión transnacional
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Selecciona tu país de origen, sector y prioridad. Nuestro agente senior generará
            un análisis de ruta crítica personalizado con los marcos legales, fiscales y
            regulatorios aplicables a tu proyecto.
          </p>
          <Link
            to="/simulador"
            className="inline-flex items-center gap-2 bg-[#C96A3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B95A2A] transition-colors text-base"
          >
            Iniciar Simulador IA
            <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
