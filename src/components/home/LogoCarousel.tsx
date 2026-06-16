interface Logo { name: string; logo?: string; }

const clients: Logo[] = [
  { name: 'Huawei', logo: '/clientes/huawei.png' },
  { name: 'Autel', logo: '/clientes/autel.png' },
  { name: 'Sanxing', logo: '/clientes/sanxing.png' },
  { name: 'Nansen', logo: '/clientes/nansen.png' },
  { name: 'TEK', logo: '/clientes/tek.png' },
  { name: 'Kerui Petroleum', logo: '/clientes/kerui-petroleum.png' },
  { name: 'MexMar', logo: '/clientes/mexmar.png' },
  { name: 'Ceratizit Group', logo: '/clientes/ceratizit-group.png' },
  { name: 'Hughes', logo: '/clientes/hughes.png' },
  { name: 'Carcoustics', logo: '/clientes/carcoustics.png' },
  { name: 'Portafolio de Negocios', logo: '/clientes/portafolio-de-negocios.png' },
  { name: 'Costa Canuva', logo: '/clientes/costa-canuva.png' },
  { name: 'Grupo Avanzia', logo: '/clientes/grupo-avanzia.png' },
  { name: 'Saint-Gobain', logo: '/clientes/saint-gobain.png' },
  { name: 'GEN', logo: '/clientes/gen.png' },
  { name: 'Böhler', logo: '/clientes/bohler.png' },
  { name: 'Antolin', logo: '/clientes/antolin.png' },
  { name: 'Bontu', logo: '/clientes/bontu.png' },
  { name: 'Perseus', logo: '/clientes/perseus.png' },
  { name: 'LS telcom', logo: '/clientes/ls-telcom.png' },
  { name: 'NEC', logo: '/clientes/nec.png' },
  { name: 'U.S. Meat Export Federation', logo: '/clientes/us-meat-export-federation.png' },
  { name: 'Marhnos', logo: '/clientes/marhnos.png' },
  { name: 'Alpha Credit', logo: '/clientes/alpha-credit.png' },
];

const alliances: Logo[] = [
  { name: 'México Business' }, { name: 'IDEPA' }, { name: 'InvestHK' }, { name: 'CEEI Asturias' },
  { name: 'CMIC' }, { name: 'Horizon' }, { name: 'ExpoCIHAC' }, { name: 'Energy Mexico' },
];

interface Props {
  logos: Logo[];
  title: string;
  dark?: boolean;
}

const LogoTrack = ({ logos, dark }: { logos: Logo[]; dark: boolean }) => {
  const doubled = [...logos, ...logos];
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div
        className="flex gap-8 animate-scroll w-max"
        style={{ animationDuration: `${Math.max(28, logos.length * 3)}s` }}
      >
        {doubled.map((logo, i) =>
          logo.logo ? (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-24 w-44 px-6"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="max-h-16 max-w-full object-contain transition-transform duration-300 hover:scale-125"
              />
            </div>
          ) : (
            <div
              key={i}
              className={`flex-shrink-0 px-8 py-4 rounded-lg border text-sm font-medium whitespace-nowrap ${
                dark
                  ? 'border-white/20 text-white/70 bg-white/5'
                  : 'border-gray-200 text-gray-500 bg-white'
              }`}
            >
              {logo.name}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export const LogoCarousel = ({ logos, title, dark = false }: Props) => (
  <section className={`py-16 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <h3 className={`text-center text-lg font-light mb-8 tracking-wide ${dark ? 'text-white' : 'text-gray-700'}`}>
        {title}
      </h3>
      <LogoTrack logos={logos} dark={dark} />
    </div>
  </section>
);

export { clients, alliances };
