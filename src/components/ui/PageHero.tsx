interface Props {
  title: string;
  subtitle?: string;
  videoUrl?: string;
  imageUrl?: string;
  imagePosition?: string;
  height?: string;
  textPosition?: 'center' | 'bottom';
}

export const PageHero = ({
  title,
  subtitle,
  videoUrl,
  imageUrl,
  imagePosition = 'center center',
  height = 'h-96',
  textPosition = 'bottom',
}: Props) => (
  <div className={`relative w-full ${height} overflow-hidden bg-gray-900`}>
    {imageUrl ? (
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ objectPosition: imagePosition }}
      />
    ) : videoUrl ? (
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        onError={(e) => console.error('Video failed to load:', videoUrl, e)}
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(() => console.log('Autoplay blocked'));
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    ) : null}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black/40 to-black" />
    <div
      className={`relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16 ${
        textPosition === 'bottom'
          ? 'justify-end pb-12 pt-24'
          : 'justify-center pt-28 md:pt-24'
      }`}
    >
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/80 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  </div>
);
