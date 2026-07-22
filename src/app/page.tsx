import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import EnrolmentCTA from "@/components/Masterclass/EnrolmentCTA";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import FAQ from "@/components/Home/FAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vaultmont",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <TimeLine />
      <Portfolio />
      <Upgrade />
      {/* Replaces the former "Step Inside The Vault!" CTA (Home/platform) with
          the same reused Cohort #02 Enrolment CTA + modal used on the Trading
          Masterclass page. Outer section/container match platform's original
          position/sizing (-mt-20 pulls it up under Upgrade, same max-width) so
          it occupies the same slot on the landing page. */}
      <section className="pt-0 mt-0 -mt-20 relative z-1">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <EnrolmentCTA />
        </div>
      </section>
      <FAQ />
      <Perks />
    </main>
  );
}
