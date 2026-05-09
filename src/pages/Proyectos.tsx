import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

export default function ProyectosPage() {
  return (
    <div>
      <PageHero
        title="Proyectos de Inversión"
        subtitle="8+ años especializados en atracción de Inversión Extranjera"
        videoUrl="https://videos.pexels.com/video-files/5721485/5721485-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="mb-12">
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Nuestro Spin-off Especializado</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La División de Proyectos de Inversión de CRZ//A es un referente a nivel internacional en atracción de Inversión Extranjera hacia México. Con más de 8 años de experiencia, somos expertos en España, Estados Unidos y China.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-serif text-xl text-gray-900 mb-3">Servicios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A] mt-1">•</span>
                    <span>Selección de sitio y estudios de viabilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A] mt-1">•</span>
                    <span>Asesoramiento jurídico y contable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A] mt-1">•</span>
                    <span>Creación de empresas (Soft-Landing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A] mt-1">•</span>
                    <span>Inteligencia de mercado y análisis sectorial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A] mt-1">•</span>
                    <span>Representación comercial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3A7A8A] text-white rounded-lg p-6">
                <h3 className="font-serif text-xl mb-3">Alcance Geográfico</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A]">→</span>
                    <span>México (Sede Principal - CDMX)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A]">→</span>
                    <span>España (Asturias)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A]">→</span>
                    <span>Estados Unidos (Austin, Texas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C96A3A]">→</span>
                    <span>China (Joint Venture - SRE)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed">
                Facilitamos el camino de empresas internacionales que desean expandirse a México, proporcionando asesoría integral desde la planeación inicial hasta la operación consolidada en el mercado mexicano.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
