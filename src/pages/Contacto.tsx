import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });

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
                <a href="tel:+525525303049" className="text-[#C96A3A] hover:underline">
                  55 2530 3049
                </a>
                <br />
                <a href="tel:+525581469882" className="text-[#C96A3A] hover:underline">
                  55 81 46 98 82
                </a>
              </div>

              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Email</h3>
                <a href="mailto:mreyes@crza.com.mx" className="text-[#C96A3A] hover:underline">
                  mreyes@crza.com.mx
                </a>
              </div>

              <div className="border-l-4 border-[#3A7A8A] pl-6">
                <h3 className="font-serif text-lg text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Avenida Río Churubusco 601<br />
                  Coyoacán, CDMX<br />
                  C.P. 03330<br />
                  Piso 10, oficina 111<br />
                  Torre Mitikah
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

              <div className="flex gap-4 pt-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#3A7A8A] text-white flex items-center justify-center hover:bg-[#2A6A7A] transition-colors text-sm"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
