import React from "react";

// Blog layout: provides a consistent outer wrapper for all blog pages.
// RootLayout already provides the global Header and Footer, so this layout
// only normalizes spacing, background and centering for blog routes.

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-darkmode min-h-screen py-12 px-4 flex flex-col items-center mt-24">
      {children}
    </section>
  );
}
