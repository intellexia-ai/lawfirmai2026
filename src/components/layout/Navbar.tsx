import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'La firma', href: '/la-firma' },
  { label: 'Áreas de Práctica', href: '/areas-practica' },
  { label: 'Proyectos de Inversión', href: '/proyectos' },
  { label: 'Servicios Especializados', href: '/servicios' },
  { label: 'Medios y Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'bg-[#3A7A8A] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className={`px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-8'
      }`}>
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo-blanco.png"
            alt="Cuenca Reyes Zavala & Asociados"
            className={`object-contain transition-all duration-500 ${
              scrolled ? 'h-12 md:h-14' : 'h-32 md:h-48'
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-white/90 hover:text-white font-light tracking-wide transition-all duration-500 whitespace-nowrap ${
                scrolled ? 'text-xs' : 'text-sm'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className={`hidden md:inline-block bg-[#C96A3A] text-white rounded-full font-medium hover:bg-[#B95A2A] transition-all duration-500 ${
              scrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-base'
            }`}
          >
            Contacto
          </Link>
          <button
            className="lg:hidden text-white z-50 relative p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed lg:hidden top-0 left-0 right-0 w-full h-[100dvh] bg-[#3A7A8A] flex flex-col px-6 pt-32 pb-6 animate-in slide-in-from-top duration-300 z-40 overflow-y-auto">
          {links.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-3 text-base text-white/90 hover:text-white hover:translate-x-1 transition-all font-light tracking-wide border-b border-white/5 last:border-b-0"
              onClick={() => setMenuOpen(false)}
              style={{ animation: `slideIn 0.3s ease-out ${i * 50}ms forwards`, opacity: 0 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
