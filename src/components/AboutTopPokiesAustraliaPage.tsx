import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

const AboutTopPokiesAustraliaPage: React.FC = () => {
  const highlights = [
    {
      title: 'Online Casino Australia Insights by an Independent Team',
      description:
        'TopPokiesAustralia publishes independent updates on online casino Australia trends, real money pokies, and sports betting platforms. Our editorial process focuses on trusted data, player safety signals, and practical comparisons that help users choose better casino options.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
      imageLeft: true,
    },
    {
      title: 'Trusted iGaming Partnerships for Safer Australian Players',
      description:
        'Our alliance partnership model connects players with vetted casino operators and game providers that support secure payments, transparent offers, and reliable customer support. We highlight high-trust brands and help users avoid risky platforms with weak service standards.',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
      imageLeft: false,
    },
    {
      title: 'Real Money Pokies, Bonus Value, and Better Player Outcomes',
      description:
        'From welcome bonus breakdowns to long-term game value, TopPokiesAustralia helps players compare real money pokies, live casino options, and sports betting offers in one place. Our goal is to improve user outcomes through clearer decisions, faster onboarding, and smarter bankroll flow.',
      image:
        'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=1400&q=80',
      imageLeft: true,
    },
  ];

  const stats: StatItem[] = [
    { value: 33, suffix: '+', label: 'Exclusive iGaming Alliance Partnerships in Australia' },
    { value: 5205, label: 'Player Support Cases Guided Across Casino and Sportsbook Queries' },
    { value: 53, suffix: '+', label: 'Top Game Providers Featured for Real Money Pokies and Casino Titles' },
    { value: 24, suffix: '/7', label: 'Always-On Customer Care and Platform Assistance' },
    { value: 5000, suffix: '+', label: 'Slot Games, Live Casino, and Sports Betting Market Options' },
    { value: 5, suffix: 'S', label: 'Secure, Swift, Stable, Simple, and Smart Transaction Standards' },
  ];

  const statsSectionRef = useRef<HTMLDivElement | null>(null);
  const [animateCycle, setAnimateCycle] = useState(0);

  useEffect(() => {
    const node = statsSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimateCycle((prev) => prev + 1);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">
            About TopPokiesAustralia
          </p>
          <h1 className="mt-4 text-[clamp(1.9rem,5vw,3rem)] font-bold text-[#0f2f66] leading-tight">
            <span className="block text-[#0b2a63] text-[clamp(2.1rem,5.6vw,3.3rem)] drop-shadow-[0_2px_0_rgba(147,197,253,0.35)]">
              TopPokiesAustralia
            </span>
          </h1>
          <p className="mt-4 text-blue-900/80 text-sm sm:text-base leading-relaxed">
            We combine independent casino research with verified partnership intelligence to help Australian players find
            trusted real money pokies, safer payment routes, stronger bonuses, and reliable gaming platforms.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/45 p-5 sm:p-6 md:p-7 shadow-[0_18px_40px_-30px_rgba(15,47,102,0.4)]"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-center ${item.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div className="overflow-hidden rounded-2xl border border-blue-100">
                  <img src={item.image} alt={item.title} className="h-52 sm:h-64 lg:h-72 w-full object-cover" />
                </div>
                <div>
                  <h2 className="text-[#0f2f66] text-xl sm:text-2xl font-bold">{item.title}</h2>
                  <p className="mt-3 text-blue-900/80 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={statsSectionRef}
          className="mt-12 sm:mt-16 rounded-3xl border border-blue-900/80 bg-gradient-to-r from-[#07142f] via-[#0c1c42] to-[#07142f] shadow-[0_22px_60px_-32px_rgba(7,20,47,0.95)] p-5 sm:p-7 lg:p-8"
        >
          <div className="px-1 sm:px-2 pb-4 text-center">
            <h2 className="text-white text-[clamp(1.5rem,4vw,2.1rem)] font-bold">TopPokiesAustralia Platform Performance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="rounded-2xl border border-cyan-400/30 bg-white/5 px-4 py-5 sm:px-5 sm:py-6 text-center backdrop-blur-[1px]"
              >
                <p className="text-white text-4xl sm:text-5xl font-bold">
                  <CountUp
                    key={`${animateCycle}-${index}`}
                    start={0}
                    end={stat.value}
                    duration={1.1}
                    separator=","
                    suffix={stat.suffix ?? ''}
                  />
                </p>
                <p className="mt-3 text-blue-100/85 text-sm sm:text-base leading-relaxed min-h-[3.3rem] sm:min-h-[3.8rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopPokiesAustraliaPage;
