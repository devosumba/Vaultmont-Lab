import Link from 'next/link';
import TypingResources from '../../components/Resources/TypingResources';

const POSTS = [
  {
    title: 'Consistency Over Intensity',
    coverImage: '/images/blog/blog%201.jpg',
    excerpt: 'How to Build Confidence in Trading',
    date: '2024-01-01',
    slug: 'consistency-over-intensity',
  },
  {
    title: 'Trading vs Investing',
    coverImage: '/images/blog/trading%20vs%20investing.jpg',
    excerpt: 'Know The Difference and Stay Ahead',
    date: '2024-02-01',
    slug: 'trading-vs-investing',
  },
  {
    title: 'Why Over 74% of Traders Fail',
    coverImage: '/images/blog/Why%20Over%2074%25%20of%20Traders%20Fail.jpg',
    excerpt: 'Pitfalls to Avoid (and What to Do Instead)',
    date: '2024-03-01',
    slug: 'why-over-74-percent-of-traders-fail',
  },
  {
    title: 'Why You Should Build Your Stock Portfolio While Young',
    coverImage: '/images/blog/build%20your%20stock%20young.jpg',
    excerpt: 'Start early — compound returns and strategies for young investors',
    date: '2024-04-01',
    slug: 'why-you-should-build-your-stock-portfolio-while-young',
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-darkmode min-h-screen py-20 px-4 mt-24 md:mt-28 lg:mt-32">
      {/* banner removed per request */}

  <div className="max-w-6xl mx-auto relative z-20">
  <div className="mb-12 md:mb-16 lg:mb-20 w-full relative">
          <img
            src="/images/resource/resource_bg.png"
            alt="Resources background"
            className="w-full h-auto"
          />

          {/* Overlay typing text on the image, shifted upward to roughly the top 1/4 */}
          <div className="absolute inset-0 pointer-events-none">
            {/* center horizontally with left-1/2 + transform, and position vertically at 25% */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[18%] md:top-[25%] w-full max-w-5xl md:max-w-6xl px-4">
              <TypingResources />

              {/* Subtitle below the animated title */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center mt-3 max-w-full sm:max-w-5xl md:max-w-6xl px-4 sm:px-6 mx-auto leading-tight">
                This Resource Hub distills market noise into data-driven insights you can act on today
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <div key={i} className="w-full">
              <article className="group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="h-40 flex items-center justify-center bg-gradient-to-b from-[#13db7a] to-[#0b2b20]">
                  <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-[#0f3] text-center px-6 text-[#13db7a] group-hover:text-white/95 transition-colors duration-300">
                    {p.title}
                  </h3>
                </div>
                <div className="bg-[#0f0f0f] p-6">
                  <p className="text-gray-300 mb-6 text-base">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="text-[#13db7a] font-medium group-hover:text-[#0ee07a] transition-colors duration-200">Read More</Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-400">More resources coming soon.</div>
      </div>
    </main>
  );
}
 
