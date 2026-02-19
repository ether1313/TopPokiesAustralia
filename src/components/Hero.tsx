export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-4 sm:p-6 lg:p-8 shadow-[0_10px_25px_rgba(15,47,102,0.08)]">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <h1
            className="font-lilita tracking-wide text-[#0f2f66] leading-none
                       text-[clamp(1.6rem,4vw,2.8rem)]"
          >
            #1 TRENDING AUSTRALIA ONLINE CASINO
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-md text-blue-900/80">
          Our featured online casino partners are selected through a structured review process, offering Australian players access to reliable platforms for online entertainment.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">Fast Payout</span>
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">No Deposit Bonus</span>
            <span className="rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold text-[#0f2f66]">Licensed Partners</span>
          </div>

          <div className="mt-6 flex w-full justify-center lg:justify-start gap-2 sm:gap-4 flex-nowrap">
            <a
              href="https://t.me/addlist/vU9C9Dvo_TJkZThl"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex flex-1 min-w-0 sm:flex-none items-center justify-center space-x-1 sm:space-x-2
                         px-[clamp(12px,3vw,24px)] py-[clamp(10px,2vw,14px)]
                         text-white rounded-lg font-semibold border border-blue-300/35 bg-[#0f2f66]
                         text-[clamp(12px,3.8vw,18px)] shadow-md
                         hover:shadow-xl hover:bg-[#0c2856] transform transition-all duration-300 animate-shake
                         whitespace-nowrap sm:min-w-[clamp(140px,30vw,180px)]"
            >
              <img
                src="/telegramlogo/telegram.png"
                alt="Telegram"
                className="w-7 h-7 object-contain relative z-10"
              />
              <span className="relative z-10">Join Telegram</span>
            </a>

            <a
              href="https://t.me/LuckyBabeAus_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex flex-1 min-w-0 sm:flex-none items-center justify-center space-x-1 sm:space-x-2
                         px-[clamp(12px,3vw,24px)] py-[clamp(10px,2vw,14px)]
                         text-[#0f2f66] rounded-lg font-semibold border border-pink-200/80 bg-[#fbcfe8]
                         text-[clamp(12px,3.8vw,18px)] shadow-md
                         hover:shadow-xl hover:bg-[#f9b9dd] transform transition-all duration-300 animate-shake
                         whitespace-nowrap sm:min-w-[clamp(140px,30vw,180px)]"
            >
              <img
                src="/telegramlogo/sexy-mouth-with-tongue-out-and-strawberry-pop-art-style.png"
                alt="Custom Icon"
                className="w-8 h-8 object-contain relative z-10"
              />
              <span className="relative z-10">Telegram AV</span>
              <img
                src="/telegramlogo/adult.webp"
                alt="18+"
                className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 z-20"
              />
            </a>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-blue-900/70">
            Certified by <span className="font-extrabold">TopPokiesAustralia.com</span> & licensed under{" "}
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