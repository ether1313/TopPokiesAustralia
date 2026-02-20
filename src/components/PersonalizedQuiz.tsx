import { useMemo, useState } from 'react';

type GamePreference = 'slot' | 'live';
type BudgetRange = 'low' | 'mid' | 'high';
type PayoutPriority = 'fast' | 'balanced';

type QuizAnswers = {
  gamePreference: GamePreference | null;
  budgetRange: BudgetRange | null;
  payoutPriority: PayoutPriority | null;
};

type Partner = {
  name: string;
  logo: string;
  url: string;
  minDeposit: number;
  gameTypes: GamePreference[];
  fastPayout: boolean;
};

const partners: Partner[] = [
  { name: 'ACE96AU', logo: '/gameslogo/ace96au.png', url: 'https://ace96au.com/RFGUPARTNERSHIPSEO', minDeposit: 8, gameTypes: ['slot'], fastPayout: true },
  { name: 'BP77', logo: '/gameslogo/bp77.png', url: 'https://bigpay77.net/RFBP77PARNERSHIPSEO', minDeposit: 10, gameTypes: ['slot', 'live'], fastPayout: true },
  { name: 'WINNIE777', logo: '/gameslogo/winnie777.png', url: 'https://winnie777.net/RFWIPARTNERSHIPSEO', minDeposit: 15, gameTypes: ['live'], fastPayout: true },
  { name: 'BYBID9', logo: '/gameslogo/bybid9.png', url: 'https://bybid9.net/RFBYPARTNERSHIPSEO', minDeposit: 10, gameTypes: ['slot'], fastPayout: true },
  { name: 'GUCCI9', logo: '/gameslogo/gucci9.png', url: 'https://gucci9au.org/RFGUPARTNERSHIPSEO', minDeposit: 10, gameTypes: ['slot', 'live'], fastPayout: true },
  { name: 'IPAY9', logo: '/gameslogo/ipay9.png', url: 'https://ipay9aud.com/RFPARNERSHIPSEO', minDeposit: 10, gameTypes: ['live'], fastPayout: true },
  { name: 'KINGBET9', logo: '/gameslogo/kingbet9.png', url: 'https://kingbet9bet.com/RFPARNERSHIPSEO1SEO', minDeposit: 10, gameTypes: ['slot'], fastPayout: true },
  { name: 'ME99', logo: '/gameslogo/me99.png', url: 'https://me99aus.net/RFMEPARTNERSHIPSEO', minDeposit: 10, gameTypes: ['slot', 'live'], fastPayout: true },
  { name: 'MICKY9', logo: '/gameslogo/micky9.png', url: 'https://micky9.net/RFMICKYPARTNERSHIPSEO', minDeposit: 10, gameTypes: ['slot'], fastPayout: true },
  { name: 'MRBEAN9', logo: '/gameslogo/mrbean9.png', url: 'https://mrbean9au.com/RFMRPARTNERSHIPSEO', minDeposit: 5, gameTypes: ['slot'], fastPayout: true },
  { name: 'POKEMON9', logo: '/gameslogo/pokemon9.png', url: 'https://pokemonau.net/RFPOPARTNERSHIPSEO', minDeposit: 20, gameTypes: ['live'], fastPayout: true },
  { name: 'QUEEN13', logo: '/gameslogo/queen13.png', url: 'https://queen13au.com/RFQUPARTNERSHIPSEO', minDeposit: 10, gameTypes: ['slot', 'live'], fastPayout: true },
  { name: 'ROLEX9', logo: '/gameslogo/rolex9.png', url: 'https://rolex9au.com/RFR9PARTNERSHIPSEO', minDeposit: 19, gameTypes: ['slot'], fastPayout: true },
];

const getBudgetTier = (minDeposit: number): BudgetRange => {
  if (minDeposit <= 10) return 'low';
  if (minDeposit <= 15) return 'mid';
  return 'high';
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
};

