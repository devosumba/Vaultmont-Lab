import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Features", href: "/#development" },
  { label: "Team", href: "/#team" },
  // Pricing hidden site-wide — see Home/Hero (Pricing button) and
  // Home/FAQ (Pricing section, id="pricing") for the matching disabled UI.
  // { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Masterclass", href: "/trading-masterclass" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ's", href: "/#faq" },
];
