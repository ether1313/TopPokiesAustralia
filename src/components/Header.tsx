import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import OnlineUsersSocialProof from './OnlineUsersSocialProof';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/$/, '');
  const isAboutTopPokiesPage = pathname === '/about-toppokiesaustralia';
  const walletStationsHref = isAboutTopPokiesPage ? '/#platforms' : '#platforms';
  const personalizedQuizHref = isAboutTopPokiesPage ? '/#personalized-quiz' : '#personalized-quiz';

  const menuItems = [
    { label: 'Wallet Stations', href: walletStationsHref },
    { label: 'Match Finder', href: personalizedQuizHref },
    { label: 'About Us', href: '/about-toppokiesaustralia' },
  ];

  return (
    <header
      className="relative z-30 w-full
      bg-[#0f2f66] border-b border-blue-500/40
      shadow-[0_10px_22px_rgba(15,47,102,0.28)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* 左邊 Logo + 名稱 */}
          <a href="/" className="flex items-center">
            <div className="flex-shrink-0 relative">
              <img
                src="/headerlogo/TopPokiesAustralia.png"
                alt="TopPokiesAustralia Logo"
                className="relative w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl drop-shadow-[0_0_12px_rgba(37,99,235,0.35)]"
              />
            </div>
            <div className="ml-2 sm:ml-3 leading-tight">
              <span
                className="text-base sm:text-xl lg:text-xl font-bold 
                text-white drop-shadow-[0_1px_1px_rgba(15,47,102,0.4)]"
              >
                TopPokiesAustralia
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-blue-300/60 bg-blue-500/20 px-4 py-2 text-sm lg:text-base font-semibold text-white transition-all duration-300 hover:bg-blue-500/35 hover:border-blue-200/80"
              >
                {item.label}
              </a>
            ))}
            <OnlineUsersSocialProof />
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/60 bg-blue-500/20 text-white shadow-sm"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-1">
              <div className="py-1">
                <OnlineUsersSocialProof />
              </div>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-blue-300/60 bg-blue-500/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500/35"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
