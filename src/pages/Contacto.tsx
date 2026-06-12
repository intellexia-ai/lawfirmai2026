import { useState, useEffect, useRef } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';
import { Paperclip, X, FileText } from 'lucide-react';

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [archivo, setArchivo] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('crza_analisis');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setForm(prev => ({
          ...prev,
          asunto: `Consulta — Análisis IA: ${data.pais} / ${data.sector}`,
          mensaje: `Solicito una consulta sobre el análisis generado por el Agente CRZ//A:\n\nPaís de origen: ${data.pais}\nSector: ${data.sector}\nPrioridad: ${data.prioridad}`,
        }));
        if (data.pdfBase64 && data.pdfName) {
          const base64 = data.pdfBase64.split(',')[1];
          const binary = atob(base64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          const blob = new Blob([bytes], { type: 'application/pdf' });
          setArchivo(new File([blob], data.pdfName, { type: 'application/pdf' }));
        }
        sessionStorage.removeItem('crza_analisis');
      } catch { /* ignore */ }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar a formulario o email
    console.log('Formulario enviado:', form);
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  return (
    <div>
      <PageHero
        title="Contacto"
        subtitle="Cuéntanos cómo podemos ayudarte"
        videoUrl="https://videos.pexels.com/video-files/5695932/5695932-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <FadeIn delay={0}>
            <h2 className="font-serif text-3xl text-gray-900 mb-8">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7A8A] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7A8A] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <input
                  type="text"
                  value={form.asunto}
                  onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7A8A] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7A8A] focus:border-transparent"
                  required
                />
              </div>

              {/* Adjunto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Archivo adjunto</label>
                {archivo ? (
                  <div className="flex items-center gap-3 bg-[#3A7A8A]/5 border border-[#3A7A8A]/20 rounded-lg px-4 py-3">
                    <FileText size={18} className="text-[#3A7A8A] flex-shrink-0" />
                    <span className="text-sm text-gray-700 flex-1 truncate">{archivo.name}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {(archivo.size / 1024).toFixed(0)} KB
                    </span>
                    <button
                      type="button"
                      onClick={() => setArchivo(null)}
                      className="text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 text-sm text-[#3A7A8A] border border-dashed border-[#3A7A8A]/40 rounded-lg px-4 py-3 w-full hover:bg-[#3A7A8A]/5 transition-colors"
                  >
                    <Paperclip size={16} />
                    Adjuntar archivo (PDF, DOC, imagen…)
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setArchivo(f);
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C96A3A] text-white py-3 rounded-lg font-medium hover:bg-[#B95A2A] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </FadeIn>

          {/* Información de contacto */}
          <FadeIn delay={200}>
            <h2 className="font-serif text-3xl text-gray-900 mb-8">Información de Contacto</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Teléfono</h3>
                <a href="tel:+525525303049" className="block text-[#C96A3A] hover:underline">
                  55 2530 3049
                </a>
                <a href="tel:+525581469882" className="block text-[#C96A3A] hover:underline">
                  55 81 46 98 82
                </a>
                <a href="tel:+525521395193" className="block text-[#C96A3A] hover:underline">
                  55 2139 5193 (Bernardo Camacho Zavala)
                </a>
              </div>

              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Email</h3>
                <a href="mailto:mreyes@crza.com.mx" className="block text-[#C96A3A] hover:underline">
                  mreyes@crza.com.mx
                </a>
                <a href="mailto:bzavala@crza.com.mx" className="block text-[#C96A3A] hover:underline">
                  bzavala@crza.com.mx (Bernardo Camacho Zavala)
                </a>
              </div>

              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Ciudad de México<br />
                  <span className="text-xs italic text-gray-400">(Dirección en actualización)</span>
                </p>
              </div>

              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Horario</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado: 10:00 - 14:00<br />
                  Domingo: Cerrado
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
