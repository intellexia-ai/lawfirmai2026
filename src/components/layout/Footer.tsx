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
        {['Home', 'La Firma', 'Áreas de Práctica', 'Hub de Inteligencia Comercial y Desarrollo de Negocios', 'Nuestro Agente'].map((l) => (
          <a key={l} href="#" className="block text-white/70 hover:text-white text-sm mb-2 transition-colors">{l}</a>
        ))}
      </div>

      {/* Links 2 */}
      <div>
        <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4">Más</h4>
        {['Medios y Noticias', 'Contacto', 'Política de Privacidad'].map((l) => (
          <a key={l} href="#" className="block text-white/70 hover:text-white text-sm mb-2 transition-colors">{l}</a>
        ))}
      </div>

      {/* Contacto */}
      <div>
        <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4">Contacto</h4>
        <p className="text-white/70 text-sm mb-1">55 2530 3049 | 55 81 46 98 82</p>
        <p className="text-white/70 text-sm mb-1">mreyes@crza.com.mx</p>
        <p className="text-white/50 text-xs mt-3 leading-relaxed">
          Avenida Río Churubusco 601, Coyoacán, CDMX, C.P. 03330, Piso 10, oficina 111, Torre Mitikah
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
