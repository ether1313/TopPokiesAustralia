import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-10 sm:py-14 bg-gradient-to-b from-white to-blue-50/45 text-[#0f2f66]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-blue-700">
            About TopPokiesAustralia
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,4.6vw,2.6rem)] font-bold text-[#0f2f66]">
            Built for Trusted iGaming Partnership
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-blue-900/80">
            TopPokiesAustralia is a partnership-driven iGaming platform focused on helping players find reliable
            brands, faster payment options, and a smoother real-money gaming journey. We connect users with carefully
            selected partners that meet our standards for compliance, support quality, and platform stability.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/55 p-4 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Partnership Network</p>
            <p className="mt-2 text-sm text-blue-900/80 leading-relaxed">
              We work with recognized iGaming brands and payment-ready operators across Australia-focused markets.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/55 p-4 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Player Experience</p>
            <p className="mt-2 text-sm text-blue-900/80 leading-relaxed">
              From onboarding to withdrawals, we prioritize fast navigation, clear bonus promotions, and responsive support.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/55 p-4 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Trust Framework</p>
            <p className="mt-2 text-sm text-blue-900/80 leading-relaxed">
              Every featured partner is reviewed against internal quality checks for security, transparency, and fairness.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          <div className="rounded-2xl border border-blue-100 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-[#0f2f66]">How Our Partnership Model Works</h3>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-blue-900/80 leading-relaxed">
              <li>We onboard providers with strong product quality and stable game performance.</li>
              <li>We align with partners that support convenient deposits and efficient withdrawal flows.</li>
              <li>We optimize visibility for trusted brands while keeping user information clear and consistent.</li>
              <li>We continuously monitor partner reliability to maintain a high-quality ecosystem.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-100 p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-white">
            <h3 className="text-lg font-bold text-[#0f2f66]">What Players Can Expect</h3>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-blue-900/80 leading-relaxed">
              <li>Curated real-money game brands, including pokies and live casino categories.</li>
              <li>Clear bonus and campaign presentation with easier side-by-side comparison.</li>
              <li>More streamlined account access between selected partner environments.</li>
              <li>Responsible-gaming awareness and practical guidance for safer play decisions.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-600 px-5 py-5 sm:px-6 sm:py-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold">Our Commitment</h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-blue-50/95">
            TopPokiesAustralia exists to build long-term value between players and iGaming brands through trusted
            partnerships. Our goal is simple: deliver a cleaner, safer, and more rewarding online gaming experience
            with transparency at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
