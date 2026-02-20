import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalizedQuiz from './components/PersonalizedQuiz';
import GamePlatforms from './components/GamePlatforms';
import LiveWithdrawals from './components/LiveWithdrawals';
import PlayerReviews from './components/PlayerReviews';
import Certifications from './components/Certifications';
import Provider from './components/Provider';
import AboutUs from './components/AboutUs';
import AboutTopPokiesAustraliaPage from './components/AboutTopPokiesAustraliaPage';
import Footer from './components/Footer';
import PreLandingGate from './components/PreLandingGate';
import SupportSection from './components/SupportSection';

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '');
  const isAboutTopPokiesPage = pathname === '/about-toppokiesaustralia';
  const baseUrl = 'https://toppokiesaustralia.net';
  const [hasEnteredPreLanding, setHasEnteredPreLanding] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigationEntry?.type === 'reload';
    if (isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    const hash = window.location.hash;
    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setCanonical = (href: string) => {
      let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
    };

    if (isAboutTopPokiesPage) {
      const url = `${baseUrl}/about-toppokiesaustralia`;
      document.title = 'About TopPokiesAustralia | iGaming Partnerships & Player-First Standards';
      setCanonical(url);
      setMeta(
        'description',
        'Learn how TopPokiesAustralia builds trusted iGaming partnerships, evaluates casino brands, and supports safer decisions for Australian players.'
      );
      setMeta(
        'keywords',
        'about TopPokiesAustralia, iGaming partnerships, casino partnership standards, Australian casino guide, trusted casino partners'
      );
      setMeta('og:title', 'About TopPokiesAustralia | iGaming Partnerships in Australia', true);
      setMeta(
        'og:description',
        'Discover our partnership model, trust framework, and quality standards for casino brands and player safety.',
        true
      );
      setMeta('og:url', url, true);
      setMeta('twitter:title', 'About TopPokiesAustralia | iGaming Partnerships in Australia');
      setMeta(
        'twitter:description',
        'Understand how our partnership framework helps Australian players find safer and more reliable casino options.'
      );
    } else {
      const url = `${baseUrl}/`;
      document.title = 'TopPokiesAustralia | iGaming Partnerships Platform for Australian Players';
      setCanonical(url);
      setMeta(
        'description',
        'TopPokiesAustralia is an iGaming partnerships platform helping Australian players discover trusted casino brands, real money pokies, secure payment routes, and transparent bonus offers.'
      );
      setMeta(
        'keywords',
        'iGaming partnerships Australia, casino partnership platform, online casino Australia, real money pokies, trusted casino brands, affiliate casino partnerships'
      );
      setMeta('og:title', 'TopPokiesAustralia | iGaming Partnerships Platform in Australia', true);
      setMeta(
        'og:description',
        'Explore trusted iGaming partnerships, real money pokies brands, and secure payment-ready casino platforms for Australian players.',
        true
      );
      setMeta('og:url', url, true);
      setMeta('twitter:title', 'TopPokiesAustralia | iGaming Partnerships Platform in Australia');
      setMeta(
        'twitter:description',
        'Find partnership-backed casino brands, real money pokies, and safer payment options across Australia.'
      );
    }
  }, [baseUrl, isAboutTopPokiesPage]);

  return (
    <div className="min-h-screen bg-white">
      {!isAboutTopPokiesPage && !hasEnteredPreLanding && (
        <PreLandingGate onEnter={() => setHasEnteredPreLanding(true)} />
      )}
      <Header />
      <main>
        {isAboutTopPokiesPage ? (
          <AboutTopPokiesAustraliaPage />
        ) : (
          <>
            <Hero />
            <GamePlatforms />
            <LiveWithdrawals />
            <PlayerReviews />
            <PersonalizedQuiz />
            <Provider />
            <AboutUs />
            <Certifications />
          </>
        )}
      </main>
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;