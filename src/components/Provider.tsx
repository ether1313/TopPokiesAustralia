import React, { useRef } from 'react';

type ProviderBrand = {
  name: string;
  logo: string;
};

type GameBanner = {
  title: string;
  image: string;
  reels: number;
  paylines: number;
  rtp: string;
};

const providerBrands: ProviderBrand[] = [
  { name: 'JILI', logo: '/provider/jili.png' },
  { name: 'BNG', logo: '/provider/bng.png' },
  { name: 'VPOWER', logo: '/provider/vpower.png' },
  { name: 'PEGASUS', logo: '/provider/pegasus.png' },
  { name: 'CQ9', logo: '/provider/cq9.png' },
  { name: 'RICH GAMING', logo: '/provider/rich-gaming.png' },
  { name: 'ADVANT PLAY', logo: '/provider/advantplay.svg' },
  { name: 'VPLUS', logo: '/provider/vplus.png' },
];

const gameBanners: GameBanner[] = [
  {
    title: 'KRAKEN QUEEN',
    image: '/games/game1.png',
    reels: 5,
    paylines: 50,
    rtp: '98.24%',
  },
  {
    title: 'HOT CHILLI',
    image: '/games/game2.png',
    reels: 5,
    paylines: 40,
    rtp: '97.30%',
  },
  {
    title: 'GATE OF OLMPUS',
    image: '/games/game3.png',
    reels: 5,
    paylines: 20,
    rtp: '98.24%',
  },
  {
    title: 'ROMA',
    image: '/games/game4.png',
    reels: 5,
    paylines: 20,
    rtp: '98.56%',
  },
  {
    title: "SAHARA GOLD",
    image: '/games/game5.png',
    reels: 5,
    paylines: 25,
    rtp: '97.82%',
  },
  {
    title: "MAGIC APPLE",
    image: '/games/game6.png',
    reels: 5,
    paylines: 25,
    rtp: '97.51%',
  },
];

const randomPartnerLinks = [
  'https://ipay9aud.com/RFPARNERSHIPSEO',
  'https://king9au.com/RFPARNERSHIPSEO1SEO',
  'https://bigpay77.net/RFBP77PARNERSHIPSEO',
  'https://rolex9au.com/RFR9PARTNERSHIPSEO',
  'https://bybid9.net/RFBYPARTNERSHIPSEO',
  'https://queen13au.com/RFQUPARTNERSHIPSEO',
  'https://me99aus.net/RFMEPARTNERSHIPSEO',
  'https://gucci9au.org/RFGUPARTNERSHIPSEO',
  'https://mrbean9au.com/RFMRPARTNERSHIPSEO',
  'https://pokemonau.net/RFPOPARTNERSHIPSEO',
  'https://micky9.net/RFMICKYPARTNERSHIPSEO',
  'https://winnie777.net/RFWIPARTNERSHIPSEO',
  'https://ace96au.com/RFGUPARTNERSHIPSEO',
];

const Provider: React.FC = () => {
  const bannerScrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBanners = (direction: 'left' | 'right') => {
    const container = bannerScrollerRef.current;
    if (!container) return;

    const scrollAmount = Math.max(280, container.clientWidth * 0.65);
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const openRandomPartnerLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * randomPartnerLinks.length);
    const randomUrl = randomPartnerLinks[randomIndex];
    window.open(randomUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden py-12 bg-[#070e2a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_85%_78%,rgba(59,130,246,0.24),transparent_38%),linear-gradient(180deg,#0a1235_0%,#070e2a_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/30 bg-blue-950/40 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_40px_-16px_rgba(56,189,248,0.55)]">
          <div className="mb-8 text-center">
            <p className="inline-flex px-3 py-1 rounded-full border border-cyan-300/45 text-cyan-200 text-xs tracking-[0.2em] uppercase">
              iGaming Provider Brands
            </p>
            <h2 className="mt-3 text-white font-bold text-[clamp(1.5rem,4.2vw,2.25rem)]">
              Top Rated Provider
            </h2>
            <p className="mt-2 text-blue-100/75 text-sm sm:text-base">
            Our featured providers are popular among players for their competitive RTP rates, reliable performance, and immersive gaming experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5">
            {providerBrands.map((brand) => (
              <div
                key={brand.name}
                className="group relative rounded-2xl border border-cyan-300/25 bg-gradient-to-b from-blue-900/55 to-blue-950/70 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/65 hover:shadow-[0_0_26px_-10px_rgba(103,232,249,0.8)]"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)]"></div>
                <img
                  src={brand.logo}
                  alt={`${brand.name} provider logo`}
                  className="relative h-8 sm:h-12 md:h-14 w-full object-contain brightness-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="mb-4 sm:mb-5 flex items-end justify-between gap-4">
              <h3 className="text-white font-semibold text-lg sm:text-xl">
                Recommended Games
              </h3>
              <div className="hidden lg:flex items-center gap-2">
                <p className="text-cyan-100/70 text-xs mr-1">
                  Click arrows to slide
                </p>
                <button
                  type="button"
                  onClick={() => scrollBanners('left')}
                  aria-label="Scroll banners left"
                  className="h-9 w-9 rounded-full border border-cyan-300/45 text-cyan-100 hover:text-white hover:border-cyan-200 hover:bg-cyan-300/10 transition-colors"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  onClick={() => scrollBanners('right')}
                  aria-label="Scroll banners right"
                  className="h-9 w-9 rounded-full border border-cyan-300/45 text-cyan-100 hover:text-white hover:border-cyan-200 hover:bg-cyan-300/10 transition-colors"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <div
              ref={bannerScrollerRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            >
              {gameBanners.map((game) => (
                <a
                  key={game.title}
                  href="#"
                  onClick={openRandomPartnerLink}
                  className="group shrink-0 snap-start basis-[82%] sm:basis-[48%] lg:basis-[31%] xl:basis-[19%] rounded-2xl overflow-hidden border border-blue-200/20 bg-[#0f1a48] hover:border-cyan-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_22px_-10px_rgba(103,232,249,0.95)]"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-36 sm:h-40 w-full object-contain bg-black/20 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="p-3">
                    <p className="text-white font-bold text-sm sm:text-base truncate">
                      {game.title}
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-1 text-center">
                      <div>
                        <p className="text-[10px] text-blue-100/75 uppercase tracking-wide">Reels</p>
                        <p className="text-[11px] sm:text-xs text-white font-semibold">{game.reels}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-100/75 uppercase tracking-wide">Paylines</p>
                        <p className="text-[11px] sm:text-xs text-white font-semibold">{game.paylines}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-100/75 uppercase tracking-wide">RTP</p>
                        <p className="text-[11px] sm:text-xs text-cyan-200 font-semibold">{game.rtp}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provider;
