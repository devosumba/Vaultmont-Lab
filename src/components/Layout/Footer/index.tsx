"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import toast from "react-hot-toast";
import { validateEmail } from "@/utils/validateEmail";

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationState, setValidationState] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setShowSuccess(false); // Hide success message when user starts typing again
    
    // Real-time validation
    if (emailValue.trim() === '') {
      setValidationState('idle');
    } else if (validateEmail(emailValue)) {
      setValidationState('valid');
    } else {
      setValidationState('invalid');
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully subscribed! 🎉");
        setEmail(""); // Clear the form
        setValidationState('idle');
        setShowSuccess(true);
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast.error(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-6">
            <Logo />
            <div className="flex gap-6 items-center mt-8">
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:youtube"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:tiktok"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
            <h3 className="text-white text-24 font-medium sm:mt-20 mt-12 whitespace-nowrap">
              2025 Copright | Vaultmont
            </h3>
            
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6 lg:col-start-7 md:col-start-7 sm:col-start-4">
            <h4 className="mb-4 font-medium text-24" style={{ color: '#13db7a' }}>Navigation</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="mb-4 font-medium text-24" style={{ color: '#13db7a' }}>Legal</h4>
            <ul>
              <li className="pb-4">
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-primary text-17"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  href="/terms-of-service"
                  className="text-white hover:text-primary text-17"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="pb-4">
                <Link
                  href="/risk-disclosure"
                  className="text-white hover:text-primary text-17"
                >
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-6 lg:col-start-11 md:col-start-11 sm:col-start-7">
            <h3 className="text-24 font-medium" style={{ color: '#13db7a' }}>Subscribe</h3>
            <p className="text-muted text-opacity-60 text-18 mt-5">
              Subscribe to get the latest
              <br /> news from us
            </p>
            <form onSubmit={handleSubscribe} className="relative lg:w-80%">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                disabled={isLoading}
                className={`bg-transparent border py-4 text-white rounded-lg w-full mt-6 px-6 pr-16 focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                  validationState === 'valid' 
                    ? 'border-[#13db7a] focus:border-[#13db7a] bg-[#13db7a]/5' 
                    : validationState === 'invalid'
                    ? 'border-red-500 focus:border-red-500 bg-red-500/5'
                    : 'border-dark_border border-opacity-60 focus:border-primary'
                }`}
              />
              <button
                type="submit"
                disabled={isLoading || validationState === 'invalid' || validationState === 'idle'}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-3 p-2 hover:bg-primary hover:bg-opacity-20 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe to newsletter"
              >
                {isLoading ? (
                  <Icon
                    icon="eos-icons:loading"
                    width="24"
                    height="24"
                    className="text-primary animate-spin"
                  />
                ) : (
                  <Icon
                    icon="tabler:send"
                    width="24"
                    height="24"
                    className="text-primary"
                  />
                )}
              </button>
            </form>
            
            {/* Real-time validation messages */}
            <div className="mt-3 min-h-[24px]">
              {showSuccess && (
                <div className="flex items-center gap-2 text-[#13db7a] text-sm animate-fade-in">
                  <Icon icon="tabler:check-circle" width="16" height="16" />
                  <span>Thank you for subscribing! </span>
                </div>
              )}
              {validationState === 'invalid' && !showSuccess && (
                <div className="flex items-center gap-2 text-red-400 text-sm animate-fade-in">
                  <Icon icon="tabler:alert-circle" width="16" height="16" />
                  <span>Please enter a valid email address</span>
                </div>
              )}
              {validationState === 'valid' && !showSuccess && (
                <div className="flex items-center gap-2 text-[#13db7a] text-sm animate-fade-in">
                  <Icon icon="tabler:check" width="16" height="16" />
                  <span>Email format looks good!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-darkmode">
        <p className="text-xs text-gray-400 leading-relaxed px-4 pb-6 container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          All content on vaultmont.com is for educational purposes and does not constitute financial/investment advice, a recommendation, or a solicitation to buy or sell any security or derivative. Trading and investing involve substantial risk, including loss of all or more than your initial capital; past performance does not guarantee future outcomes. <Link href="https://www.linkedin.com/in/austine-osumba-689327207/" className="text-primary underline">Website by Osumba</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
