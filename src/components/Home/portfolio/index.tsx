
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

// Typing animation for 'Membership Unlocks...'
function TypingUnlocks() {
  const text = "Membership Unlocks...";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIdx < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, text]);

  return (
    <span className="text-primary">{displayed}</span>
  );
}

const Portfolio = () => {
  return (
    <section className="md:pt-16 sm:pt-8 pt-4" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        {/* Centered heading above the section */}
        <div className="w-full flex justify-center mb-6">
          <p className="sm:text-28 text-18 text-muted text-center">
            What Your <TypingUnlocks />
          </p>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src= {`${getImagePrefix()}images/portfolio/img-portfolio.png`}
              alt="Crypto Portfolio"
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              1)Trading Mastery 
              <span className="text-primary"> Track</span>
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-8">
              Designed for traders serious about short-term markets,
              <br className="md:block hidden" /> Vaultmont gives you the strategies, insights, and mentorship to perform with confidence.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-2">
                      <div className="flex items-center justify-center">
                        <Icon icon="mdi:check-circle-outline" color="#A3A3A3" width={32} height={32} />
                      </div>
                    </td>
                    <td className="py-2">
                      <h4 className="text-muted sm:text-28 text-22 ml-5">
                        {item.title === "Weekly Market Insights" ? "Market Insights" : item.title === "Weekly Strategy Lessons" ? "Live Trading Streams" : item.title === "Downloadable Resources" ? "On-Demand Trading Library" : item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
                {/* Add Journal Access point */}
                <tr className="border-b border-dark_border border-opacity-10">
                  <td className="py-2">
                    <div className="flex items-center justify-center">
                      <Icon icon="mdi:check-circle-outline" color="#A3A3A3" width={32} height={32} />
                    </div>
                  </td>
                  <td className="py-2">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">
                      Journal Access
                    </h4>
                  </td>
                </tr>
                {/* Add Weekly Strategy Lessons point */}
                <tr className="border-b border-dark_border border-opacity-10">
                  <td className="py-2">
                    <div className="flex items-center justify-center">
                      <Icon icon="mdi:check-circle-outline" color="#A3A3A3" width={32} height={32} />
                    </div>
                  </td>
                  <td className="py-2">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">
                      Weekly Strategy Lessons
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
