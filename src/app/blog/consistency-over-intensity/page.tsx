export const metadata = {
  title: 'Consistency Over Intensity — Vaultmont',
  description:
    'Practical habits for traders: build repeatable process, reduce burnout, and improve edge.',
};

export default function ConsistencyOverIntensity() {
  return (
    <main className="bg-darkmode min-h-screen pb-24">
      <div className="w-full max-w-4xl mx-auto px-4 pt-28">
        <article className="bg-[#0f1113] rounded-2xl overflow-hidden shadow-lg border border-[#151515] p-8 text-gray-300">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">Consistency Over Intensity</h1>
            <p className="mt-3 text-gray-400">Practical habits for traders who want steady progress, less burnout, and repeatable edge.</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <img src="/images/testimonials/1.jpg" alt="Vaultmont" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-white">Vaultmont</div>
                  <div className="text-xs text-gray-500">November 14, 2025 • 6 min read</div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">Why intensity fails</h2>
            <p>
              Trading driven by bursts of effort often looks productive but lacks repeatability. High-intensity
              approaches burn mental capital and increase emotional trading — both enemies of consistent returns.
              This article outlines practical steps to replace intensity with disciplined routines.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">1) Build micro-habits</h3>
            <p>
              Break skills into small, repeatable actions (pre-market checklist, position-sizing template, journaling).
              Micro-habits compound over time and are sustainable during busy or stressful periods.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">2) Focus on process, not outcome</h3>
            <p>
              Define a clear decision framework. Use objective entry/exit criteria and risk rules. When outcomes are
              divorced from process, learning accelerates because you can iterate on what you control.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">3) Journal & review</h3>
            <p>
              Keep a concise trade journal: context, plan, result, and lesson. Review weekly to spot behavioral patterns
              and edge decay before they become costly.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white mb-3">Daily practices that build consistency</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Start small: adopt a modest routine and keep it for weeks before adding complexity.
              </li>
              <li>
                Capture small wins: define achievable profit targets and stops for each trade to reduce emotional swings.
              </li>
              <li>
                Review weekly: focus on process adherence and refine your plan with data, not emotion.
              </li>
            </ul>
          </section>

          <section className="mt-10 text-center">
            <a href="/resources" className="inline-block bg-[#13db7a] text-black font-semibold py-3 px-6 rounded-lg">
              See More Resources
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
