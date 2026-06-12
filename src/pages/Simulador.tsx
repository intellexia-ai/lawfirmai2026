import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { Loader2, Sparkles, ArrowRight } from 'lucide-react';

const AGENT_URL = import.meta.env.VITE_AGENT_URL ?? 'http://localhost:8000';

const paises = [
  { value: 'Estados Unidos (USA)', label: '🇺🇸 Estados Unidos' },
  { value: 'China', label: '🇨🇳 China' },
  { value: 'España / Unión Europea', label: '🇪🇸 España / Unión Europea' },
  { value: 'Alemania', label: '🇩🇪 Alemania' },
  { value: 'Reino Unido', label: '🇬🇧 Reino Unido' },
  { value: 'Canadá', label: '🇨🇦 Canadá' },
];

const sectores = [
  { value: 'Manufactura Avanzada (IMMEX)', label: 'Manufactura Avanzada — IMMEX' },
  { value: 'Infraestructura y Energías Renovables', label: 'Infraestructura y Energía Renovable' },
  { value: 'Comercio Digital y E-commerce (T-MEC)', label: 'Comercio Digital & E-commerce (T-MEC)' },
  { value: 'Logística y Zonas Francas (RFE)', label: 'Logística y Zonas Francas (RFE)' },
  { value: 'Venture Capital y LegalTech', label: 'Venture Capital & LegalTech' },
  { value: 'Telecomunicaciones y Tecnología', label: 'Telecomunicaciones & Tecnología' },
];

const prioridades = [
  { value: 'Soft Landing y Reclutamiento de Personal', label: 'Soft Landing y Reclutamiento' },
  { value: 'Estructura de Recinto Fiscalizado Estratégico (RFE)', label: 'Recinto Fiscalizado Estratégico' },
  { value: 'Visas EB-5, Golden Visa o Migración Ejecutiva', label: 'Visas de Inversión / Migración' },
  { value: 'Compliance Normativo y Matriz de Riesgo Ético', label: 'Compliance & Riesgo Ético' },
  { value: 'Litigio Comercial y Mediación Privada', label: 'Litigio Comercial & Mediación' },
  { value: 'Comercio Exterior y Cumplimiento T-MEC', label: 'Comercio Exterior & T-MEC' },
];

function renderSimResult(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.trim() === '') return <div key={i} className="h-3" />;
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} className="font-semibold text-gray-900 mt-4 mb-1">{line.slice(2, -2)}</p>;
    }
    if (/^\*\*(.+)\*\*/.test(line)) {
      return (
        <p key={i} className="text-gray-700 text-sm leading-relaxed">
          {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j}>{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    }
    if (/^[-•] /.test(line)) {
      return (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 ml-2">
          <span className="text-[#C96A3A] mt-1 flex-shrink-0">·</span>
          <span>{line.slice(2)}</span>
        </li>
      );
    }
    return <p key={i} className="text-gray-700 text-sm leading-relaxed">{line}</p>;
  });
}

