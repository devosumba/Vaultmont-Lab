"use client";
import React from "react";
import Link from 'next/link';

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
        {/* (Moved) Wealth & Investment membership row removed from here and placed under Pricing section */}
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
      "Trading focuses on short-term market movements aiming to profit from price fluctuations through timing, precision, and execution.\n\nInvesting is broader and long-term, covering both financial instruments like stocks, bonds, and ETFs, and tangible assets such as real estate or commodities, with the goal of sustainable wealth growth. Vaultmont covers both worlds.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No. Vaultmont welcomes members at all experience levels.",
  },
  {
    question: "Do you offer signals?",
    answer:
      "No. Vaultmont is an education and mentorship platform, not a signal service.\n\nWe teach you how to analyze, plan, and execute trades independently. Mentors may share trade ideas or outlooks for learning purposes only.",
  },
  {
    question: "What is the difference between a Blueprint and Mentorship?",
    answer:
      "Blueprints are 30-day interactive learning programs that deliver structured lessons and guided exercises to help you master core principles quickly.\n\nMentorship is a separate 12-month program offering direct 1-on-1 access to all Vaultmont mentors across both tracks, focusing on personalized development, accountability, and real-world application.",
  },
  {
    question: "How long does a Blueprint last?",
    answer:
      "Each Blueprint runs for about 30 days of interactive lessons and resources. You can learn at your own pace and keep access afterward for review or continued practice.",
  },
  {
    question: "What is included in the 1-on-1 Mentorship plan?",
    answer:
      "Mentorship provides one year of personalized guidance from all Vaultmont mentors. It includes private sessions, progress tracking, performance reviews, and exclusive access to mentor-only resources and discussion spaces.",
  },
  {
    question: "Can I really build a career through Vaultmont?",
    answer:
      "Yes. Vaultmont equips you with both the technical and professional skills to trade or invest confidently. Our structured programs and mentorship prepare you for real-world opportunities in trading, portfolio management, and financial consulting.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit/credit cards, PayPal, Crypto, and local options such as Mpesa (where available).",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const [activeTeamIdx, setActiveTeamIdx] = React.useState<number | null>(null);
  const teamMembers = [
    {
      name: "Ian Tom Ondu",
      title: "Founder & Lead Mentor, Trading Mastery Track",
      image: "/images/team/Ondu_Team Avatar.svg",
      bio:
        "Ian is an electronic trader with 8+ years navigating the derivatives markets across forex, gold, crypto, and indices. He holds dual certifications as a Financial Planning & Wealth Management Professional (FPWMP) and Capital Markets & Securities Analyst (CMSA), and brings the rigor of a trained Economist (BA, Economics & Finance) to every setup he teaches. Ian built the Trading Mastery Track to give traders a structured, risk-first path — not shortcuts, but the discipline that separates consistent traders from the rest.",
    },
    {
      name: "Brian Bawa",
      title: "Lead Mentor, Wealth & Investment Track",
      image: "/images/team/Brian_Team Avatar (1).svg",
      bio:
        "Brian is an investment finance professional with a proven track record in investment analysis, portfolio allocation, and risk optimization. His experience spans both global markets and the Nairobi Securities Exchange (NSE), giving him a rare dual lens — global best practice paired with deep local market insight. Brian leads the Wealth & Investment Track with a focus on building portfolios that are diversified, risk-aware, and built to compound over time.",
    },
    {
      name: "Austine Osumba",
      title: "IT & Systems",
      image: "/images/team/Osumba_Team Avatar.svg",
      bio:
        "Austine is the software engineer behind the platform's reliability — the person who makes sure the tools, data feeds, and trading infrastructure work flawlessly when it matters most. With a background in building systems for high-stakes, real-time environments, he brings the same precision to trading platforms that markets themselves demand: speed, accuracy, and zero tolerance for downtime. Austine ensures every mentor and member has a seamless and secure experience.",
    },
  ];
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              const isActive = activeTeamIdx === i;
              return (
                <div
                  key={member.name}
                  className="group relative bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]"
                  onClick={() => setActiveTeamIdx(isActive ? null : i)}
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                    <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex items-center w-full justify-center gap-2">
                    <div className="flex flex-col items-center w-full">
                      <span className="text-[#13db7a] font-semibold text-lg md:text-xl text-center w-full">{member.name}</span>
                      <span className="text-gray-400 text-base md:text-lg text-center w-full">{member.title}</span>
                    </div>
                  </div>

                  {/* Bio reveal: absolutely positioned overlay so it never changes the
                      card's own box size (no grid jank). Desktop reveals on hover, gated
                      to (hover: hover) so it can't get "stuck" open after a tap on touch
                      devices (a well-known mobile quirk where :hover persists post-tap
                      until something else is tapped) — those instead rely purely on the
                      onClick toggle above via isActive. */}
                  <div
                    className={`absolute inset-0 bg-[#181818] rounded-xl px-6 py-8 flex items-center justify-center overflow-y-auto transition-all duration-300 ease-out [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:pointer-events-auto ${
                      isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <p className="text-[#13db7a] text-sm md:text-base leading-relaxed text-center">{member.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
  {/* Pricing Section */}
  <section className="py-12 pb-32 bg-darkmode flex flex-col items-center scroll-mt-24" id="pricing">
    <div>
  <TypingPricing />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 leading-tight text-center">Discover Our Payment Plans</h2>
  <p className="text-gray-300 text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-10 max-w-2xl mx-auto">Explore tailored subscription options that balance flexibility and value, granting you seamless entry into our community.</p>
  {/* Added Trading Mastery Track text styled to match '{ PRICING }' */}
  <div className="text-[#13db7a] text-base font-semibold tracking-wide text-center w-full mt-2 mb-2 sm:mb-4">{`{ Trading Mastery Track }`}</div>
  {/* Supporting sentence matching the paragraph style above */}
  <p className="text-gray-300 text-base sm:text-lg md:text-xl inline-block max-w-full whitespace-normal md:whitespace-nowrap mx-auto mb-8 sm:mb-10 text-center">Engineered for traders focused on edge, discipline, and execution excellence.</p>
    </div>
    <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Monthly Membership */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2">Trading Blueprint</div>
            <div className="flex flex-col items-center mb-2">
              <span className="text-white text-5xl font-bold">$300</span>
              <span className="text-gray-400 text-lg mt-1">(One-Time Payment)</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-x-2 gap-y-0">
                    <span className="text-[#13db7a] text-xl row-start-1 col-start-1 self-center">✔</span>
                    <span className="row-start-1 col-start-2">Full structured learning modules</span>
                    <span className="row-start-2 col-start-2 block text-gray-300 text-sm leading-tight mt-0">(Beginner → Advanced)</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Interactive Online Lessons</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Weekly Livestreams &amp; Q&A Sessions</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Risk management frameworks</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Trading psychology</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Access to downloadable playbooks and journals</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Lifetime course access + 3-month Free Community Access</span>
                  </div>
                </li>
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
                <span className="bg-[#13db7a] text-darkmode text-xs font-bold px-4 py-1 rounded-full shadow mb-3">$100/quarter - save $20</span>
              <div className="text-[#13db7a] text-xl font-semibold mb-2">Trading Community Access</div>
            <div className="flex items-end mb-2">
                <span className="text-white text-5xl font-bold mr-2">$40</span>
              <span className="text-gray-400 text-lg">/ Month</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Real-time market outlooks</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Trade idea discussions</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Professional community of traders sharing insights daily</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Access to exclusive trade journals</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Access to tracking templates</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Private mentorship channels</span>
                  </div>
                </li>
                
                
                
              </ul>
            </div>
            <a
              href="https://whop.com/vaultmont-wealthlab/biannual-membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">
                MONTHLY ACCESS
              </button>
            </a>
            {/* Additional Quarterly Access button (same link as MONTHLY ACCESS) */}
            <a
              href="https://whop.com/vaultmont-wealthlab/biannual-membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3"
            >
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg hover:bg-[#13db7a] hover:text-darkmode transition">
                QUARTERLY ACCESS
              </button>
            </a>
          </div>
          {/* Annual Membership */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"> 1-on-1 Trading Mentorship</div>
            <div className="flex items-end mb-2">
              <span className="text-white text-5xl font-bold mr-2">$1,200</span>
              <span className="text-gray-400 text-lg">/ Year</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Personalized mentorship roadmap tailored to your goals</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">One-on-one calls with trading mentors</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Custom trade reviews and performance analysis</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Progress tracking &amp; accountability framework</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Exclusive access to all trading mentors and private mentor hub</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Priority response and scheduling</span>
                  </div>
                </li>
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
        <div className="w-full max-w-6xl mx-auto px-4 mt-6">
          <div className="text-[#13db7a] text-base font-semibold tracking-wide text-center w-full mb-2 sm:mb-4 relative z-10">{`{ Wealth & Investment Track }`}</div>
          <div className="text-gray-300 text-base sm:text-lg md:text-xl text-center w-full whitespace-normal md:whitespace-nowrap mb-8 sm:mb-10">Built for long-term thinkers, portfolio builders, and wealth strategists ready to master global markets.</div>
        </div>
        {/* Wealth & Investment membership row (placed under pricing grid) */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mt-6">
          {/* Wealth Builder */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2">Wealth & Investment Blueprint</div>
            <div className="flex flex-col items-center mb-2">
              <span className="text-white text-5xl font-bold">$500</span>
              <span className="text-gray-400 text-lg mt-1">(One-Time Payment)</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Beginner → Advanced investing frameworks</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Asset class deep-dives: Equities, Bonds, ETFs, Alternatives etc</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Portfolio curation &amp; diversification techniques</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Risk-return optimization and asset allocation principles</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Financial instruments &amp; valuation basics</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Real-world case studies and strategy playbooks</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Lifetime course access + 3-month Free Community Access</span>
                  </div>
                </li>
              </ul>
            </div>
            <a href="https://whop.com/vaultmont-wealthlab/wealth-investment-blueprint/" className="w-full">
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">GET STARTED</button>
            </a>
          </div>

          {/* Portfolio Pro */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <span className="bg-[#13db7a] text-darkmode text-xs font-bold px-4 py-1 rounded-full shadow mb-3">$120/quarter - save $30</span>
            <div className="text-[#13db7a] text-xl font-semibold mb-2">Investor Community Access</div>
            <div className="flex items-end mb-2">
              <span className="text-white text-5xl font-bold mr-2">$50</span>
              <span className="text-gray-400 text-lg">/ Month</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Global market updates and macroeconomic outlooks</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Portfolio clinics, peer reviews &amp; feedback sessions</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Access to investor roundtables and live strategy events</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Vaultmont research reports &amp; investment theses</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Vaultmont investment theses</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Quarterly discussions on asset performance &amp; allocation trends</span>
                  </div>
                </li>
              </ul>
            </div>
            <a href="https://whop.com/vaultmont-wealthlab/investor-community-access/" className="w-full">
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">MONTHLY ACCESS</button>
            </a>
            <a href="https://whop.com/vaultmont-wealthlab/investor-community-access/" className="w-full mt-3">
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg hover:bg-[#13db7a] hover:text-darkmode transition">QUARTERLY ACCESS</button>
            </a>
          </div>

          {/* Global Strategies (match Annual Membership card styling) */}
          <div className="bg-[#181818] rounded-2xl border border-[#232323] p-6 sm:p-8 flex flex-col items-center shadow-lg w-full min-w-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="text-[#13db7a] text-xl font-semibold mb-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">1-on-1 Wealth Mentorship </div>
            <div className="flex items-end mb-2">
              <span className="text-white text-5xl font-bold mr-2">$1,500</span>
              <span className="text-gray-400 text-lg">/ year</span>
            </div>
            <hr className="border-t border-[#232323] w-full my-6" />
            <div className="w-full mb-6">
              <div className="text-gray-400 text-base font-semibold mb-3">Features Include:</div>
              <ul className="space-y-3">
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Personalized portfolio review and construction</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">One-on-one coaching sessions</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Direct access to wealth coaches &amp; private discussion channels</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Long-term investment strategy design</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Goal mapping &amp; financial planning</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Exclusive mentorship resources</span>
                  </div>
                </li>
                <li className="text-white">
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <span className="text-[#13db7a] text-xl self-start leading-none">✔</span>
                    <span className="col-start-2">Exclusive sessions</span>
                  </div>
                </li>
                <li className="flex items-center gap-2"><span className="text-[#13db7a] text-xl"></span><span className="text-gray-400 italic">Perfect for: Investors seeking to master portfolio management and those requiring personalized assessment &amp; strategy.</span></li>
              </ul>
            </div>
            <a href="https://whop.com/vaultmont-wealthlab/1-on-1-wealth-mentorship/" className="w-full">
              <button className="w-full bg-[#232323] text-white font-semibold py-3 rounded-lg mt-auto hover:bg-[#13db7a] hover:text-darkmode transition">GET STARTED</button>
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
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Blog Card 1 */}
          <a href="/blog/consistency-over-intensity/" className="group bg-[#181818] rounded-xl border border-[#222] w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
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
          <a href="/blog/trading-vs-investing" className="group bg-[#181818] rounded-xl border border-[#222] w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
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
          <a href="/blog/why-over-74-percent-of-traders-fail" className="group bg-[#181818] rounded-xl border border-[#222] w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
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
          <Link href="/resources" className="text-gray-200 font-semibold text-lg hover:text-[#13db7a]">See More Blogs</Link>
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
              className="faq-card group bg-[#181818] rounded-lg border border-[#222] w-full"
              style={{ maxWidth: "700px" }}
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-5 text-lg font-medium focus:outline-none transition-colors duration-300 ${openIdx === idx ? 'text-[#13db7a]' : 'text-white'}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="break-words">{faq.question}</span>
                <span className={`text-gray-400 text-xl font-thin flex items-center transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[#13db7a]' : 'group-hover:rotate-180'}`}>
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
          /* FAQ card hover / focus styling to match screenshot: subtle lift, green border/ring and glow */
          .faq-card {
            transition: transform .28s cubic-bezier(.2,.9,.2,1),
                        box-shadow .28s cubic-bezier(.2,.9,.2,1),
                        border-color .28s cubic-bezier(.2,.9,.2,1);
            will-change: transform, box-shadow;
          }
          .faq-card:hover,
          .faq-card:focus-within {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(19,219,122,0.08), inset 0 1px 0 rgba(255,255,255,0.02);
            border-color: #13db7a;
          }
          /* make taps/keyboard focus also show ring for accessibility */
          .faq-card:focus-within {
            outline: none;
            box-shadow: 0 12px 30px rgba(19,219,122,0.09), 0 0 0 4px rgba(19,219,122,0.06);
            border-color: #13db7a;
          }
          /* Slightly reduce transform on small touch devices to avoid layout jumps */
          @media (max-width: 640px) {
            .faq-card:hover { transform: none; box-shadow: 0 8px 20px rgba(19,219,122,0.06); }
          }
        `}</style>
      </section>
    </>
  );
}
