"use client";
import React from "react";

const faqs = [
  { question: "What is the difference between trading and investing?", answer: "Trading is a short-term market participation focused on precision and active setups (Forex, Commodities, Crypto, Indices). while Investing is the Medium-to-long-term wealth building through equities, bonds, ETFs, and portfolio strategies." },
  { question: "Do I need prior trading experience to join?", answer: "No. Our programs are designed for both beginners and experienced market participants. You’ll start with foundational modules and progress to advanced concepts at your own pace." },
  { question: "Do you offer signals?", answer: "No. Vaultmont is not a signal service. Instead, we teach you how to analyze markets and make your own informed decisions, backed by professional insights and trade ideas." },
  { question: "Do you offer mentorship?", answer: "Yes. Mentorship is available in the Semi-Annual and Annual plans. This includes one-on-one sessions, weekly Q&A, and desk-specific guidance across both trading and investing tracks." },
  { question: "How long does it take to study in the Lab?", answer: "There’s no fixed timeline. Members typically spend 3–6 months completing the core modules, but learning is ongoing with weekly lessons, live sessions, and continuous updates." },
  { question: "How often are new lessons, trade ideas, and resources added?", answer: "Weekly. You’ll receive updated trade ideas, new lessons, and regular reports to keep your knowledge fresh and relevant." },
  { question: "Can I really build a career through Vaultmont?", answer: "Yes. Vaultmont serves as a launchpad for industry opportunities. Traders can position themselves for proprietary trading or hedge funds, while investors can explore careers in research, advisory, and asset management." },
  { question: "What payment methods do you accept?", answer: "We accept major debit/credit cards, PayPal, Crypto, and local options such as Mpesa (where available)." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <div>
      {/* Our Team Section */}
      <section className="py-14 bg-darkmode flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-8">
            <div>
              <div className="text-[#13db7a] text-base font-semibold mb-2 tracking-wide">{'{ OUR TEAM }'}</div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">Led by Top Traders.<br />Proven Results.</h2>
            </div>
            <div className="md:max-w-lg text-gray-300 text-lg md:text-xl leading-relaxed">
              Meet the team behind <span className="font-semibold text-white">Vaultmont</span>, a group of passionate traders committed to empowering your trading success with innovation, insight, and expertise.
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col gap-1">
              <span className="text-white text-xs font-semibold tracking-wide mb-1">[ 01 ]</span>
              <h3 className="text-[#13db7a] text-3xl font-bold">Trading Mastery Track Team</h3>
              <div className="text-gray-400 text-sm md:text-base font-medium mt-1">(Active Trading: Forex, Commodities, Crypto, Indices)</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/juno.png" alt="JUNO" className="object-contain w-2/3 h-2/3" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <span className="text-[#13db7a] font-semibold text-lg md:text-xl">JUNO</span>
                <span className="text-gray-400 text-base md:text-lg">| Team</span>
                <span className="text-gray-500 text-xl">&#10005;</span>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/placeholder.png" alt="TEAM" className="object-contain w-2/3 h-2/3" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <span className="text-[#13db7a] font-semibold text-lg md:text-xl">TEAM</span>
                <span className="text-gray-400 text-base md:text-lg">| Member</span>
                <span className="text-gray-500 text-xl">&#10005;</span>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/placeholder.png" alt="TEAM" className="object-contain w-2/3 h-2/3" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <span className="text-[#13db7a] font-semibold text-lg md:text-xl">TEAM</span>
                <span className="text-gray-400 text-base md:text-lg">| Member</span>
                <span className="text-gray-500 text-xl">&#10005;</span>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-[#181818] rounded-xl border border-[#222] px-6 py-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-w-[220px] md:min-w-[260px] lg:min-w-[300px]">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 flex items-center justify-center bg-[#232323]">
                <img src="/images/team/placeholder.png" alt="TEAM" className="object-contain w-2/3 h-2/3" />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <span className="text-[#13db7a] font-semibold text-lg md:text-xl">TEAM</span>
                <span className="text-gray-400 text-base md:text-lg">| Member</span>
                <span className="text-gray-500 text-xl">&#10005;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-12 bg-darkmode flex flex-col items-center">
        <h2 className="font-bold text-white text-4xl md:text-5xl mb-10 text-center">Membership Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Monthly Membership */}
          <div className="bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs p-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <h3 className="text-[#13db7a] text-xl font-semibold mb-2 text-center">Monthly Membership</h3>
            <div className="text-white text-4xl font-bold mb-1 text-center">$150 <span className="text-gray-400 text-lg font-normal">/ Month</span></div>
            <hr className="my-4 border-[#232323] w-full" />
            <div className="w-full mb-4">
              <div className="text-gray-400 text-base mb-2">Features Include:</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Daily Live Streams</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Trade Ideas & Market Analysis</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Educational Material</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Exclusive Discounts & Giveaways</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Journal Access</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg bg-[#232323] text-white font-semibold mt-auto hover:bg-[#13db7a] hover:text-darkmode transition-all duration-300">GET STARTED</button>
          </div>
          {/* Semi-Annual Membership */}
          <div className="bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs p-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <h3 className="text-[#13db7a] text-xl font-semibold mb-2 text-center">Semi-Annual Membership</h3>
            <div className="text-white text-4xl font-bold mb-1 text-center">$800 <span className="text-gray-400 text-lg font-normal">/ 6 Month</span></div>
            <hr className="my-4 border-[#232323] w-full" />
            <div className="w-full mb-4">
              <div className="text-gray-400 text-base mb-2">Features Include:</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Daily Live Streams</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Trade Ideas & Market Analysis</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Educational Material</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Exclusive Discounts & Giveaways</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Journal Access</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Lessons & Weekly Q&A</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg bg-[#232323] text-white font-semibold mt-auto hover:bg-[#13db7a] hover:text-darkmode transition-all duration-300">GET STARTED</button>
          </div>
          {/* Annual Membership */}
          <div className="bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs p-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <h3 className="text-[#13db7a] text-xl font-semibold mb-2 text-center">Annual Membership</h3>
            <div className="text-white text-4xl font-bold mb-1 text-center">$1,400 <span className="text-gray-400 text-lg font-normal">/ 12 Month</span></div>
            <hr className="my-4 border-[#232323] w-full" />
            <div className="w-full mb-4">
              <div className="text-gray-400 text-base mb-2">Features Include:</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Daily Live Streams</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Trade Ideas & Market Analysis</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Educational Material</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Exclusive Discounts & Giveaways</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Journal Access</li>
                <li className="flex items-center gap-2 text-white"><span className="text-[#13db7a]">&#10003;</span> Lessons & Weekly Q&A</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg bg-[#232323] text-white font-semibold mt-auto hover:bg-[#13db7a] hover:text-darkmode transition-all duration-300">GET STARTED</button>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-12 bg-darkmode flex flex-col items-center">
        <div className="mb-10">
          <div className="text-center mb-4">
            <span className="text-primary text-lg font-semibold tracking-wide">{'{ BLOG ARTICLES }'}</span>
          </div>
          <h2 className="font-bold text-white text-4xl md:text-5xl mb-10 text-center">Insights, Ideas & Industry Trends</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Blog Card 1 */}
            <a href="/markdown/blog/blog_1.mdx" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                  <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">How to build<br/>confidence in trading?</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">How to Build Confidence in Trading</div>
                <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
              </div>
            </a>
            {/* Blog Card 2 */}
            <a href="/markdown/blog/blog_2.mdx" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                  <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">How to stay<br/>disciplined ?</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">How to Stay Disciplined as a Trader</div>
                <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
              </div>
            </a>
            {/* Blog Card 3 */}
            <a href="/markdown/blog/blog_3.mdx" className="group bg-[#181818] rounded-xl border border-[#222] w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#13db7a] hover:to-[#181818] focus:outline-none" style={{ textDecoration: 'none' }}>
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] p-6 flex items-center justify-center h-40">
                  <span className="text-2xl font-bold text-[#13db7a] text-center group-hover:text-white transition-colors duration-300">How many trades<br/>should I take per day?</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-white text-lg font-medium mb-2 group-hover:text-[#13db7a] transition-colors duration-300">How Many Trades Should I Take Per Day?</div>
                <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Read More</div>
              </div>
            </a>
          </div>
          <div className="mt-8 text-center">
            <a href="/markdown/blog" className="text-gray-400 text-base hover:text-[#13db7a] transition-colors duration-300 underline">See More Blogs</a>
          </div>
        </div>

      </section>
      {/* FAQ Section */}
      <section className="py-12 bg-darkmode flex flex-col items-center">
        <h2 className="font-medium sm:text-28 text-18 text-center text-white mb-6">Frequently Asked <span style={{color: '#13db7a'}}>Questions</span></h2>
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
                  <div className="mt-2 text-gray-300 text-base md:text-lg font-medium">(Active Trading: Forex, Commodities, Crypto, Indices)</div>
                  {faq.answer}
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
    </div>
  );
}
