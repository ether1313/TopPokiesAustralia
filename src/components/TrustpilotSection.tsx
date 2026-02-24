import { useEffect } from 'react';

const TRUSTPILOT_SCRIPT_ID = 'trustpilot-widget-script';

const TrustpilotSection = () => {
  useEffect(() => {
    if (document.getElementById(TRUSTPILOT_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = TRUSTPILOT_SCRIPT_ID;
    script.type = 'text/javascript';
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-6 sm:px-8 sm:py-8 shadow-[0_10px_24px_rgba(15,47,102,0.08)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2f66] text-center">
            Trusted by Australian Players on Trustpilot
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1e3a66] text-center max-w-3xl mx-auto">
            See real feedback from players and share your experience with TopPokiesAustralia.
          </p>

          <div className="mt-6">
            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="699d2ddea58064e24a4692ab"
              data-style-height="52px"
              data-style-width="100%"
              data-token="ff05c9e3-cff4-4f7d-a524-f5817ccd4757"
            >
              <a
                href="https://www.trustpilot.com/review/toppokiesaustralia.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustpilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
