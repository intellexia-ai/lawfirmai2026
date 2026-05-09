export const Navbar = () => {
  const links = ['Servicios', 'Nosotros', 'Clientes', 'Contacto'];

  return (
    <nav className="px-6 md:px-12 lg:px-16 pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight text-white leading-tight">
          <span className="text-xl">CRZA</span>
          <span className="hidden md:block text-xs font-light text-gray-400 tracking-wide">Cuenca Reyes Zavala & Asociados</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-300 hover:text-gray-100 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
};
