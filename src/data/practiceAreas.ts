export interface PracticeArea {
  id: string;
  num: string;
  title: string;
  short: string;
  full: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'derecho-administrativo',
    num: 'I.',
    title: 'Derecho Administrativo',
    short: 'Las relaciones entre la ciudadanía y la Administración pública son reguladas por el Derecho Administrativo basadas en el supuesto de que el ciudadano se encuentra en desventaja jurídica frente a las instituciones administrativas, ya sea Federales, Estatales o locales.',
    full: 'Las relaciones entre la ciudadanía y la Administración pública son reguladas por el Derecho Administrativo. La adecuada representación y defensa del inversionista, lo empresarios, comerciantes o cualquier persona interesada en obtener un beneficio administrativo como una concesión, una licitación, una licencia, un permiso o una exención, estas actividades cubre el Derecho Administrativo:\n\n• Elaboración y revisión de Contratos Administrativos.\n• Licitaciones Públicas.\n• Derecho Regulatorio para la obtención de concesiones, permisos y autorizaciones administrativas.\n\nEl litigio administrativo se encarga de impugnar los actos administrativos emitidos por la Federación, el Gobierno de la Ciudad de México, las Entidades Federativas y los Municipios, ante los tribunales y juzgados en materia Administrativa a través de: Demanda de Amparo, Juicio de Nulidad, Recurso de revisión, Acciones Colectivas, Responsabilidad Ambiental.',
  },
  {
    id: 'compliance',
    num: 'II.',
    title: 'Compliance y Anticorrupción',
    short: 'El combate a la corrupción o las acciones anticorrupción, aunque conforman un discurso relativamente reciente, también tienen mucho tiempo de estar en el entorno y en el vocabulario de la administración pública y de los ciudadanos.',
    full: 'El combate a la corrupción o las acciones anticorrupción, aunque conforman un discurso relativamente reciente, también tienen mucho tiempo de estar en el entorno y en el vocabulario de la administración pública y de los ciudadanos, sobre todo cuando estos últimos son afectados directamente por ella.\n\nNuestro equipo asesora a empresas nacionales e internacionales en la implementación de programas de compliance, diseño de códigos de ética, y defensa en procedimientos de investigación por actos de corrupción.',
  },
  {
    id: 'comercio',
    num: 'III.',
    title: 'Comercio Internacional',
    short: 'La práctica de CRZ//A está conformada por abogados expertos en las distintas disciplinas que abarca el Comercio, y abordan una amplia variedad de asuntos relacionados con las transacciones internacionales.',
    full: 'La práctica de CRZ//A está conformada por abogados expertos en las distintas disciplinas que abarca el Comercio, y abordan una amplia variedad de asuntos relacionados con las transacciones internacionales, como lo son la importación y exportación de mercancías y el comercio de servicios.\n\n• Trámites de importación y exportación.\n• Identificación de compradores en mercados internacionales.\n• Asesoría en reglas de origen y clasificación arancelaria.\n• Defensa antidumping.',
  },
  {
    id: 'litigio',
    num: 'IV.',
    title: 'Litigio y MASC',
    short: 'Cuenca, Reyes, Zavala y Asociados se ha especializado en prestar servicios de asesoría legal respecto de cualquier asunto contencioso entre particulares, así como servicios de gestiones de cobranza.',
    full: 'Cuenca, Reyes, Zavala y Asociados, S.C. (CRZ//A), se ha especializado en prestar servicios de asesoría legal respecto de cualquier asunto contencioso entre particulares, así como servicios de gestiones de cobranza, ya sea ante tribunales federales, locales o a través de medios alternativos de solución de controversias.\n\nServicios:\n• Litigio Civil y Mercantil\n• Juicios ejecutivos y ordinarios\n• Cobranza judicial y extrajudicial\n• Arbitraje y mediación\n• Acciones colectivas',
  },
  {
    id: 'contencioso',
    num: 'V.',
    title: 'Contencioso',
    short: 'En términos generales, contamos con amplia experiencia en servicios legales relacionados con juicios ordinarios y ejecutivos, ya sean civiles o mercantiles, juicios hipotecarios, procedimientos especiales.',
    full: 'En términos generales, contamos con amplia experiencia en servicios legales relacionados con juicios ordinarios y ejecutivos, ya sean civiles o mercantiles, juicios hipotecarios, procedimientos especiales de ejecución de garantías otorgadas mediante prenda sin transmisión de la posesión, procedimientos de ejecución de garantías fiduciarias y concursos mercantiles.',
  },
  {
    id: 'cartera-vencida',
    num: 'VI.',
    title: 'Dictaminación de Cartera Vencida',
    short: 'Nuestra firma implementa estrategias para mitigar el riesgo de que la cartera vencida se convierta en una cartera incobrable o en su defecto que la recuperación de la cartera sea más ágil.',
    full: 'Nuestra firma implementa estrategias para mitigar el riesgo de que la cartera vencida se convierta en una cartera incobrable o en su defecto que la recuperación de la cartera sea más ágil. Estos servicios se realizan a través de un Due Dilligence, cuyo dictamen final señala las acciones que debe seguir la empresa para mejorar la recuperación de su cartera de clientes.',
  },
  {
    id: 'mediacion',
    num: 'VII.',
    title: 'Mediación Privada',
    short: 'Los créditos mercantiles de cualquier índole, ya sea crédito, préstamo, mutuo, factoraje, compraventa, arrendamiento, depósito, prestación de servicios, transporte, comisión, seguros, fianzas.',
    full: 'Los créditos mercantiles de cualquier índole, ya sea crédito, préstamo, mutuo, factoraje, compraventa, arrendamiento, depósito, prestación de servicios, transporte, comisión, seguros, fianzas, arrendamiento puro y financiero, contratos bursátiles, de franquicia, suministro, comisión, distribución, conflicto de socios, y cualquier otro que sea susceptible de valorarse en dinero, puede someterse a un procedimiento de mediación.',
  },
  {
    id: 'migracion',
    num: 'VIII.',
    title: 'Migración y Asuntos Externos',
    short: 'CRZ//A cuenta con experiencia nacional e internacional apoyando a ejecutivos C-Level y personal de diversas empresas de distintas nacionalidades durante el procedimiento migratorio en México.',
    full: 'CRZ//A cuenta con experiencia nacional e internacional apoyando a ejecutivos C-Level y personal de diversas empresas de distintas nacionalidades durante el procedimiento migratorio en México.\n\nEl enfoque de la Firma tiene un doble objetivo:\na) Apoyar a inversionistas, altos ejecutivos y personal calificado de empresas extranjeras en la obtención de permisos de trabajo y residencia.\nb) Brindar asesoría integral en materia de relaciones laborales internacionales.',
  },
  {
    id: 'inversion-extranjera',
    num: 'IX.',
    title: 'Inversión Extranjera',
    short: 'La Firma tiene un Spin off especializado en la atracción de Inversión Extranjera hacia México con más de 8 años de experiencia siendo un referente a nivel internacional en países como España, US y China.',
    full: 'La Firma tiene un Spin off especializado en la atracción de Inversión Extranjera hacia México con más de 8 años de experiencia siendo un referente a nivel internacional en países como España, US y China principalmente.\n\nLa División de Proyectos de Inversión asesora a empresas y gobiernos en:\n• Selección de sitio y estudios de viabilidad\n• Asesoramiento jurídico y contable\n• Creación de empresas (Soft-Landing)\n• Inteligencia de mercado y análisis sectorial\n• Representación comercial',
  },
  {
    id: 'propiedad-intelectual',
    num: 'X.',
    title: 'Propiedad Intelectual',
    short: 'Asesoramos en el registro, protección y defensa de marcas, patentes, derechos de autor y demás activos de propiedad intelectual ante el IMPI y organismos internacionales.',
    full: 'Asesoramos en el registro, protección y defensa de marcas, patentes, derechos de autor y demás activos de propiedad intelectual ante el IMPI y organismos internacionales.\n\nServicios:\n• Registro de marcas y patentes\n• Licencias y transferencia de tecnología\n• Defensa contra infracción y piratería\n• Protección de datos personales (LFPDPPP)',
  },
  {
    id: 'legaltech',
    num: 'XI.',
    title: 'LegalTech y Telecom',
    short: 'Acompañamos a empresas tecnológicas y de telecomunicaciones en la obtención de concesiones, permisos y en el cumplimiento regulatorio ante el IFT y la SCT.',
    full: 'Acompañamos a empresas tecnológicas y de telecomunicaciones en la obtención de concesiones, permisos y en el cumplimiento regulatorio ante el IFT y la SCT.\n\nÁreas de práctica:\n• Regulación de telecomunicaciones\n• Contratos de licencia de software\n• Ciberseguridad y protección de datos\n• Startups y financiamiento tecnológico\n• Inteligencia artificial y regulación emergente',
  },
  {
    id: 'ambiental',
    num: 'XII.',
    title: 'Derecho Ambiental',
    short: 'Asesoría integral en materia de regulación ambiental, licencias, impacto ambiental y defensa ante autoridades ambientales federales y estatales.',
    full: 'Asesoría integral en materia de regulación ambiental, licencias, impacto ambiental y defensa ante autoridades ambientales federales y estatales.\n\nServicios:\n• Manifestaciones de Impacto Ambiental (MIA)\n• Licencias ambientales y permisos de operación\n• Auditorías ambientales\n• Defensa en procedimientos de inspección y sanción\n• Responsabilidad ambiental empresarial',
  },
];
