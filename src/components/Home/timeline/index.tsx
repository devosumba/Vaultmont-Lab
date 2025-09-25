"use client";
function TypingFeaturesLoop() {
  const text = "< OUR FEATURES >";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timeout;
    if (pause) {
      timeout = setTimeout(() => {
        setPause(false);
        setIsDeleting((prev) => !prev);
      }, 700);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting) {
      if (charIdx < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, 65);
      } else {
        setPause(true);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, 40);
      } else {
        setPause(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, pause]);

  return (
    <span style={{ color: '#13db7a' }} className="text-lg font-semibold tracking-wide">{displayed}</span>
  );
}
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";



const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (inView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [inView]);
  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="w-full text-center mb-2">
              <TypingFeaturesLoop />
            </div>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-6">
              Learn. Invest.
              <span style={{ color: '#13db7a' }}> Trade!</span>
            </h2>
            <p className="text-muted sm:text-28 text-18 mb-9">
              Learn how to invest, trade, and grow your wealth with confidence. From  <span style={{ color: '#13db7a' }}>Bonds to ETFs, Stocks to Derivatives,</span> we give you the knowledge and structure to unlock profitability.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src= {`${getImagePrefix()}images/timeline/timeline.png`} 
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Investment Literacy</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Planning"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-6 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="Refinement"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Trading Mastery</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Live Market & Trade Insights</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Prototype"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-6 h-fit rounded-full flex items-center justify-center">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Mentorship"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap text-28 mb-3">
                    Mentorship
                  </h5>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:hidden">
              {/* Mobile: Only show the four main points with their icons */}
              <div className="flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 p-6 rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Investment Literacy"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <div className="text-start">
                  <h4 className="text-28 text-muted mb-2">Investment Literacy</h4>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 p-6 rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="Trading Mastery"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <div className="text-start">
                  <h4 className="text-28 text-muted mb-2">Trading Mastery</h4>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 p-6 rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Live Market & Trade Insights"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <div className="text-start">
                  <h4 className="text-28 text-muted mb-2">Live Market & Trade Insights</h4>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 p-6 rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Mentorship"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <div className="text-start">
                  <h4 className="text-28 text-muted mb-2">Mentorship</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
