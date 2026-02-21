import { useEffect, useState } from 'react';

const MIN_USERS = 200;
const MAX_USERS = 500;
const INITIAL_USERS = Math.floor(Math.random() * (MAX_USERS - MIN_USERS + 1)) + MIN_USERS;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const OnlineUsersSocialProof = () => {
  const [onlineUsers, setOnlineUsers] = useState(INITIAL_USERS);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const tick = () => {
      const random = Math.random();
      // Biased toward small up-ticks with occasional down-ticks for realism.
      const nextDelta =
        random < 0.5
          ? 1
          : random < 0.72
            ? 2
            : random < 0.84
              ? -1
              : random < 0.93
                ? 0
                : -2;

      setOnlineUsers((prev) => clamp(prev + nextDelta, MIN_USERS, MAX_USERS));
      setDelta(nextDelta);
    };

    tick();
    const timer = window.setInterval(tick, 2600 + Math.floor(Math.random() * 1400));
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-50/95 px-2.5 py-1.5 shadow-[0_4px_10px_rgba(16,185,129,0.14)]">
      <div className="flex min-w-0 items-center gap-1.5">
        <span className="relative inline-flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 border border-emerald-200" />
        </span>
        <p className="truncate text-[11px] font-semibold text-emerald-800 whitespace-nowrap">
          {onlineUsers.toLocaleString('en-AU')} online
        </p>
      </div>
      <div className="shrink-0">
        <span
          className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${
            delta > 0
              ? 'bg-emerald-100 text-emerald-700'
              : delta < 0
                ? 'bg-amber-100 text-amber-700'
                : 'bg-slate-100 text-slate-600'
          }`}
        >
          {delta > 0 ? `+${delta}` : `${delta}`}
        </span>
      </div>
    </div>
  );
};

export default OnlineUsersSocialProof;
