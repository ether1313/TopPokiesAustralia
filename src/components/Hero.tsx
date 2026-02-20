export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-4 sm:p-6 lg:p-8 shadow-[0_10px_25px_rgba(15,47,102,0.08)]">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <h1
            className="font-lilita font-extrabold tracking-wide text-[#0f2f66] leading-none
                       text-[clamp(1.6rem,4vw,2.2rem)]"
          >
            Top Rank Australia Online Casino Wallet
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-md text-blue-900/80">
          Our featured online casino partners are selected through a structured review process, offering Australian players access to reliable platforms for online entertainment.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">Fast Payout</span>
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">No Deposit Bonus</span>
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">Licensed Partners</span>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-blue-900/70">
            Certified by <span className="font-extrabold">TopPokiesAustralia.net</span> & licensed under{" "}
            <span className="font-extrabold">Curacao Gaming Control Board & Pagcor License</span>.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden lg:self-center">
          <img
            src="/hero-banner.png"
            alt="Hero banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}