import { AnimatedHeading } from '../ui/AnimatedHeading';
import { FadeIn } from '../ui/FadeIn';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-14 lg:pb-20">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left */}
            <div>
              <AnimatedHeading text={'\"Think Global,\nAct Local, Be Local\".'} />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg">
                  Nuestro enfoque de servicio nos permite ofrecer soluciones personalizadas en cada etapa o negocio de nuestros clientes
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#firma"
                    className="bg-[#C96A3A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B95A2A] transition-colors"
                  >
                    La Firma
                  </a>
                  <a
                    href="#contacto"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Contacto
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right */}
            <FadeIn delay={1400} duration={1000}>
              <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light text-white font-serif">
                    Legal. Inteligencia Comercial. Diplomacia.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
