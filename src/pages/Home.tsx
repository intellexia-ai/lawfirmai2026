import { Hero } from '../components/home/Hero';
import { FirmaIntro } from '../components/home/FirmaIntro';
import { CtaSection } from '../components/home/CtaSection';
import { StatsBar } from '../components/home/StatsBar';
import { PracticeAreaCarousel } from '../components/home/PracticeAreaCarousel';
import { LogoCarousel, clients, alliances } from '../components/home/LogoCarousel';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FirmaIntro />
      <CtaSection />
      <StatsBar />
      <PracticeAreaCarousel />
      <LogoCarousel logos={clients} title="Clientes" />
      <LogoCarousel logos={alliances} title="Alianzas" dark />
    </>
  );
}
