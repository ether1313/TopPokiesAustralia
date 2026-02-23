import React, { useMemo, useState } from 'react';

type Category = 'All' | 'New' | 'Premium' | 'VIP' | 'Bonuses';
const NEW_BADGE_SRC = '/new-badge.png';

// 定义 Platform 类型
type Platform = {
  id: number;
  logo: string;
  minDeposit: string;
  totalGames: string;
  registerFree: string;
  welcomeBonus: string;
  vipFree: string;
  url: string;
  category: Exclude<Category, 'All'>;
};

// 平台数据
const platforms: Platform[] = [
  {
    id: 1,
    logo: '/gameslogo/ace96au.png',
    minDeposit: '8',
    totalGames: '4000+',
    registerFree: '$96',
    welcomeBonus: 'Slot 50%',
    vipFree: '200%',
    url: 'https://ace96au.com/RFGUPARTNERSHIPSEO',
    category: 'New'
  },
  {
    id: 2,
    logo: '/gameslogo/bp77.png',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$187.77',
    welcomeBonus: 'Slot 80%',
    vipFree: '$263.31',
    url: 'https://bigpay77.net/RFBP77PARNERSHIPSEO',
    category: 'VIP'
  },
  {
    id: 3,
    logo: '/gameslogo/winnie777.png',
    minDeposit: '15',
    totalGames: '4000+',
    registerFree: '$113.33',
    welcomeBonus: 'Share Bns $33',
    vipFree: '$299.98',
    url: 'https://winnie777.net/RFWIPARTNERSHIPSEO',
    category: 'Bonuses'
  },
  {
    id: 4,
    logo: '/gameslogo/bybid9.png',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$180',
    welcomeBonus: '50%+$30',
    vipFree: 'Jackpot $5088',
    url: 'https://bybid9.net/RFBYPARTNERSHIPSEO',
    category: 'Bonuses'
  },
  {
    id: 5,
    logo: '/gameslogo/gucci9.png',
    minDeposit: '10',
    totalGames: '4000+',
    registerFree: '$227.99',
    welcomeBonus: 'Slot 50%',
    vipFree: '$299.98',
    url: 'https://gucci9au.org/RFGUPARTNERSHIPSEO',
    category: 'Premium'
  },
  {
    id: 6,
    logo: '/gameslogo/ipay9.png',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$100+$30',
    welcomeBonus: 'Slot 50%',
    vipFree: '$308.88',
    url: 'https://ipay9aud.com/RFPARNERSHIPSEO',
    category: 'VIP'
  },
  {
    id: 7,
    logo: '/gameslogo/kingbet9.png',
    minDeposit: '10',
    totalGames: '4000+',
    registerFree: '$100+$10',
    welcomeBonus: 'Slot 100%',
    vipFree: '$299.98',
    url: 'https://king9au.com/RFPARNERSHIPSEO1SEO',
    category: 'VIP'
  },
  {
    id: 8,
    logo: '/gameslogo/me99.png',
    minDeposit: '10',
    totalGames: '4500+',
    registerFree: '$240.99',
    welcomeBonus: 'Slot 50%',
    vipFree: '$588.88',
    url: 'https://me99aus.net/RFMEPARTNERSHIPSEO',
    category: 'VIP'
  },
  {
    id: 9,
    logo: '/gameslogo/micky9.png',
    minDeposit: '10',
    totalGames: '4800+',
    registerFree: '$113.33',
    welcomeBonus: 'Slot 50%',
    vipFree: '$388.88',
    url: 'https://micky9.net/RFMICKYPARTNERSHIPSEO',
    category: 'Premium'
  },
  {
    id: 10,
    logo: '/gameslogo/mrbean9.png',
    minDeposit: '5',
    totalGames: '4000+',
    registerFree: '$290.99',
    welcomeBonus: 'Monday Bns 60%',
    vipFree: '$308.88',
    url: 'https://mrbean9au.com/RFMRPARTNERSHIPSEO',
    category: 'Bonuses'
  },
  {
    id: 11,
    logo: '/gameslogo/pokemon9.png',
    minDeposit: '20',
    totalGames: '4000+',
    registerFree: '$280.99',
    welcomeBonus: 'Daily Bns 80%',
    vipFree: '$588.88',
    url: 'https://pokemonau.net/RFPOPARTNERSHIPSEO',
    category: 'Bonuses'
  },
  {
    id: 12,
    logo: '/gameslogo/queen13.png',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$186',
    welcomeBonus: 'Slot 50%',
    vipFree: '$588.88',
    url: 'https://queen13au.com/RFQUPARTNERSHIPSEO',
    category: 'Premium'
  },
  {
    id: 13,
    logo: '/gameslogo/rolex9.png',
    minDeposit: '19',
    totalGames: '4000+',
    registerFree: '$129.99',
    welcomeBonus: 'Slot 50%',
    vipFree: '$688.88',
    url: 'https://rolex9au.com/RFR9PARTNERSHIPSEO',
    category: 'Premium'
  }
];


