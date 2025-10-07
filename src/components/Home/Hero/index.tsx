"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
// Typewriter animation for 'Trading' and 'Investing' in a seamless loop
// import only once at the top

const typewriterWords = ["Trading", "Investing"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPE = 700;
const PAUSE_AFTER_DELETE = 400;

function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;
    const currentWord = typewriterWords[wordIndex % typewriterWords.length];
    if (pause) {
      timeout = setTimeout(() => {
        setPause(false);
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          setCharIndex(currentWord.length);
        } else {
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }, isDeleting ? PAUSE_AFTER_DELETE : PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        setPause(true);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
      } else {
        setPause(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, wordIndex]);

  // Blinking cursor
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-green-500 font-semibold">
      {text}
      <span style={{ color: '#fff', opacity: cursorVisible ? 1 : 0 }}>|</span>
    </span>
  );
}
// ...existing code...
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
                <Typewriter />
                {' '}With Proven Strategies.
              </span>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Exclusive Resources & <span style={{color: '#13db7a'}}>a Perfoming </span> Community!{' '}
              <span className="text-primary"></span>
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <a
                href="https://discord.gg/mw7qpcFtmW"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13db7a] text-black px-8 py-3 rounded-lg font-medium text-18 transition hover:bg-[#13db7a]/80 flex items-center justify-center"
                style={{ border: '2px solid #13db7a', display: 'inline-block', textAlign: 'center' }}
              >
                Start Your Journey
              </a>
              <button
                className="bg-transparent rounded-lg text-21 font-medium py-2 px-7 transition-colors duration-200"
                style={{ border: '2px solid #13db7a', color: '#13db7a' }}
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) {
                    const yOffset = -80; // adjust for sticky header height
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
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
            {/* Spacer removed to minimize space */}
          </div>
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-12">
            <div style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <motion.div
                animate={{ x: [0, -600] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                style={{ display: 'flex', gap: '3rem', width: 'max-content', alignItems: 'center' }}
              >
                {Array(2).fill(["3.svg", "Our Trusted Partners4.svg", "2.svg"]).flat().map((logo, idx) => (
                  <img
                    key={idx}
                    src={`/images/Our Trusted Partners/${logo}`}
                    alt={`Partner ${logo.charAt(0)}`}
                    style={{ margin: '0 1.5rem' }}
                    className="h-10 opacity-80"
                  />
                ))}
              </motion.div>
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
