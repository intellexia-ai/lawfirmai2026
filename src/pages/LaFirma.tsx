import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';
import { X } from 'lucide-react';

const tabs = [
  {
    id: 'somos',
    label: 'Somos',
    content: 'Una Firma de estrategia, inteligencia comercial y servicios jurídicos internacionales. Asesoramos a clientes e inversionistas en 3 continentes, 4 países +87 ciudades. Profesionales comprometidos con la innovación constante y la excelencia en la prestación de servicios jurídicos.',
  },
  {
    id: 'equipo',
    label: 'Equipo',
    content: 'Nuestro equipo está conformado por un equipo multidisciplinario de distintas profesiones con experiencia de +20 años en sus respectivas áreas. Comprometidos con la calidad, la innovación y la satisfacción de nuestros clientes.',
  },
  {
    id: 'organizacion',
    label: 'Organización',
    content: 'Estructura organizacional con presencia en 4 países (México, España, USA, China). Derecho Corporativo, Administrativo, Propiedad Intelectual, Litigio, MASC, Impuestos, Comercio Internacional, Telecom, Energético. Servicios de inteligencia comercial, apertura de mercado, cabildeo político, legislativo y asuntos gubernamentales.',
  },
];

const recognitions = [
  { award: 'Empresa Mexicana del Año 2021 y The Law Award Winners 2021', org: 'Latin American Quality Institute' },
  { award: 'Firma Líder Diamante en Comercio Exterior (2023–2026)', org: 'Tops México' },
  { award: 'Firma Líder Diamante en Inversión Extranjera', org: 'Tops México' },
  { award: 'Firma Líder Platino en Litigio', org: 'Tops México' },
  { award: 'Primera y única firma legal mexicana miembro de la World Free Zones Organization', org: 'WFZO — Emiratos Árabes Unidos' },
  { award: 'Proveedor de Servicios Jurídicos Internacionales', org: 'Red Exterior de Asturex (España)' },
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

type TeamMemberType = {
  name: string;
  role: string;
  brief: string;
  bio: string;
  category: string;
  photo?: string;
  email?: string;
  phone?: string;
};

const teamCategories: { label: string; members: TeamMemberType[] }[] = [
  {
    label: 'Socios',
    members: [
      {
        name: 'Mauricio Jaramillo Reyes',
        role: 'Socio Fundador & Director General',
        category: 'Socio',
        // photo: '/team/mauricio-jaramillo.png', // TODO: reactivar cuando tengamos todas las fotos
        brief: 'Consultor internacional con más de 14 años de experiencia en proyectos de inversión y comercio internacional. Miembro acreditado de ASTUREX y la WFZO. Ponente invitado por el BID, la Dubai Chamber y la USMCOC. Áreas: Inversión Extranjera, Comercio Internacional y Proyectos.',
        bio: 'Es consultor internacional con más de 14 años de experiencia en el desarrollo de proyectos de inversión en el comercio internacional, miembro oficialmente acreditado en la Red Exterior de ASTUREX; miembro asociado en la WFZO, con sede en Dubái; autor intelectual del Hub de Comercio Internacional para la Cámara México – Estados Unidos, Capítulo Valle de México y ponente en las jornadas de capacitación en dicho organismo.\n\nEs licenciado en Derecho por la Universidad La Salle, cuenta con estudios de postgrado en Derecho Tributario por la Escuela Libre de Derecho y estudios de comercio internacional por la Cámara de Comercio Internacional (ICC México), así como capacitación del Banco Interamericano de Desarrollo en temas de Inversión Extranjera Directa para América Latina y el Caribe y el desarrollo e impulso de Agencias Promotoras de Inversiones. Ha impartido conferencias en México, España y China, por invitación directa del BID; el CCPIT; la Dubai Chamber of Commerce & Industry; la Cámara de Comercio e Industria de Navegación de Gijón; la USMCOC, entre otros organismos internacionales.\n\nProyectos y Actividades Profesionales: Presidente del Grupo de Alto Nivel en Comercio e Inversión en la USMCOC Capítulo Valle de México. Socio Fundador del Centro de Cooperación y Negocios México–China en alianza con la Red Global Mx, Capítulo BJ (Organismo autónomo de la SRE). Delegado mexicano en el "Global Business Forum Latin America 2019" en la Ciudad de Panamá y en la "XII Cumbre Empresarial CHINA-LAC" en Zhuhai, China. Asesor para México en la Red Exterior de ASTUREX.\n\nÁreas de Práctica: Inversión Extranjera y Comercio Internacional, Proyectos Internacionales, Infraestructura.',
      },
      {
        name: 'Bernardo Camacho Zavala',
        role: 'Socio Fundador — Litigio, Corporativo y Telecomunicaciones',
        category: 'Socio',
        email: 'bzavala@crza.com.mx',
        phone: '55 2139 5193',
        brief: 'Titular del área de Litigio Civil, Mercantil, Administrativo y Constitucional. Asesor de la práctica Corporativa-Financiera y de Telecomunicaciones. International Executive Legal Certificate (International Negotiations) por la University of California Berkeley Law School.',
        bio: 'El Licenciado Bernardo Camacho Zavala es Socio Fundador de la Firma, en donde dirige el área de Litigio Civil, Mercantil, Administrativo y Constitucional y es asesor de la práctica Corporativa-Financiera y de Telecomunicaciones de la Firma. Es Licenciado en Derecho por la Universidad La Salle, cuenta con una Maestría en Derecho Procesal Constitucional por la Universidad Panamericana; el International Executive Legal Certificate Program (International Negotiations) por la University of California Berkeley Law School y una Especialidad en Derecho Mercantil por la Escuela Libre de Derecho.\n\nParticipó en la redacción de las reformas en materia Financiera en la Ley del Mercado de Valores, las Disposiciones de Carácter General Aplicables a las Emisoras del Mercado de Valores (Circular Única de Emisoras) y otras regulaciones reconocidas por la CNBV. Desarrolló el Manual de Procedimientos de Supervisión de la Dirección General de Asuntos Jurídicos Bursátiles. Colaboró en la revista Doing Business en México 2009 publicada por el Banco Mundial. Participó en el seminario sobre "Insider trading, Market Manipulation, Whistle Blower program and Enforcement Procedures" organizado por la CNBV e impartido por la SEC (2013).\n\nÁreas de Práctica: Litigio Civil y Mercantil, Administrativo, Constitucional.',
      },
      {
        name: 'Dr. Arturo Flores López',
        role: 'Gobernanza e Internacionalización',
        category: 'Socio',
        // photo: '/team/arturo-flores.png', // TODO: reactivar cuando tengamos todas las fotos
        brief: 'Consejero en Infraestructura y Políticas Públicas. PhD. en Políticas Públicas por la Universidad de York, Reino Unido. Director del proyecto ECOSCIM financiado por el Newton Fund y CONACYT.',
        bio: 'Consejero en Infraestructura y Políticas Públicas. PhD. en Políticas Públicas por la Universidad de York, Reino Unido, con Maestría en Administración Pública y Políticas Públicas de la misma universidad y Licenciatura en Estudios Internacionales por la Universidad de Monterrey.\n\nActualmente es Director del proyecto de investigación Empowering Citizen-Oriented Smart City Innovation in Mexico (ECOSCIM), financiado por el Economic and Social Research Council, Newton Fund y CONACYT (Convocatoria CONACYT-ESRC 2018), en el que participan la Universidad Anáhuac Campus Norte y la Universidad de Bristol, Reino Unido. Funge como integrante de la Junta de Gobierno de la Urban Affairs Association, con sede en los Estados Unidos.\n\nHa desarrollado proyectos y asesorado a clientes del sector y participado en Foros y Congresos organizados por la Firma en México y España. Fue ponente en la Semana de la Innovación y la Tecnología organizada por la Firma con el apoyo del Instituto Económico del Principado de Asturias, España; CEEI Asturias; Invest Hong Kong y otros organismos internacionales de 5 países.\n\nÁreas de Práctica: Gobernanza, Internacionalización, Infraestructura y Políticas Públicas.',
      },
    ],
  },
  {
    label: 'Of Counsel',
    members: [
      {
        name: 'Iván Díaz',
        role: 'Ciberseguridad y Peritaje Informático',
        category: 'Of Counsel',
        // photo: '/team/ivan-diaz.png', // TODO: reactivar cuando tengamos todas las fotos
        brief: 'CISO con 19+ años de trayectoria. Certificaciones CISSP, CISA, CISM, ISO 27001:2022. Perito registrado ante el Poder Judicial de la Federación.',
        bio: 'Especialista en Ciberseguridad, Protección de Datos y Peritaje Informático. CISO con 19+ años de trayectoria; certificaciones CISSP, CISA, CISM, ISO 27001:2022, CIPM-IAPP. Perito registrado ante el Poder Judicial de la Federación.',
      },
      {
        name: 'Marlene Díaz',
        role: 'Protección de Datos y Privacidad',
        category: 'Of Counsel',
        // photo: '/team/marlene-diaz.png', // TODO: reactivar cuando tengamos todas las fotos
        brief: 'Experta internacional en privacidad y protección de datos personales. Máster en Derecho de las TICs por la Universidad Carlos III de Madrid.',
        bio: 'Experta internacional certificada en privacidad, protección de datos personales y seguridad de la información. Máster en Derecho de las TICs (Universidad Carlos III de Madrid), 15 años de experiencia en España y Latinoamérica, especialista en RGPD de la UE.',
      },
      {
        name: 'Pablo Aguirre',
        role: 'Marketing Internacional y Enlace Asia',
        category: 'Of Counsel',
        brief: 'Consejero en Estrategias Interculturales de Publicidad, Marketing y Relaciones Públicas aplicadas al mercado chino. Más de 15 años en China. Licenciado en chino mandarín (BLCU) y Ciencias de la Comunicación (TEC de Monterrey).',
        bio: 'Consejero en Estrategias Interculturales de Publicidad, Marketing y Relaciones Públicas aplicadas al mercado chino. Cuenta con una licenciatura en el idioma chino mandarín (Putonghua) con especialidad en negocios y Cultura y Protocolo de negocios de la Universidad de Lenguas y Cultura de Beijing (BLCU), y una licenciatura en Ciencias de la Comunicación por el TEC de Monterrey.\n\nVivió durante más de 15 años en China enseñando cultura y negocios en diversas Universidades y Centros de Negocios, incluyendo el Departamento de Post Graduados intercultural entre China y América Latina para empresas chinas dedicadas al ramo de la petroindustria, de la Universidad del Petróleo de China.\n\nIdiomas: Español como lengua materna, inglés profesional y chino mandarín profesional.',
      },
    ],
  },
  {
    label: 'Directores',
    members: [
      {
        name: 'Mathieu Julien',
        role: 'Director de Migración Corporativa Internacional',
        category: 'Director',
        brief: 'Socio Fundador de Horizon Residency & Citizenship. Consultor de inmigración canadiense certificado (ICCRC) con +10 años de experiencia. Especialista en EB-5, Golden Visa Portugal y ciudadanía caribeña. Habla 4 idiomas.',
        bio: 'Socio Fundador de Horizon Residency & Citizenship, Socio de CRZ//A en materia de Inversión y Migración Internacional. Mathieu es consultor de inmigración canadiense certificado (ICCRC) con más de 10 años de experiencia en la gestión de programas migratorios a nivel global, es especialista en ayudar a personas de alto patrimonio y sus familias a lograr sus objetivos de reubicación y movilidad.\n\nComo parte de su amplia experiencia en la industria de inversiones, Mathieu se encontraba a cargo de dirigir los programas canadienses de inversionistas inmigrantes de una renombrada firma de inversión migratoria en Beijing. Actualmente dirige en México los principales programas de inversionistas inmigrantes para Quebec y Canadá, EE. UU. EB-5, Portugal Golden Visa, así como los programas de ciudadanía caribeña.\n\nEs licenciado en administración de empresas de la Universidad Laval en Québec, cuenta con un certificado de la Universidad de Salamanca en español y un diploma de la Universidad de Lengua y Cultura de Beijing en mandarín comercial. Habla con fluidez 4 idiomas: francés, inglés, español y mandarín.',
      },
      {
        name: 'Manuel Gaviño',
        role: 'Director del Área Laboral Corporativa y Seguridad Social',
        category: 'Director',
        brief: 'Asesora a empresas líderes en sectores automotriz, construcción, telecomunicaciones y tecnología. Especialista en inspecciones laborales STPS y litigio fiscal y administrativo.',
        bio: 'Director del área Laboral Corporativa y Seguridad Social. Manuel Gaviño asesora a empresas líderes en sectores clave como automotriz, construcción, telecomunicaciones, tecnología, moda y hotelería. Su experiencia incluye la gestión estratégica de inspecciones laborales por parte de la STPS, minimizando riesgos y asegurando el cumplimiento normativo. Su enfoque proactivo y su conocimiento detallado de los procedimientos de inspección lo convierten en un abogado invaluable para las organizaciones que buscan evitar contingencias laborales y administrativas.\n\nParticipa activamente en diversas revistas especializadas, compartiendo su visión sobre temas relevantes del derecho administrativo, fiscal y laboral, contribuyendo al debate y la actualización de la comunidad jurídica y empresarial. Su sólida experiencia en litigio fiscal y administrativo, combinada con su enfoque preventivo, le permite diseñar estrategias legales robustas que protegen los intereses de sus clientes. Habla inglés con fluidez y español como lengua materna.',
      },
      {
        name: 'León Ernesto Urbilla Suazo',
        role: 'Director de Materia Bursátil',
        category: 'Director',
        brief: 'Consejero y Abogado con amplia experiencia en materia bursátil. Ex Director General Adjunto en emisiones de la CNBV. Ponente en la Bolsa Mexicana de Valores sobre delitos financieros.',
        bio: 'Consejero y Abogado con amplia experiencia en materia bursátil. Ha sido Director General Adjunto en el área de emisiones de la Dirección General de Asuntos Jurídicos Bursátiles de la CNBV, ponente de diversos módulos en la Bolsa Mexicana de Valores sobre delitos financieros. Habla inglés con fluidez y español como lengua materna.',
      },
      {
        name: 'Juan Carlos Prieto Williams',
        role: 'Director de Telecomunicaciones y Consultoría Digital',
        category: 'Director',
        brief: 'Socio Fundador de Williams Advisers International (Joint Venture CRZ//A en Austin, Texas). Embajador de TELCEL y evangelista digital. Conferencista en foros con más de 2,000 personas. Doble nacionalidad, bilingüe.',
        bio: 'Socio Fundador de Williams Advisers International (Joint Venture de CRZ//A en Austin, Texas), firma binacional de consultoría México–US. Es embajador de TELCEL y evangelista digital, conferencista en diversos foros con afluencia de más de 2,000 personas.\n\nActualmente desarrolla un proyecto en materia de telecomunicaciones para la empresa líder en América Latina y tercer lugar a nivel mundial, con contenidos para 4 exposiciones en 4 diferentes ciudades de México; 4 Workshops post-expo; Networking PR de Alto Nivel; Miniseries de 6 capítulos en web y radio sobre la transformación digital en diferentes industrias.\n\nHa desarrollado proyectos y asesorado a clientes del sector y participado en Foros y Congresos organizados por la Firma en México y US. Fue ponente en la Semana de la Innovación y la Tecnología organizada por la Firma con el apoyo del Instituto Económico del Principado de Asturias, España; CEEI Asturias; Invest Hong Kong y otros organismos internacionales de 5 países. Juan Carlos tiene doble nacionalidad y es bilingüe.',
      },
    ],
  },
  {
    label: 'Gerentes',
    members: [
      {
        name: 'María Espinosa',
        role: 'Gerente de Contratos Tecnológicos y Gobernanza de TI',
        category: 'Gerente',
        // photo: '/team/maria-espinosa.png', // TODO: reactivar cuando tengamos todas las fotos
        brief: 'Especialista en contratos tecnológicos (CLM) y compliance. Experiencia en Genpact, DXC Technology y Motorola Solutions.',
        bio: 'Especialista en Contratos Tecnológicos (CLM), Gobernanza de TI y Compliance. Con experiencia en Genpact, DXC Technology y Motorola Solutions; gestión de alianzas y ecosistemas globales.',
      },
      {
        name: 'Liv Espinosa',
        role: 'Gerente del Área Ambiental y Anticorrupción',
        category: 'Gerente',
        brief: 'Gerente del área Ambiental y Consejera en Anticorrupción. Licenciada en Derecho por la Universidad de Aix-en-Provence, Francia. Múltiples diplomados en Derecho Ambiental, Energético y Compliance.',
        bio: 'Es Gerente del área Ambiental y Consejera en materia de Anticorrupción en la Firma. Es licenciada en Derecho y Ciencias Políticas con especialidad en Derecho internacional y estudios jurídicos internacionales por la Universidad de Aix-en-Provence, Francia, con carrera homologada y cédula profesional mexicana.\n\nCuenta con una Maestría en Administración, Gobierno y Políticas Públicas por la Benemérita Universidad Autónoma de Puebla, tres Diplomados en Derecho Ambiental, Responsabilidad Ambiental y Derecho Energético por el Instituto de la Judicatura Federal, así como un Diplomado en Anticorrupción y Compliance por la ICC y un Diplomado como «Oficial de Cumplimiento Normativo» por el Grupo de Investigación, Análisis y Opinión de la Comisión de Transparencia y Anticorrupción de la LXIV Legislatura de la Cámara de Diputados Federal (GIAO).',
      },
    ],
  },
];

function BioModal({ member, onClose }: { member: TeamMemberType; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
        {member.photo && (
          <div
            className="w-24 h-24 rounded-full mb-5 overflow-hidden"
            style={{
              backgroundImage: `url(${member.photo})`,
              backgroundSize: '130%',
              backgroundPosition: 'center 15%',
            }}
          />
        )}
        <span className="inline-block text-xs text-[#C96A3A] font-semibold uppercase tracking-widest mb-4 bg-[#C96A3A]/10 px-3 py-1 rounded-full">
          {member.category}
        </span>
        <h3 className="font-serif text-2xl text-gray-900 mb-1">{member.name}</h3>
        <p className="text-[#3A7A8A] font-medium text-sm mb-6">{member.role}</p>
        <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{member.bio}</p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="block mt-6 text-[#C96A3A] text-sm font-medium hover:underline"
          >
            {member.email}
          </a>
        )}
        {member.phone && (
          <a
            href={`tel:+52${member.phone.replace(/\s/g, '')}`}
            className="block mt-1 text-gray-600 text-sm hover:text-gray-900"
          >
            {member.phone}
          </a>
        )}
      </div>
    </div>
  );
}

