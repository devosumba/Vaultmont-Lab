"use client";
import React from "react";

// Typing animation for '{ PRICING }' that loops infinitely
const TypingPricing: React.FC = () => {
  const text = "{ PRICING }";
  const [displayed, setDisplayed] = React.useState("");
  const [charIdx, setCharIdx] = React.useState(0);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIdx <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, text]);
  return (
    <div className="text-[#13db7a] text-base font-semibold mb-2 tracking-wide text-center w-full min-h-6">{displayed || '\u00A0'}</div>
  );
};


// Typing animation for '{ OUR TEAM }' that loops infinitely

const TypingTeam: React.FC = () => {
  const text = "{ OUR TEAM }";
  const [displayed, setDisplayed] = React.useState("");
  const [charIdx, setCharIdx] = React.useState(0);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIdx <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, text]);
  return (
  <span className="text-[#13db7a] text-base font-semibold mb-2 tracking-wide mb-8 inline-block min-h-6 leading-6">{displayed || '\u00A0'}</span>
  );
};

// Typing animation for '{ TESTIMONIALS }' that matches '{ PRICING }'
const TypingTestimonials: React.FC = () => {
  const text = "{ TESTIMONIALS }";
  const [displayed, setDisplayed] = React.useState("");
  const [charIdx, setCharIdx] = React.useState(0);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIdx <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, text]);
  return (
    <div className="text-[#13db7a] text-base font-semibold mb-2 tracking-wide text-center w-full min-h-6">{displayed || '\u00A0'}</div>
  );
};

// Typing animation for "{ FAQ's }" matching TESTIMONIALS
const TypingFaqs: React.FC = () => {
  const text = "{ FAQ's }";
  const [displayed, setDisplayed] = React.useState("");
  const [charIdx, setCharIdx] = React.useState(0);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIdx <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, text]);
  return (
    <div className="text-[#13db7a] text-base font-semibold mb-2 tracking-wide text-center w-full min-h-6">{displayed || '\u00A0'}</div>
  );
};

// Testimonial type and spotlight carousel
interface Testimonial {
  name: string;
  role: string;
  img: string;
  text: string;
}

