import React from "react";
import Head from "next/head";

export default function RiskDisclosurePage() {
  return (
    <>
      <Head>
        <title>Risk Disclosure - Vaultmont</title>
        <meta name="description" content="Vaultmont Risk Disclosure - Important information about trading and investment risks" />
      </Head>
      <main className="bg-darkmode min-h-screen py-12 px-4 flex flex-col items-center mt-24">
        <article className="max-w-2xl w-full bg-[#181818] rounded-xl shadow-lg p-8 text-white text-center">
          <img src="/images/Policies/Risk Disclosure .png" alt="Risk Disclosure" className="rounded-lg mb-8 w-full" />
          <h1 className="text-3xl font-bold mb-6 text-[#13db7a] text-left">Full Risk Disclosure</h1>
          <p className="text-lg mb-4 text-gray-300 text-left">Last updated: 27/09/2025</p>
          <p className="text-base mb-6 text-gray-300 text-left">
            Applies to: www.vaultmont.com and related services provided by [Tomvault Limited] ("we," "us").<br />
            Educational content only. We do not provide financial or investment advice or accept/execute customer orders.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            1) Market Risk
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Trading and investing involve significant risk of loss.<br />
            • Prices can move rapidly; gaps, slippage, and illiquidity may prevent exits at expected levels.<br />
            • Past performance is not indicative of future results. No strategy guarantees profit.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            2) Leverage & Derivatives Magnify Losses
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Products such as futures, options, CFDs, and margin can amplify gains and losses.<br />
            • Losses may exceed your initial deposit, especially in leveraged or short positions.<br />
            • Financing costs, margin calls, and liquidation risk apply.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            3) Execution, Data & Platform Limitations
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Quotes, charts, and data may be delayed, incomplete, or inaccurate.<br />
            • Outages (internet, broker, exchange, platform) can block order entry/exit or data access.<br />
            • Spreads, commissions, funding/overnight fees, routing, and latency affect results.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            4) Strategy, Backtests & Examples
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Examples, backtests, forward tests, and paper-trading simulations are hypothetical and have inherent limitations (e.g., survivorship bias, idealized fills).<br />
            • Real-world liquidity, costs, and slippage can materially change outcomes.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            5) Third-Party Services
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • We may reference or link to brokers, data vendors, charts, or tools.<br />
            • We do not control third-party accuracy, availability, fees, or terms; use at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            6) Suitability & Personal Responsibility
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Markets, instruments, and strategies discussed may not be suitable for you.<br />
            • Consider your objectives, experience, risk tolerance, time horizon, and financial situation.<br />
            • Maintain adequate emergency reserves and use only risk capital you can afford to lose.<br />
            • Seek independent financial, legal, tax, or accounting advice where appropriate.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            7) No Advisory, No Fiduciary Duty
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Content is educational/informational and not personalized advice, recommendation, or solicitation.<br />
            • Vaulmont is not your fiduciary, investment adviser, or broker-dealer.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            8) Regulatory & Tax Considerations
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            • Rules, tax treatment, and product availability vary by jurisdiction and may change.<br />
            • You are responsible for all taxes, filings, and regulatory obligations arising from your activities.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            Acknowledgment
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            By accessing our materials, you confirm that you:<br /><br />
            1. understand the risks above, including the possibility of total loss and losses beyond initial capital for leveraged products;<br />
            2. will make independent decisions and seek professional advice as needed; and<br />
            3. accept that all materials are provided "as is," without warranties.
          </p>
        </article>
      </main>
    </>
  );
}