const PersonalizedQuiz = () => {
  const [answers, setAnswers] = useState<QuizAnswers>({
    gamePreference: null,
    budgetRange: null,
    payoutPriority: null,
  });
  const [recommendations, setRecommendations] = useState<Partner[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const progressCount = useMemo(
    () => Object.values(answers).filter((value) => value !== null).length,
    [answers]
  );
  const isComplete = progressCount === 3;

  const setAnswer = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const getRecommendations = () => {
    if (!isComplete || submitted) return;

    const ranked = partners
      .map((partner) => {
        let score = 0;

        if (answers.gamePreference && partner.gameTypes.includes(answers.gamePreference)) {
          score += 3;
        }

        if (answers.budgetRange) {
          const tier = getBudgetTier(partner.minDeposit);
          if (tier === answers.budgetRange) {
            score += 3;
          } else if (
            (answers.budgetRange === 'mid' && tier === 'low') ||
            (answers.budgetRange === 'high' && tier === 'mid')
          ) {
            score += 1;
          }
        }

        if (answers.payoutPriority === 'fast' && partner.fastPayout) {
          score += 3;
        }
        if (answers.payoutPriority === 'balanced') {
          score += 1;
        }

        return { partner, score };
      })
      .sort((a, b) => b.score - a.score);

    const topScore = ranked[0]?.score ?? 0;
    const candidates = ranked.filter((item) => item.score >= topScore - 1).map((item) => item.partner);
    const randomTop = shuffleArray(candidates).slice(0, 2);
    const fallback = shuffleArray(partners).slice(0, 2);

    setRecommendations(randomTop.length > 0 ? randomTop : fallback);
    setSubmitted(true);
  };

  const optionClass = (active: boolean) =>
    `rounded-lg sm:rounded-xl border px-3 py-2.5 text-[13px] sm:text-sm font-semibold leading-tight transition-all duration-300 ${
      active
        ? 'border-cyan-200 bg-cyan-400/20 text-white sm:shadow-[0_0_16px_rgba(34,211,238,0.3)]'
        : 'border-blue-200/30 bg-blue-900/30 text-blue-100 hover:bg-blue-800/40'
    }`;

  return (
    <section id="personalized-quiz" className="relative overflow-hidden bg-[#081633] py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#15397f] via-[#0b2560] to-[#081633]" />
      <div className="pointer-events-none absolute -top-24 -left-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex rounded-full border border-cyan-200/35 bg-cyan-400/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            Private Suite
          </p>
          <h2 className="mt-3 sm:mt-4 text-white font-lilita font-bold tracking-wide text-[clamp(1.5rem,4.5vw,2.4rem)]">
            Find Your Best-Fit Casino In 5 Seconds
          </h2>
          <p className="mt-2.5 sm:mt-3 text-blue-100/80 text-[13px] sm:text-base">
            Answer 3 quick questions and get 1-2 personalized partner recommendations with direct access links.
          </p>
        </div>

        <div className="mt-6 sm:mt-7 rounded-xl sm:rounded-2xl border border-cyan-200/25 bg-white/5 p-3.5 sm:p-5">
          <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-cyan-100/80">
            <span>Quiz Progress</span>
            <span>{progressCount}/3</span>
          </div>
          <div className="h-2 w-full rounded-full bg-blue-950/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-500"
              style={{ width: `${(progressCount / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5">
          <div className="rounded-xl sm:rounded-2xl border border-blue-200/20 bg-white/5 p-3.5 sm:p-5">
            <p className="text-cyan-100 text-[13px] sm:text-sm font-semibold">You prefer slot or live table?</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                className={optionClass(answers.gamePreference === 'slot')}
                onClick={() => setAnswer('gamePreference', 'slot')}
              >
                SLOT
              </button>
              <button
                type="button"
                className={optionClass(answers.gamePreference === 'live')}
                onClick={() => setAnswer('gamePreference', 'live')}
              >
                LIVE TABLE
              </button>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-blue-200/20 bg-white/5 p-3.5 sm:p-5">
            <p className="text-cyan-100 text-[13px] sm:text-sm font-semibold">Budget range?</p>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <button
                type="button"
                className={optionClass(answers.budgetRange === 'low')}
                onClick={() => setAnswer('budgetRange', 'low')}
              >
                LOW (AUD 10 - 100)
              </button>
              <button
                type="button"
                className={optionClass(answers.budgetRange === 'mid')}
                onClick={() => setAnswer('budgetRange', 'mid')}
              >
                MID (AUD 110 - 300)
              </button>
              <button
                type="button"
                className={optionClass(answers.budgetRange === 'high')}
                onClick={() => setAnswer('budgetRange', 'high')}
              >
                HIGH (AUD 300+)
              </button>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-blue-200/20 bg-white/5 p-3.5 sm:p-5">
            <p className="text-cyan-100 text-[13px] sm:text-sm font-semibold">Withdrawal speed priority?</p>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <button
                type="button"
                className={optionClass(answers.payoutPriority === 'fast')}
                onClick={() => setAnswer('payoutPriority', 'fast')}
              >
                YES, FAST PAYOUT FIRST
              </button>
              <button
                type="button"
                className={optionClass(answers.payoutPriority === 'balanced')}
                onClick={() => setAnswer('payoutPriority', 'balanced')}
              >
                BALANCED, ALL FACTORS
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={getRecommendations}
            disabled={!isComplete || submitted}
            className={`w-full sm:w-auto rounded-lg sm:rounded-xl px-5 py-3 font-lilita tracking-wide text-lg transition-all duration-300 ${
              isComplete && !submitted
                ? 'bg-[#1d4ed8] text-white shadow-md sm:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-[#1e40af] hover:scale-[1.01]'
                : 'bg-blue-900/40 text-blue-200/60 cursor-not-allowed'
            }`}
          >
            {submitted ? 'RESULT READY' : 'GET MY MATCHES'}
          </button>

          {submitted && (
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setRecommendations([]);
                setAnswers({ gamePreference: null, budgetRange: null, payoutPriority: null });
              }}
              className="w-full sm:w-auto rounded-lg sm:rounded-xl border border-cyan-200/30 bg-white/5 px-5 py-3 text-cyan-100 font-semibold hover:bg-white/10 transition-colors"
            >
              RESET QUIZ
            </button>
          )}
        </div>

        {submitted && recommendations.length > 0 && (
          <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 animate-slideIn">
            {recommendations.map((partner) => (
              <div
                key={`${partner.name}-${partner.url}`}
                className="rounded-xl sm:rounded-2xl border border-cyan-200/25 bg-[#153979] sm:bg-gradient-to-br sm:from-[#183f8f] sm:to-[#0c275e] p-4 sm:p-5 shadow-[0_12px_24px_-18px_rgba(8,145,178,0.7)]"
              >
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-cyan-100/75">Recommended Partner</p>
                <div className="mt-2.5 sm:mt-3 rounded-lg sm:rounded-xl border border-cyan-200/20 bg-blue-950/35 px-3 py-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(147,197,253,0.45)]"
                  />
                </div>
                <h3 className="mt-1.5 text-white font-lilita text-xl sm:text-2xl tracking-wide">{partner.name}</h3>
                <p className="mt-2 text-blue-100/85 text-[13px] sm:text-sm">
                  Min deposit AUD {partner.minDeposit} · {partner.fastPayout ? 'Fast payout oriented' : 'Balanced value pick'}
                </p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-cyan-300/90 px-4 py-2 text-sm font-bold text-[#0b2052] hover:bg-cyan-200 transition-colors"
                >
                  CLAIM PARTNER OFFER
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalizedQuiz;
