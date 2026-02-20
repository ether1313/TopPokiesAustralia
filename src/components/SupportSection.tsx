const SupportSection = () => {
  return (
    <section id="support" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-white to-blue-50/80 p-4 sm:p-6 shadow-[0_10px_24px_rgba(15,47,102,0.12)]">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#0f2f66]">
            Secret Spaces
          </p>
          <h3 className="mt-3 text-[#0f2f66] font-lilita font-bold tracking-wide text-[clamp(1.3rem,3.8vw,1.9rem)]">
            Craving something special?
          </h3>
          <p className="mt-2 text-blue-900/80 text-sm sm:text-base">
            Join our private Telegram spaces for exclusive drops, VIP access, and content you won’t find anywhere else.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-4">
          <a
            href="https://t.me/addlist/vU9C9Dvo_TJkZThl"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-16 sm:h-auto items-center justify-center gap-2 px-2 sm:px-4 py-3 text-white rounded-xl font-semibold border border-blue-300/35 bg-[#0f2f66] text-sm sm:text-base shadow-md hover:shadow-xl hover:bg-[#0c2856] transition-all duration-300"
          >
            <img
              src="/telegramlogo/telegram.png"
              alt="Telegram"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
            <span>Join Telegram</span>
          </a>

          <a
            href="https://t.me/LuckyBabeAus_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-16 sm:h-auto items-center justify-center gap-2 px-2 sm:px-4 py-3 text-[#0f2f66] rounded-xl font-semibold border border-pink-200/80 bg-[#fbcfe8] text-sm sm:text-base shadow-md hover:shadow-xl hover:bg-[#f9b9dd] transition-all duration-300"
          >
            <img
              src="/telegramlogo/sexy-mouth-with-tongue-out-and-strawberry-pop-art-style.png"
              alt="Telegram AV"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span>Telegram AV</span>
            <img
              src="/telegramlogo/adult.webp"
              alt="18+"
              className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
