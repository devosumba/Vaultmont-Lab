import TypingResources from '../../components/Resources/TypingResources';

const CURRICULUM = [
  {
    title: 'Market Structure & Order Flow',
    excerpt: 'Read price action like an institution — liquidity, structure shifts, and where retail gets trapped.',
  },
  {
    title: 'Risk & Capital Management',
    excerpt: 'Position sizing, drawdown control, and the math that keeps you in the game long-term.',
  },
  {
    title: 'Technical Frameworks',
    excerpt: 'Candlesticks, key levels, and confluence-based entries built for consistency, not guesswork.',
  },
  {
    title: 'Trading Psychology',
    excerpt: 'Discipline systems to remove emotion and enforce your edge trade after trade.',
  },
  {
    title: 'Backtesting & Journaling',
    excerpt: 'Validate your strategy with data and build a feedback loop that compounds skill.',
  },
  {
    title: 'Live Trade Reviews',
    excerpt: 'Weekly cohort sessions breaking down real trades — wins, losses, and lessons.',
  },
];

export default function TradingMasterclassPage() {
  return (
    <main className="bg-darkmode min-h-screen py-20 px-4 mt-24 md:mt-28 lg:mt-32">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="mb-12 md:mb-16 lg:mb-20 w-full relative">
          <img
            src="/images/resource/resource_bg.png"
            alt="Trading Masterclass background"
            className="w-full h-auto"
          />

          {/* Overlay typing text on the image, shifted upward to roughly the top 1/4 */}
          <div className="absolute inset-0 pointer-events-none">
            {/* center horizontally with left-1/2 + transform, and position vertically at 25% */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[18%] md:top-[25%] w-full max-w-5xl md:max-w-6xl px-4">
              <TypingResources text="{ Cohort 1 }" />

              <h1 className="text-white sm:text-40 text-30 font-medium text-center mt-6">
                Electronic Trading <span style={{ color: '#13db7a' }}>Masterclass</span>
              </h1>
              <p className="text-muted text-opacity-60 sm:text-18 text-base text-center mt-3 max-w-2xl mx-auto">
                A 6-week structured programme for disciplined, capital-first traders.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-white sm:text-30 text-24 font-medium mb-6">
            What Your <span style={{ color: '#13db7a' }}>Enrolment</span> Secures
          </h2>
          <p className="text-muted text-opacity-60 text-18">
            A complete architecture for trading as an investment.
            <br />
            Six deliverables designed to move you from market participant to structured, disciplined
            trader with a proven edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRICULUM.map((item, i) => (
            <div key={i} className="w-full">
              <article className="group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="h-40 flex items-center justify-center bg-gradient-to-b from-[#13db7a] to-[#0b2b20]">
                  <h3 className="text-2xl font-semibold text-center px-6 text-[#13db7a] group-hover:text-white/95 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="bg-[#0f0f0f] p-6">
                  <p className="text-gray-300 text-base">{item.excerpt}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-white sm:text-30 text-24 font-medium mb-6">
            Seats for <span style={{ color: '#13db7a' }}>Cohort 1</span> are limited.
          </h2>
          <a
            href="https://discord.com/invite/mw7qpcFtmW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#13db7a] text-black px-6 py-3 rounded-lg font-medium text-18 transition hover:bg-[#13db7a]/80 inline-flex items-center justify-center whitespace-nowrap"
            style={{ border: '2px solid #13db7a', textAlign: 'center' }}
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </main>
  );
}