export default function LaFirmaPage() {
  const [activeTab, setActiveTab] = useState('somos');
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);

  return (
    <div>
      <PageHero
        title="La Firma"
        subtitle="12 años de excelencia y compromiso con nuestros clientes"
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

      {/* Reconocimientos */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-gray-900">Reconocimientos y Acreditaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((r) => (
              <div key={r.award} className="border-l-4 border-[#C96A3A] pl-5 py-2">
                <p className="font-medium text-gray-900 leading-snug">{r.award}</p>
                <p className="text-sm text-gray-500 mt-1">{r.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-gray-900">Nuestro Equipo</h2>

          {teamCategories.map((category) => (
            <div key={category.label} className="mb-14">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C96A3A] mb-6 pb-3 border-b border-gray-100">
                {category.label}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all flex flex-col"
                  >
                    {member.photo && (
                      <div
                        className="w-20 h-20 rounded-full mb-4 mx-auto overflow-hidden flex-shrink-0"
                        style={{
                          backgroundImage: `url(${member.photo})`,
                          backgroundSize: '130%',
                          backgroundPosition: 'center 15%',
                        }}
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-[#3A7A8A] text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{member.brief}</p>
                    </div>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="mt-5 text-sm font-medium text-[#C96A3A] hover:text-[#B95A2A] transition-colors self-start"
                    >
                      Ver perfil completo →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <BioModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  );
}
