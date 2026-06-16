import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'La Firma', href: '/la-firma' },
  { label: 'Áreas de Práctica', href: '/areas-practica' },
  { label: 'Hub de Inteligencia Comercial y Desarrollo de Negocios', href: '/hub-inversion' },
  { label: 'Nuestro Agente', href: '/simulador' },
];

const moreLinks = [
  { label: 'Medios y Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Política de Privacidad', href: '/privacidad' },
];

export const Footer = () => (
  <footer id="contacto" className="bg-gray-950 text-white pt-16 pb-8 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
      {/* Logo */}
      <div className="lg:col-span-1">
        <img src="/assets/logo-blanco.png" alt="CRZA" className="h-20 object-contain mb-4" />
        <p className="text-white/50 text-xs leading-relaxed">
          Firma de abogados especialistas en análisis, mitigación y administración de Riesgo Legal. 3 continentes, 4 países, 87+ ciudades.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4">Navegación</h4>
        {navLinks.map((l) => (
          <Link key={l.label} to={l.href} className="block text-white/70 hover:text-white text-sm mb-2 transition-colors">{l.label}</Link>
        ))}
      </div>

      {/* Links 2 */}
      <div>
        <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4">Más</h4>
        {moreLinks.map((l) => (
          <Link key={l.label} to={l.href} className="block text-white/70 hover:text-white text-sm mb-2 transition-colors">{l.label}</Link>
        ))}
      </div>

      {/* Contacto */}
      <div>
        <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4">Contacto</h4>
        <p className="text-white/70 text-sm mb-1">56 3699 6662</p>
        <p className="text-white/70 text-sm mb-1">mreyes@crza.com.mx</p>
        <p className="text-white/70 text-sm mb-1">bzavala@crza.com.mx</p>
        <p className="text-white/50 text-xs mt-3 leading-relaxed">
          Av. P.º de la Reforma 560, Lomas - Virreyes, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX
        </p>
        <a
          href="mailto:mreyes@crza.com.mx"
          className="inline-block mt-4 bg-[#C96A3A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#B95A2A] transition-colors"
        >
          Contacto
        </a>
      </div>
    </div>

    {/* Bottom */}
    <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white/30 text-xs">© 2026 Cuenca Reyes Zavala & Asociados. Todos los derechos reservados.</p>
    </div>
  </footer>
);
