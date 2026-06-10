interface Logo { name: string; }

const clients: Logo[] = [
  { name: 'Huawei' }, { name: 'CNHTC' }, { name: 'TEK' }, { name: 'Marhnos' },
  { name: 'Ceratizit Group' }, { name: 'Voestalpine' }, { name: 'Adler Pelzer Group' }, { name: 'Böhler' },
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
    <div className="overflow-hidden">
      <div className="flex gap-8 animate-scroll">
        {doubled.map((logo, i) => (
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
        ))}
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