const SpotlightCarousel: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [dir, setDir] = React.useState<1 | -1>(1); // 1 -> next (slide from right), -1 -> prev (slide from left)
  const [aosType, setAosType] = React.useState<'fade-up' | 'fade-right'>('fade-up');

  // Responsive AOS: fade-right on md+, fade-up on mobile
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setAosType(mq.matches ? 'fade-right' : 'fade-up');
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // Auto-rotate every 6s; pause on hover
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  const current = testimonials[active];

  const onDotClick = (i: number) => {
    if (i === active) return;
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <div className="w-full" data-aos={aosType}>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative"
      >
        <div
          key={active}
          className={`relative max-w-5xl mx-auto bg-[#181818] rounded-2xl border border-[#222] shadow-lg p-6 sm:p-8 md:p-10 animate-cardIn ${
            dir === 1 ? 'animate-slideInRight' : 'animate-slideInLeft'
          }`}
        >
          {/* Top sheen gradient */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#13db7a] via-[#13db7a]/60 to-transparent" />

          <div className="flex items-center gap-1 text-yellow-400 mb-5" aria-hidden>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx} className="text-xl">★</span>
            ))}
          </div>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-8">
            “{current.text}”
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-[#13db7a]/60 bg-[#232323] flex items-center justify-center">
              <img src={current.img} alt={current.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-semibold text-base md:text-lg">{current.name}</div>
              <div className="text-gray-400 text-sm md:text-base">{current.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => onDotClick(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-8 bg-[#13db7a]' : 'w-2 bg-[#2a2a2a] hover:bg-[#3a3a3a]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is the difference between trading and investing?",
    answer:
      "Trading is a short-term market participation focused on precision and active setups (Forex, Commodities, Crypto, Indices). Investing is medium-to-long-term wealth building through equities, bonds, ETFs, and portfolio strategies.",
  },
  {
    question: "Do I need prior trading experience to join?",
    answer:
      "No. Our programs are designed for both beginners and experienced market participants. You’ll start with foundational modules and progress to advanced concepts at your own pace.",
  },
  {
    question: "Do you offer signals?",
    answer:
      "No. Vaultmont is not a signal service. Instead, we teach you how to analyze markets and make your own informed decisions, backed by professional insights and trade ideas.",
  },
  {
    question: "Do you offer mentorship?",
    answer:
      "Yes. Mentorship is available in the Semi-Annual and Annual plans. This includes one-on-one sessions, weekly Q&A, and desk-specific guidance across both trading and investing tracks.",
  },
  {
    question: "How long does it take to study in the Lab?",
    answer:
      "There’s no fixed timeline. Members typically spend 3–6 months completing the core modules, but learning is ongoing with weekly lessons, live sessions, and continuous updates.",
  },
  {
    question: "How often are new lessons, trade ideas, and resources added?",
    answer:
      "Weekly. You’ll receive updated trade ideas, new lessons, and regular reports to keep your knowledge fresh and relevant.",
  },
  {
    question: "Can I really build a career through Vaultmont?",
    answer:
      "Yes. Vaultmont serves as a launchpad for industry opportunities. Traders can position themselves for proprietary trading or hedge funds, while investors can explore careers in research, advisory, and asset management.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit/credit cards, PayPal, Crypto, and local options such as Mpesa (where available).",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const testimonials = [
    {
      name: "Daniel K.",
      role: "Nairobi, Kenya",
      img: "/images/testimonials/1.jpg",
      text:
        "I grew my $200 account to $800 in 2 months after applying the risk rules I learned here.",
    },
    {
      name: "Aisha M",
      role: "London",
      img: "/images/testimonials/2.jpg",
      text:
        "The daily market insights helped me stop overtrading. I now average 3–4 high-quality setups a week, instead of 20 random trades.",
    },
    {
      name: "Leon W",
      role: "Cape Town",
      img: "/images/testimonials/3.jpg",
      text:
        "I finally built a track record. My journal shows 60% win rate after three months — something I never had before.",
    },
    {
      name: "Lindo K",
      role: "Johannesburg",
      img: "/images/testimonials/4.jpg",
      text:
        "The live trading streams taught me discipline. I cut my losses faster and doubled my consistency in 6 weeks.",
    },
    {
      name: "Omar H",
      role: "Dubai",
      img: "/images/testimonials/5.jpg",
      text:
        "Mentorship changed my mindset — I treat trading like a business now. I’m growing slow, but I’ve kept my account positive for 5 straight months.",
    },
  ];
  return (
    <>
      {/* Our Team Section */}
  <section className="py-14 flex flex-col items-center scroll-mt-24" id="team">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-8">
            <div>
              <TypingTeam />
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">Expert Minds.<br />Real Market Wins.</h2>
            </div>
            <div className="md:max-w-lg text-gray-300 text-lg md:text-xl leading-relaxed">
              Meet the team behind <span className="font-semibold text-white">Vaultmont</span>, a group of market-proven traders & analysts with real wins, here to fuel your success.
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col gap-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/Ondu_Team Avatar.svg" alt="ONDU" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">ONDU <span className="text-gray-400">| Trader</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Indices & Futures</span>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/WITMARK_Team Avatar.svg" alt="WITMARK" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">WITMARK <span className="text-gray-400">| Trader</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">FX &amp; Commodities</span>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/JASON_Team Avatar.svg" alt="JASON" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">JASON <span className="text-gray-400">| Trader</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Crypto</span>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/Brian_Team Avatar (1).svg" alt="BRIAN" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">BRIAN <span className="text-gray-400">| Mentor</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Equities &amp; ETF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {/* Team Member - Placeholder (before OSUMBA) */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                {/* Use NJOGU avatar as requested */}
                <img src="/images/team/NJOGU_Team Avatar.svg" alt="NJOGU" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">NJOGU <span className="text-gray-400">| Mentor</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Bonds & Fixed Income</span>
                </div>
              </div>
            </div>
            {/* Team Member OSUMBA */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/Osumba_Team Avatar.svg" alt="OSUMBA" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">OSUMBA <span className="text-gray-400">| Techie</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Systems & Innovation</span>
                </div>
              </div>
            </div>
            {/* Team Member FID */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/FID_Team Avatar.svg" alt="FID" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">FID <span className="text-gray-400">| Team</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Community Manager</span>
                </div>
              </div>
            </div>
            {/* Team Member EDD */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/EDD_Team Avatar.svg" alt="EDD" className="object-cover w-full h-full" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex flex-col items-center w-full">
                  <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">EDD <span className="text-gray-400">| Team</span></span>
                  <span className="text-gray-400 text-base md:text-lg text-center w-full">Brand & Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
  {/* Pricing Section */}
  <section className="py-12 pb-32 bg-darkmode flex flex-col items-center scroll-mt-24" id="pricing">
    <div>
  <TypingPricing />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 leading-tight text-center">Discover Our Payment Plans</h2>
      <p className="text-gray-300 text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-10 max-w-2xl mx-auto">Explore tailored subscription options that balance flexibility and value, granting you seamless entry into our community.</p>
    </div>
    <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Monthly Membership */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2">Monthly Membership</div>
            <div className="flex items-end mb-2">
              <span className="text-white text-5xl font-bold mr-2">$200</span>
              <span className="text-gray-400 text-lg">/ Month</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Trade Ideas & Daily Bias</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Market Analysis & Weekly Outlook</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Learning Library & Resources</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Lessons & Weekly Q&A</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-400 text-xl">✖</span> Live Trading Sessions</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-400 text-xl">✖</span> Journal Access & Playbooks</li>
                <li className="flex items-center text-gray-400 text-base md:text-lg text-left"><span className="text-gray-400">✖ Investment Literacy (Bonds,<br/>Stocks, ETFs, etc)</span></li>
                <li className="flex items-center text-gray-400 text-base md:text-lg text-left"><span className="text-gray-400">✖ Career Track Monitoring</span></li>
              </ul>
            </div>
            <a
              href="https://whop.com/vaultmont-wealthlab/monthly-membership-9d/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">
                GET STARTED
              </button>
            </a>
          </div>
          {/* Biannual Membership */}
            <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <span className="bg-[#13db7a] text-darkmode text-xs font-bold px-4 py-1 rounded-full shadow mb-3">Most Popular - save 25%</span>
              <div className="text-[#13db7a] text-xl font-semibold mb-2">Semi-Annual Membership</div>
            <div className="flex items-end mb-2">
                <span className="text-white text-5xl font-bold mr-2">$899</span>
              <span className="text-gray-400 text-lg">/ 6 Month</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Trade Ideas & Daily Bias</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Market Analysis & Weekly Outlook</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Learning Library & Resources</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Lessons & Weekly Q&A</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Live Trading Sessions</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Journal Access & Playbooks</li>
                <li className="flex items-center text-gray-400 text-base md:text-lg text-left"><span className="text-gray-400">✖ Investment Literacy (Bonds,<br/>Stocks, ETFs, etc)</span></li>
                <li className="flex items-center text-gray-400 text-base md:text-lg text-left"><span className="text-gray-400">✖ Career Track Monitoring</span></li>
              </ul>
            </div>
            <a
              href="https://whop.com/vaultmont-wealthlab/biannual-membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">
                GET STARTED
              </button>
            </a>
          </div>
          {/* Annual Membership */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">Annual Membership</div>
            <div className="flex items-end mb-2">
              <span className="text-white text-5xl font-bold mr-2">$1,300</span>
              <span className="text-gray-400 text-lg">/ 12 Month</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Trade Ideas & Daily Bias</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Market Analysis & Weekly Outlook</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Learning Library & Resources</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Lessons & Weekly Q&A</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Live Trading Sessions</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Journal Access & Playbooks</li>
                <li className="flex items-center text-left gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Investment Literacy (Bonds,<br/>Stocks, ETFs, etc)</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a] text-xl">✔</span> Career Track Monitoring</li>
              </ul>
            </div>
            <a
              href="https://whop.com/vaultmont-wealthlab/annual-membership-c8/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">
                GET STARTED
              </button>
            </a>
          </div>
          
        </div>
      </section>
    {/* Blog Section (Restored Original) */}
  <section className="-mt-24 pb-12 bg-darkmode flex flex-col items-center scroll-mt-24" id="blog">
        <div className="w-full flex justify-center mb-20">
          <a
            href="https://discordapp.com/channels/1409224081693474816/1409572846690242691"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg md:text-xl text-[#13db7a] font-semibold text-center hover:underline transition-colors duration-200"
          >
            Explore Crypto & Local Payments
          </a>
        </div>
        <h2 className="font-medium sm:text-28 text-18 text-center text-white mb-6">Latest blog & news</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          {/* Blog Card 1 */}
          <a href="/blog/consistency-over-intensity" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
            <div className="rounded-t-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">
                  Consistency Over Intensity
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">Building a Durable Trading Mindset</div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
            </div>
          </a>
          <a href="/blog/trading-vs-investing" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
            <div className="rounded-t-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">
                  Trading vs Investing
  
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">Learn The Difference and Stay Ahead</div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
            </div>
          </a>
          <a href="/blog/why-over-74-percent-of-traders-fail" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
            <div className="rounded-t-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">
                  Why Over 74% of Traders Fail<br/>
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">Pitfalls to Avoid (and What to Do Instead)</div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
            </div>
          </a>
        </div>
        <div className="flex justify-center w-full mt-8">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-200 font-semibold text-lg hover:text-[#13db7a] cursor-pointer">See More Blogs</a>
        </div>
      </section>
      {/* Testimonials Section (Single-card spotlight carousel) */}
  <section id="testimonials" className="py-20 bg-darkmode scroll-mt-24">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <TypingTestimonials />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-3">
              What Our Community Say
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands who’ve transformed their trading & investing experience with
              <span className="ml-2 font-semibold text-white">Vaultmont</span>.
            </p>
          </div>

          {/* Spotlight Card */}
          <SpotlightCarousel testimonials={testimonials} />

          <style jsx>{`
            .animate-cardIn { animation: cardIn 0.3s ease both; }
            @keyframes cardIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slideInRight { animation: slideInRight 0.3s ease both; }
            .animate-slideInLeft { animation: slideInLeft 0.3s ease both; }
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(24px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-24px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}</style>
        </div>
      </section>
      {/* FAQ Section */}
  <section className="pt-12 pb-20 bg-darkmode flex flex-col items-center scroll-mt-24" id="faq">
        <div className="text-center mb-6" data-aos="fade-up">
          <TypingFaqs />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-3">Frequently Asked <span style={{color: '#13db7a'}}>Questions</span></h2>
        </div>
        <div className="space-y-4 w-full max-w-2xl flex flex-col items-center">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-lg border border-[#222] w-full"
              style={{ maxWidth: "700px" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-medium focus:outline-none"
                style={{ color: openIdx === idx ? '#13db7a' : '#fff' }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span>{faq.question}</span>
                <span className="text-gray-400 text-xl font-thin flex items-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L11 14L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <div
                  id={`faq-panel-${idx}`}
                  className="px-6 pb-5 text-gray-300 text-base animate-fadein"
                >
                  <div className="mt-2 text-gray-300 text-base md:text-lg font-medium">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <style jsx>{`
          .animate-fadein {
            animation: fadein 0.3s;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </>
  );
}