// 打乱数组函数 (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePlatforms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'New', 'Premium', 'VIP', 'Bonuses'];
  const shuffledPlatforms = useMemo(() => {
    const priorityLogos = ['ipay9', 'kingbet9', 'bp77'];
    const fixedTop = priorityLogos
      .map((logoKey) => platforms.find((platform) => platform.logo.includes(`${logoKey}.png`)))
      .filter((platform): platform is Platform => Boolean(platform));

    const fixedTopIds = new Set(fixedTop.map((platform) => platform.id));
    const randomOthers = shuffleArray<Platform>(
      platforms.filter((platform) => !fixedTopIds.has(platform.id))
    );

    return [...fixedTop, ...randomOthers];
  }, []);
  const filteredPlatforms = useMemo(
    () =>
      selectedCategory === 'All'
        ? shuffledPlatforms
        : shuffledPlatforms.filter((platform) => platform.category === selectedCategory),
    [selectedCategory, shuffledPlatforms]
  );

  return (
    <section id="platforms" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-5 sm:mb-6 overflow-x-auto md:overflow-visible scrollbar-hide">
          <div className="min-w-max md:min-w-0 md:w-full flex items-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const isNewCategory = category === 'New';
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 md:flex-1 md:text-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold transition-all duration-300 border ${
                    isNewCategory
                      ? isActive
                        ? 'bg-[#ec2a2a] text-white border-[#ef4444] animate-new-tab-breathe-active'
                        : 'bg-white text-[#dc2626] border-[#ef4444] hover:bg-white animate-new-tab-breathe'
                      : isActive
                        ? 'bg-[#0f2f66] text-white border-[#0f2f66] shadow-[0_6px_14px_rgba(15,47,102,0.25)]'
                        : 'bg-white text-[#0f2f66] border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="
                relative rounded-2xl overflow-hidden 
                border border-blue-100
                shadow-[0_10px_24px_rgba(15,47,102,0.12)] 
                hover:shadow-[0_14px_32px_rgba(15,47,102,0.22)] 
                transition-all duration-500 
                hover:scale-[1.03] 
                w-full
              "
            >
              {/* 上半部分 */}
              <div className="bg-[#0f2f66] text-white py-2 px-3 sm:px-5 grid grid-cols-3 items-center w-full">
                <div className="flex justify-start items-center w-full">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <img
                      src={platform.logo}
                      alt="Platform Logo"
                      className="w-[130px] h-[42px] sm:w-[180px] sm:h-[60px] lg:w-[220px] lg:h-[74px] 
                        object-contain drop-shadow-lg filter brightness-145"
                    />
                    {platform.category === 'New' && (
                      <img
                        src={NEW_BADGE_SRC}
                        alt="New"
                        className="self-start -mt-4 sm:-mt-2 lg:-mt-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]"
                      />
                    )}
                  </div>
                </div>

                <div></div>

                <div className="w-full flex justify-end items-center divide-x divide-blue-300/35">
                  <div className="pr-2 sm:pr-3 text-left">
                    <div className="text-[9px] sm:text-[11px] lg:text-[12px] font-medium opacity-75">
                      MIN DEPOSIT
                    </div>
                    <div className="text-[17px] sm:text-[22px] lg:text-[24px] font-lilita text-white whitespace-nowrap font-bold">
                      {platform.minDeposit}{" "}
                      <span className="text-[11px] sm:text-[13px] lg:text-[14px] font-bold">
                        AUD
                      </span>
                    </div>
                  </div>

                  <div className="pl-3 sm:pl-5 text-right pr-1 sm:pr-2">
                    <div className="text-[9px] sm:text-[11px] lg:text-[12px] font-medium opacity-75">
                      TOTAL GAMES
                    </div>
                    <div className="text-[17px] sm:text-[22px] lg:text-[24px] font-lilita text-white whitespace-nowrap font-bold">
                      {platform.totalGames}
                    </div>
                  </div>
                </div>
              </div>

              {/* 下半部分（減少左右留白版本） */}
              <div className="bg-blue-50/60 p-4 sm:p-5 text-[#0f2f66] w-full">
                <div
                  className="
                    grid grid-cols-[1fr_1fr_1fr] items-center text-center mb-4 sm:mb-5 w-full
                    divide-x divide-blue-200
                  "
                >
                  {/* 左 */}
                  <div className="flex flex-col items-center px-1 sm:px-2 gap-1">
                    <div className="text-[12px] sm:text-[14px] lg:text-[15px] font-medium opacity-70 leading-tight">
                      Register Free
                    </div>
                    <div className="text-[18px] sm:text-[26px] lg:text-[28px] font-lilita text-[#0f2f66] whitespace-nowrap leading-none font-bold">
                      {platform.registerFree}
                    </div>
                  </div>

                  {/* 中 */}
                  <div className="flex flex-col items-center px-1 sm:px-2 gap-1">
                    <div className="text-[12px] sm:text-[14px] lg:text-[15px] font-medium opacity-70 leading-tight">
                      Welcome Bonus
                    </div>
                    <div className="text-[18px] sm:text-[26px] lg:text-[28px] font-lilita text-[#0f2f66] whitespace-nowrap leading-none font-bold">
                      {platform.welcomeBonus}
                    </div>
                  </div>

                  {/* 右 */}
                  <div className="flex flex-col items-center px-1 sm:px-2 gap-1">
                    <div className="text-[12px] sm:text-[14px] lg:text-[15px] font-medium opacity-70 leading-tight">
                      VIP Special
                    </div>
                    <div className="text-[18px] sm:text-[26px] lg:text-[28px] font-lilita text-[#0f2f66] whitespace-nowrap leading-none font-bold">
                      {platform.vipFree}
                    </div>
                  </div>
                </div>

                {/* CTA 按鈕 */}
                <button
                  onClick={() => window.open(platform.url, "_blank")}
                  className="claim-attention-ring relative w-full bg-[#1d4ed8] rounded-xl py-2 sm:py-2.5 hover:bg-[#1e40af] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_12px_rgba(15,47,102,0.35)]"
                >
                  <div className="w-full flex items-center justify-center space-x-1 sm:space-x-2 font-lilita">
                    <span className="text-[clamp(16px,2vw,28px)] font-bold tracking-wide text-white animate-heartbeat-text">
                      Claim Now
                    </span>
                  </div>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePlatforms;