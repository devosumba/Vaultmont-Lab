"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
// Typing animation for 'trading'
function TypingTrading() {
  const words = ["Trading", "Investing"];
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIdx < words[wordIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIdx].slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(words[wordIdx].slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setWordIdx((wordIdx + 1) % words.length);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, wordIdx, words]);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);
  return (
    <>
      <span style={{ color: '#13db7a', fontWeight: 600 }}>{displayed}</span>
      <span style={{
        display: 'inline-block',
        width: '1ch',
        color: '#ffffff',
        fontWeight: 600,
        opacity: cursorVisible ? 1 : 0,
        animation: 'blink 1s step-end infinite'
      }}>
        |
      </span>
    </>
  );
}
// ...existing code...
import Slider from "react-slick";

// ...existing code...
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
// (already imported above)
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";
import FAQ from "@/components/Home/FAQ";

// ...existing code...

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex lg:justify-start justify-center mb-5 mt-24">
              <span className="text-white sm:text-28 text-18">
                Master{' '}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <TypingTrading />
                </span>
                {' '}With Proven Strategies,
              </span>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Exclusive Resources & <span style={{color: '#13db7a'}}>a Perfoming </span> Community!{' '}
              <span className="text-primary"></span>
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <a
                href="https://discord.gg/nvhrB6vJCF"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
                style={{ backgroundColor: '#13db7a', border: '2px solid #13db7a', display: 'inline-block', textAlign: 'center' }}
              >
                ENTER THE LAB
              </a>
              <button
                className="bg-transparent rounded-lg text-21 font-medium py-2 px-7 transition-colors duration-200"
                style={{ border: '2px solid #13db7a', color: '#13db7a' }}
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#pricing';
                  }
                }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#13db7a'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#13db7a'; }}
              >
                Pricing
              </button>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="col-span-7 lg:block hidden">
            <div className="ml-20 -mr-64">
              <Image
                src="/images/hero/banner2.png"
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        {/* Our Trusted Partners Section */}
        <div className="w-full flex flex-col items-center justify-center py-8">
          <div className="text-center mb-6">
            <span className="text-primary text-lg font-semibold tracking-wide">&lt; OUR TRUSTED PARTNERS &gt;</span>
          </div>
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-12">
            <div className="flex items-center gap-2">
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-3xl font-extrabold">BloFin</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-2xl font-bold">NINJATRADER</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/partners/tealstreet.svg" alt="Tealstreet" className="h-8 opacity-70" />
              <span className="text-gray-400 text-xl font-bold">Tealstreet</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/partners/too.svg" alt="Too" className="h-8 opacity-70" />
              <span className="text-gray-400 text-xl font-bold">Too°</span>
            </div>
          </div>
        </div>
  {/* FAQ removed to ensure it only appears once in the site */}
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )}
      {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <SellCrypto />
          </div>
        </div>
      )}
    </section>
  );
}
export default Hero;