export default function SimuladorPage() {
  const [pais, setPais] = useState('');
  const [sector, setSector] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const canSubmit = pais && sector && prioridad && !loading;

  const simulate = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setResult(null);
    setError(false);

    const prompt =
      `Actúa como el agente senior de CRZ//A Abogados. Un inversionista solicita un análisis de ruta crítica con los siguientes parámetros:\n\n` +
      `- País de origen de la inversión: ${pais}\n` +
      `- Sector industrial: ${sector}\n` +
      `- Requerimiento prioritario: ${prioridad}\n\n` +
      `Genera un análisis de expansión transnacional hacia México que incluya:\n` +
      `**1. Marco regulatorio aplicable** (2-3 puntos clave)\n` +
      `**2. Implicaciones fiscales y aduaneras** (2-3 puntos)\n` +
      `**3. Riesgos y consideraciones** (2 puntos)\n` +
      `**4. Ruta crítica recomendada** (3-4 pasos)\n` +
      `**5. Cómo CRZ//A puede acompañarte**\n\n` +
      `Sé específico con el sector y el país seleccionado. Proporciona información útil pero indica que para el análisis completo y personalizado es necesario agendar una consulta con nuestros especialistas.`;

    try {
      const res = await fetch(`${AGENT_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt, history: [] }),
      });
      const data = await res.json();
      setResult(data.response);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        title="Simulador de Expansión IA"
        subtitle="Análisis predictivo de ruta crítica para proyectos de inversión transnacional en México"
        videoUrl="https://videos.pexels.com/video-files/5474156/5474156-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-gray-50 py-20 px-6 min-h-[70vh]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Form Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm sticky top-28">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={18} className="text-[#C96A3A]" />
                  <p className="text-xs font-semibold text-[#C96A3A] uppercase tracking-widest">Agente Senior CRZ//A</p>
                </div>
                <h2 className="font-serif text-2xl text-gray-900 mb-6">Parámetros del Proyecto</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      País de Origen de la Inversión
                    </label>
                    <select
                      value={pais}
                      onChange={(e) => setPais(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#3A7A8A] transition-colors"
                    >
                      <option value="">Seleccionar país…</option>
                      {paises.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Sector Industrial Clave
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#3A7A8A] transition-colors"
                    >
                      <option value="">Seleccionar sector…</option>
                      {sectores.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Requerimiento de Mayor Prioridad
                    </label>
                    <select
                      value={prioridad}
                      onChange={(e) => setPrioridad(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#3A7A8A] transition-colors"
                    >
                      <option value="">Seleccionar prioridad…</option>
                      {prioridades.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={simulate}
                    disabled={!canSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-[#C96A3A] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#B95A2A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Generando análisis…
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Generar Ruta Crítica con IA
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  El análisis generado es orientativo. Para una evaluación completa y personalizada, agenda una consulta con nuestros especialistas.
                </p>
              </div>
            </div>

            {/* Result Panel */}
            <div className="lg:col-span-3">
              {!result && !loading && !error && (
                <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-12 text-center">
                  <Sparkles size={40} className="text-gray-200 mx-auto mb-4" />
                  <p className="font-serif text-xl text-gray-400 mb-2">Simulador Cognitivo de Negocios</p>
                  <p className="text-gray-400 text-sm">
                    Define los parámetros de tu proyecto en el panel izquierdo y presiona el botón
                    para obtener un análisis de ruta crítica personalizado.
                  </p>
                </div>
              )}

              {loading && (
                <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
                  <Loader2 size={40} className="text-[#3A7A8A] mx-auto mb-4 animate-spin" />
                  <p className="font-serif text-xl text-gray-700 mb-2">Analizando parámetros…</p>
                  <p className="text-gray-400 text-sm">El agente senior está evaluando el contexto regulatorio, fiscal y de riesgo para tu proyecto.</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
                  <p className="text-red-700 font-medium mb-2">No se pudo conectar con el agente</p>
                  <p className="text-red-500 text-sm">Por favor contáctanos directamente en <a href="mailto:contacto@crza.com.mx" className="underline">contacto@crza.com.mx</a></p>
                </div>
              )}

              {result && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  {/* Result header */}
                  <div className="bg-[#1A1A2E] px-8 py-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-[#C96A3A]" />
                      <p className="text-xs text-[#C96A3A] font-semibold uppercase tracking-widest">Análisis generado</p>
                    </div>
                    <p className="text-white font-serif text-lg">{pais} · {sector}</p>
                    <p className="text-white/50 text-sm">Prioridad: {prioridad}</p>
                  </div>

                  {/* Result body */}
                  <div className="p-8">
                    <ul className="space-y-0.5">
                      {renderSimResult(result)}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-gray-100 bg-gray-50 px-8 py-6">
                    <p className="text-sm text-gray-600 mb-4">
                      Este análisis representa una visión general del marco aplicable a tu proyecto.
                      Para la estrategia completa, agenda una consulta con nuestros especialistas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contacto"
                        className="inline-flex items-center justify-center gap-2 bg-[#C96A3A] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#B95A2A] transition-colors"
                      >
                        Agendar Consulta
                        <ArrowRight size={15} />
                      </Link>
                      <button
                        onClick={() => { setResult(null); setPais(''); setSector(''); setPrioridad(''); }}
                        className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors"
                      >
                        Nuevo análisis
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
