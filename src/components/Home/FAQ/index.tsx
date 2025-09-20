"use client";
import React from "react";

const faqs = [
  { question: "What is the difference between trading and investing?", answer: "Trading is a short-term market participation focused on precision and active setups (Forex, Commodities, Crypto, Indices). while Investing is the Medium-to-long-term wealth building through equities, bonds, ETFs, and portfolio strategies." },
  { question: "Do I need prior trading experience to join?", answer: "No. Our programs are designed for both beginners and experienced market participants. You’ll start with foundational modules and progress to advanced concepts at your own pace." },
  { question: "Do you offer signals?", answer: "No. Vaultmont is not a signal service. Instead, we teach you how to analyze markets and make your own informed decisions, backed by professional insights and trade ideas." },
  { question: "Do you offer mentorship?", answer: "Yes. Mentorship is available in the Semi-Annual and Annual plans. This includes one-on-one sessions, weekly Q&A, and desk-specific guidance across both trading and investing tracks." },
  { question: "What is the difference between trading and investing?", answer: "Trading is a short-term market participation focused on precision and active setups (Forex, Commodities, Crypto, Indices). while Investing is the Medium-to-long-term wealth building through equities, bonds, ETFs, and portfolio strategies." },
  { question: "How long does it take to study in the Lab?", answer: "There’s no fixed timeline. Members typically spend 3–6 months completing the core modules, but learning is ongoing with weekly lessons, live sessions, and continuous updates." },
  { question: "How often are new lessons, trade ideas, and resources added?", answer: "Weekly. You’ll receive updated trade ideas, new lessons, and regular reports to keep your knowledge fresh and relevant." },
  { question: "Can I really build a career through Vaultmont?", answer: "Yes. Vaultmont serves as a launchpad for industry opportunities. Traders can position themselves for proprietary trading or hedge funds, while investors can explore careers in research, advisory, and asset management." },
  { question: "What payment methods do you accept?", answer: "We accept major debit/credit cards, PayPal, Crypto, and local options such as Mpesa (where available)." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
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
  );
}
