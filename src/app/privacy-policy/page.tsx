import React from "react";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Vaultmont</title>
        <meta name="description" content="Vaultmont Privacy Policy - How we collect, use, and protect your information" />
      </Head>
      <main className="bg-darkmode min-h-screen py-12 px-4 flex flex-col items-center mt-24">
        <article className="max-w-2xl w-full bg-[#181818] rounded-xl shadow-lg p-8 text-white text-center">
          <img src="/images/Policies/Privacy Policy .png" alt="Privacy Policy" className="rounded-lg mb-8 w-full" />
          <h1 className="text-3xl font-bold mb-6 text-[#13db7a] text-left">PRIVACY POLICY</h1>
          
          <p className="text-base mb-6 text-gray-300 text-left">
            At Vaultmont Wealth Lab, your privacy matters. This Privacy Policy explains what personal data we collect, how we use it, when we may share it, and the steps we take to keep it secure when you use our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            1) Data We Collect
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            We may collect the following types of information when you visit or interact with the site:<br /><br />
            • Information you provide: e.g., your name, email address, and other contact details you submit.<br />
            • Automatically collected data: e.g., IP address, browser and device details, pages viewed, and time spent on the site.<br />
            • Cookies & similar tech: used to remember preferences and improve your browsing experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            2) How We Use Your Information
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            We process your information to:<br /><br />
            • Operate and maintain the website and its features.<br />
            • Personalize content and user experience.<br />
            • Communicate with you about site-related updates or inquiries.<br />
            • Analyze usage to improve performance and understand trends.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            3) When We Share Information
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            We do not sell your personal information. We may disclose it only:<br /><br />
            • With your consent;<br />
            • To comply with law or respond to lawful requests; or<br />
            • To protect rights, safety, and security of our users, the public, or our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            4) Data Security
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            We apply reasonable administrative, technical, and physical safeguards to protect your data. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            5) Your Rights
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            Subject to applicable law, you may:<br /><br />
            • Access, correct, or delete your personal information;<br />
            • Object to or restrict certain processing; and<br />
            • Withdraw consent where processing is based on consent.<br /><br />
            To make a request, contact us at <strong>vaultmontwealthlab@gmail.com</strong>
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            6) Policy Updates
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            We may revise this Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#13db7a] text-left">
            7) Contact Us
          </h2>
          <p className="text-base mb-6 text-gray-300 text-left">
            Questions about this Privacy Policy? Reach us at <strong>vaultmontwealthlab@gmail.com</strong>
          </p>
        </article>
      </main>
    </>
  );
}