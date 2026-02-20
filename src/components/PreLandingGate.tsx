import { useEffect, useMemo, useRef, useState } from 'react';

type PreLandingGateProps = {
  onEnter: () => void;
};

type WinFeedItem = {
  id: number;
  player: string;
  provider: string;
  amount: string;
  city: string;
  secondsAgo: number;
};

const games = [
  'PLAYTECH',
  'YEEBET',
  'BIG GAMING',
  'SEXY BACCARAT',
  'CT855',
  'PRAGMATIC PLAY',
  'JDB2-3 [SPRIBE]',
  'EPICWIN',
  'MACROSS [ACEWIN]',
  'WF',
  'RG2',
  'RG [RichGaming]',
  'JILI',
  'PP-1 [PragmaticPlay Slot]',
  'WOW [WOWGAMING]',
  'DGS [DRAGOONSOFT]',
  'ILOVEU',
  'HBNR [HABANERO]',
  'AFBSLOT',
  'AESG-1 [PragmaticPlay]',
  'PUSSY',
  'JDB-1 [JDB-SLOT]',
  'AESG-3 [PGSoft]',
  'SCRATCH',
  'UUS [UU Slot]',
  'SLOTMANIA [VPLUS]',
  'A1 [IMPERIUM]',
  'LFC',
  'GMSL1 [LIVE22]',
  'YGR',
  'JOKER',
  'PEGS [PEGASUS]',
  'VP',
  'CQ-1 [CQ9 SLOT]',
  'ADVP [AdvantPlay]',
  'MARIO',
  'AESG-7 [Habanero]',
  'AWC-16 [FACHAI]',
  'AWC-17 [FASTSPIN]',
  'AWC-20 [PLAYTECH-SLOT]',
  'APO [APOLLO]',
  'RICH88',
  'KAYA918',
  'FC [FACHAI]',
  'AESG-5 [Playson]',
  'XE88',
  'NS [Nextspin]',
  'SPADE',
  'YBG [YellowBet]',
  'WIN38',
  'PLAYSTAR',
  'CROWDPLAY',
  'KING888H5 [888KING-H5]',
  'CT',
  'KISS918',
  'MG888H5 [MEGA888H5]',
  'ACE333',
  'BP [BIGPOT]',
  'PGS',
  'BT [BT Gaming]',
  'CG [CREATIVE GAMING]',
  'CLOTPLAY',
  'MEGA-1 [MEGA888-SLOT]',
  'BNG [BOOONGO]',
  'GMSDG [DREAM GAMING]',
].map((game) => game.toUpperCase());

const cities = [
  'Sydney',
  'Melbourne',
  'Brisbane',
  'Perth',
  'Adelaide',
  'Canberra',
  'Gold Coast',
  'Newcastle',
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const randomFrom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const makeMaskedPlayer = () => {
  const first = randomFrom(alphabet.split(''));
  const second = randomFrom(alphabet.split(''));
  const tail = Math.floor(100 + Math.random() * 900);
  return `${first}${second}******${tail}`;
};

const makeAmount = () => {
  const value = Math.floor(80 + Math.random() * 2420);
  return value.toLocaleString('en-AU');
};

const makeFeedItem = (id: number): WinFeedItem => ({
  id,
  player: makeMaskedPlayer(),
  provider: randomFrom(games),
  amount: makeAmount(),
  city: randomFrom(cities),
  secondsAgo: 0,
});

const PreLandingGate = ({ onEnter }: PreLandingGateProps) => {
  const FADE_DURATION_MS = 320;
  const seedItems = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        ...makeFeedItem(index + 1),
        secondsAgo: (index + 1) * 6,
      })),
    []
  );

  const [feedItems, setFeedItems] = useState<WinFeedItem[]>(seedItems);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const idRef = useRef(seedItems.length + 1);
  const closeTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    let pushTimeout: number | undefined;

    const nextDelay = () => {
      const isSlowGap = Math.random() < 0.25;
      return isSlowGap
        ? 2600 + Math.floor(Math.random() * 2200) // 2.6s - 4.8s
        : 900 + Math.floor(Math.random() * 1500); // 0.9s - 2.4s
    };

    const scheduleNextPush = () => {
      pushTimeout = window.setTimeout(() => {
        setFeedItems((prev) => {
          const next = makeFeedItem(idRef.current++);
          return [next, ...prev].slice(0, 10);
        });
        scheduleNextPush();
      }, nextDelay());
    };

    scheduleNextPush();

    const ageTimer = window.setInterval(() => {
      setFeedItems((prev) => {
        return prev.map((item) => ({
          ...item,
          secondsAgo: Math.min(item.secondsAgo + 1, 59),
        }));
      });
    }, 1000);

    return () => {
      if (pushTimeout !== undefined) {
        window.clearTimeout(pushTimeout);
      }
      window.clearInterval(ageTimer);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== undefined) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setIsVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      onEnter();
    }, FADE_DURATION_MS);
  };

  return (
    <section
      className={`fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
      aria-label="Pre landing live win feed overlay"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_55%)]" />

      <div className="relative h-full w-full px-4 py-8 sm:px-6 md:py-10 flex items-center justify-center">
        <div
          className={`w-full max-w-2xl rounded-3xl border border-cyan-200/35 bg-[#071a42]/95 shadow-[0_24px_80px_-32px_rgba(8,145,178,0.75)] transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-[0.98]'
          }`}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Live win feed popup"
        >
          <div className="relative border-b border-cyan-200/20 px-5 py-4 sm:px-6">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close pre landing popup"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/35 bg-blue-950/60 text-cyan-100 transition-colors hover:bg-blue-900/80"
            >
              <span className="text-lg leading-none">x</span>
            </button>
            <h2 className="mt-1 text-white text-xl sm:text-2xl font-lilita tracking-wide font-bold">LIVE WIN FEED</h2>

          </div>

          <div className="px-4 py-4 sm:px-6">
            <div className="rounded-2xl border border-cyan-200/20 bg-slate-900/55 p-2 sm:p-3 max-h-[360px] overflow-hidden">
              <div className="space-y-2">
                {feedItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`rounded-xl border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
                      index === 0
                        ? 'border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                        : 'border-blue-200/15 bg-blue-950/45'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="min-w-0 truncate text-cyan-100 text-sm sm:text-[15px] font-semibold">
                        {item.player} won <span className="text-emerald-300">AUD ${item.amount}</span>
                      </p>
                      <span className="text-[10px] sm:text-xs text-cyan-100/70 whitespace-nowrap">
                        {item.secondsAgo === 0 ? 'just now' : `${item.secondsAgo}s ago`}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] sm:text-xs text-blue-100/80 truncate">
                      {item.provider} • {item.city}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded-xl border border-cyan-200/40 bg-[#1d4ed8] px-5 py-3 text-white shadow-[0_0_22px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.01] hover:bg-[#1e40af]"
              >
                <span className="relative flex items-center justify-center gap-2 font-lilita tracking-wide text-lg font-bold">
                  <span>ENTER SITE</span>
                  <span className="text-base">{'>'}</span>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLandingGate;
