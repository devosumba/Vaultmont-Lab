import TypingResources from '../../components/Resources/TypingResources';
import { Icon } from '@iconify/react';

const PROGRAMME_BENEFITS = [
  {
    icon: 'ic:baseline-school',
    title: 'Beginner to Advanced Curriculum',
    description:
      'Technical analysis concepts, institutional market perspectives, execution models, risk frameworks, and the psychological guardrails that protect capital.',
  },
  {
    icon: 'ic:baseline-forum',
    title: 'Lifetime Discord Access',
    description:
      'Mentor Labs with live trade ideas and weekly analysis. Journal templates. An active community of disciplined traders who share real insights.',
  },
  {
    icon: 'ic:baseline-bar-chart',
    title: '3-Month Performance Reviews',
    description:
      'Monthly 1-on-1 performance check-ins for three months post-programme to track your application and capital outcomes.',
  },
  {
    icon: 'ic:baseline-card-membership',
    title: 'Certificate of Achievement',
    description:
      'Awarded on passing the Vaultmont 2% Consistency Evaluation — Institutional Trading & Risk Management.',
  },
  {
    icon: 'ic:baseline-event',
    title: 'Quarterly Trader Meetups',
    description:
      'Reserved participation slot at the quarterly in-person trader meetup — exclusive to programme alumni.',
  },
  {
    icon: 'ic:baseline-lock',
    title: 'Capital Preservation Framework',
    description:
      'The single principle that separates profitable traders from persistent losers — embedded across every module from day one.',
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
          <p className="text-[#13db7a] text-lg font-semibold tracking-wide text-center w-full min-h-6">
            {'{What Your '}
            <span style={{ color: '#13db7a' }}>Enrolment</span>
            {' Secures}'}
          </p>
          <h2 className="text-white sm:text-30 text-24 font-medium mt-3 mb-6">
            A complete architecture for trading as an investment
          </h2>
          <p className="text-muted text-opacity-60 text-18">
            Six deliverables designed to move you from market participant to structured, disciplined
            trader with a proven edge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {PROGRAMME_BENEFITS.map((item, i) => (
            <div key={i} className="text-center flex items-center justify-start flex-col">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl border border-border border-opacity-20 bg-dark_grey">
                <Icon icon={item.icon} className="text-primary" width={28} height={28} />
              </div>
              <h4 className="text-white text-24 mt-6 mb-3 font-medium">{item.title}</h4>
              <p className="text-muted text-opacity-60">{item.description}</p>
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
