"use client";
import { useState } from "react";
import EnrolmentModal from "./EnrolmentModal";

// Self-contained "Cohort #02 Enrolment" CTA card + its enrolment modal
// (Vaultmont logo, countdown, seats banner, form, validation, submission).
// Originally built on the Trading Masterclass page; extracted here so both
// that page and the landing page render the exact same component/behavior
// instead of duplicating the card markup and modal wiring.
export default function EnrolmentCTA() {
  const [isEnrolOpen, setIsEnrolOpen] = useState(false);

  return (
    <div className="relative z-1">
      <div className="bg-section bg-opacity-10 px-6 sm:px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center before:content-[''] before:absolute before:w-48 before:h-32 sm:before:w-96 sm:before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10">
        <div className="lg:col-span-8 col-span-12">
          <h2 className="text-white sm:text-40 text-30 mb-6">
            Cohort #02 <span style={{ color: '#13db7a' }}>Enrolment</span>
          </h2>
          <p className="text-muted text-opacity-60 text-18">
            To secure your seat, click the &apos;Enrol Now&apos; button and fill the form.
          </p>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
            <button
              onClick={() => setIsEnrolOpen(true)}
              className="relative z-10 pointer-events-auto text-darkmode border border-primary py-3 px-5 rounded-lg sm:text-21 text-18 font-medium hover:bg-transparent hover:text-primary"
              style={{ backgroundColor: '#13db7a', display: 'inline-block', textAlign: 'center' }}
            >
              Enrol Now
            </button>
          </div>
        </div>
      </div>

      <EnrolmentModal isOpen={isEnrolOpen} onClose={() => setIsEnrolOpen(false)} />
    </div>
  );
}
