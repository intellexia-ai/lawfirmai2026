import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';
import { LogoMarquee } from '../components/ui/LogoMarquee';

const medios = [
  { name: 'Expansión', logo: '/medios/expansion.png' },
  { name: 'ASTUREX — Principado de Asturias', logo: '/medios/asturex.png' },
  { name: 'Global Business Forum Latin America', logo: '/medios/global-business-forum.png' },
  { name: 'CCPIT', logo: '/medios/ccpit.png' },
  { name: 'BID', logo: '/medios/bid.png' },
  { name: 'Expo CIHAC', logo: '/medios/expo-cihac.png' },
  { name: 'La Nueva España', logo: '/medios/la-nueva-espana.png' },
  { name: 'Protocolo Foreign Affairs & Lifestyle', logo: '/medios/protocolo.png' },
];

const articles = [
  {
    title: 'CRZ//A en los Medios: Actualización Legal 2026',
    date: 'Mayo 2026',
    excerpt: 'Mauricio Jaramillo comenta sobre los cambios en normativa de inversión extranjera.',
  },
  {
    title: 'Diplomacia Empresarial: El Nuevo Paradigma',
    date: 'Abril 2026',
    excerpt: 'Juan Carlos Prieto explora cómo las empresas medianas pueden beneficiarse de iniciativas de TIC.',
  },
  {
    title: 'Protección de Datos: Guía para Startups Mexicanas',
    date: 'Marzo 2026',
    excerpt: 'Liv Espinoza brinda asesoramiento sobre compliance en el sector tecnológico.',
  },
];

export default function NoticiasPage() {
  return (
    <div>
      <PageHero
        title="Medios y Noticias"
        subtitle="Lo último en derecho, inversión y diplomacia empresarial"
        videoUrl="https://videos.pexels.com/video-files/7034707/7034707-hd_1280_720_30fps.mp4"
        height="h-96"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <h2 className="font-serif text-3xl text-gray-900 mb-10">Artículos Recientes</h2>

            <div className="space-y-6">
              {articles.map((article, i) => (
                <div
                  key={i}
                  className="border-l-4 border-[#C96A3A] pl-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <p className="text-sm text-[#3A7A8A] font-semibold mb-1">{article.date}</p>
                  <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-[#C96A3A] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                ¿Quieres estar actualizado sobre noticias legales y comerciales?
              </p>
              <a
                href="mailto:info@crza.com.mx"
                className="inline-block bg-[#3A7A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2A6A7A] transition-colors"
              >
                Suscribirse al Newsletter
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#C96A3A] mb-2">
              Presencia
            </p>
            <h2 className="text-center font-serif text-2xl text-gray-900 mb-10">
              Medios y aliados que han hablado de nosotros
            </h2>
            <LogoMarquee logos={medios} duration={35} />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
