import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const platforms = [
  { name: 'BIGPAY77', color: 'text-[#0f2f66]', logo: '/gameslogo/bp77.png' },
  { name: 'BYBID9', color: 'text-[#0f2f66]', logo: '/gameslogo/bybid9.png' },
  { name: 'GUCCI9', color: 'text-[#0f2f66]', logo: '/gameslogo/gucci9.png' },
  { name: 'IPAY9', color: 'text-[#0f2f66]', logo: '/gameslogo/ipay9.png' },
  { name: 'KINGBET9', color: 'text-[#0f2f66]', logo: '/gameslogo/kingbet9.png' },
  { name: 'ME99', color: 'text-[#0f2f66]', logo: '/gameslogo/me99.png' },
  { name: 'MICKY9', color: 'text-[#0f2f66]', logo: '/gameslogo/micky9.png' },
  { name: 'MRBEAN9', color: 'text-[#0f2f66]', logo: '/gameslogo/mrbean9.png' },
  { name: 'PKM9', color: 'text-[#0f2f66]', logo: '/gameslogo/pokemon9.png' },
  { name: 'QUEEN13', color: 'text-[#0f2f66]', logo: '/gameslogo/queen13.png' },
  { name: 'ROLEX9', color: 'text-[#0f2f66]', logo: '/gameslogo/rolex9.png' },
  { name: 'ACE96AU', color: 'text-[#0f2f66]', logo: '/gameslogo/ace96au.png' },
  { name: 'WINNIE777', color: 'text-[#0f2f66]', logo: '/gameslogo/winnie777.png' },
];



const generateRandomWithdrawal = () => {
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  const amount = (Math.random() * (3000 - 100) + 100).toFixed(2);
  const accountNumber = `61${'*'.repeat(6)}${Math.floor(Math.random() * 900) + 100}`;
  
  return {
    id: `${Date.now()}-${Math.random()}`,
    platform: platform.name,
    color: platform.color,
    logo: platform.logo,
    accountNumber,
    amount,
    timestamp: new Date().toLocaleString('en-AU', { 
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    })
  };
};

const LiveWithdrawals: React.FC = () => {
  const [withdrawals, setWithdrawals] = useState(() => {
    return Array.from({ length: 5 }, () => generateRandomWithdrawal());
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWithdrawals(prev => {
        const newWithdrawal = generateRandomWithdrawal();
        const updated = [newWithdrawal, ...prev];
        return updated.slice(0, 5);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-withdrawal" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 外层框框 */}
        <div className="fintech-panel bg-gradient-to-br from-[#04132c] via-[#07214a] to-[#0b2f66] rounded-2xl shadow-[0_14px_34px_rgba(2,6,23,0.35)] border border-sky-400/25 p-4 sm:p-6 lg:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Live Transaction Flow</h2>
              <p className="text-[11px] sm:text-xs text-sky-200/85 font-medium">Realtime Partner Withdrawals</p>
            </div>
            <div className="flex items-center space-x-2 bg-sky-400/20 border border-sky-300/35 px-3 sm:px-4 py-1.5 rounded-full shadow-md">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-100 font-bold text-xs tracking-wide">LIVE</span>
            </div>
          </div>

          {/* Withdrawals List */}
          <div className="space-y-3">
            {withdrawals.map((withdrawal, index) => (
              <div 
                key={withdrawal.id}
                className={`relative w-full bg-[#0c2958]/80 backdrop-blur-sm rounded-xl p-1 border border-blue-300/20 shadow-sm hover:shadow-md transition-all duration-300 ${
                  index === 0 ? 'fintech-glow scale-[1.01] border-cyan-300/45' : ''
                }`}
              >
                {/* 发光特效 (只给最新一条) */}
                {index === 0 && (
                  <div className="absolute inset-0 rounded-xl bg-cyan-300/10 blur-md animate-pulse pointer-events-none"></div>
                )}

                <div className="relative flex items-center justify-between gap-2">
                  
                  {/* Left side */}
                  <div className="flex items-center space-x-2 sm:space-x-3 pl-2">
                    <div className="rounded-[18px] p-[1.5px] bg-gradient-to-r from-blue-700/60 to-sky-500/60 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]">
                      <div className="relative h-[50px] w-[76px] sm:h-[60px] sm:w-[92px] rounded-[16px] bg-gradient-to-br from-[#0a2a5f] to-[#0b2147] border border-sky-200/20 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/10 via-transparent to-blue-900/30 pointer-events-none" />
                        <img 
                          src={withdrawal.logo} 
                          alt={withdrawal.platform} 
                          className="relative z-10 max-w-[82%] max-h-[72%] object-contain drop-shadow-[0_1px_2px_rgba(15,47,102,0.22)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs sm:text-sm font-semibold ${withdrawal.color} text-white`}>
                        {withdrawal.platform}
                      </div>
                      <div className="text-sky-100/70 font-mono text-[11px] sm:text-xs">{withdrawal.accountNumber}</div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="text-right pr-2 shrink-0">
                    {/* 金额加滚动动画 */}
                    <CountUp 
                      end={parseFloat(withdrawal.amount)} 
                      prefix="+" 
                      decimals={2} 
                      duration={1.2} 
                      className="text-cyan-300 font-bold text-sm sm:text-base font-mono tracking-wide"
                    />
                    <div className="text-sky-100/55 text-[11px] sm:text-xs font-mono">{withdrawal.timestamp}</div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWithdrawals;
