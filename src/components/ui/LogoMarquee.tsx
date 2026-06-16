interface Logo {
  name: string;
  logo: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  /** Segundos que tarda en completar una vuelta. Más alto = más lento. */
  duration?: number;
}

/**
 * Carrusel infinito de logos con scroll automático horizontal.
 * Duplica la lista para lograr el bucle continuo y se pausa al hacer hover.
 */
export function LogoMarquee({ logos, duration = 40 }: LogoMarqueeProps) {
  const items = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="flex w-max animate-marquee items-center"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {items.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center px-6 md:w-52"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-16 max-w-full object-contain transition-transform duration-300 hover:scale-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
