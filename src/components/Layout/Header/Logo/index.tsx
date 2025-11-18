"use client";

import React from "react";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DEV_LOGO_URL = "http://localhost:3001/images/logo/nav_logo2.svg";

const Logo: React.FC = () => {
  const pathname = usePathname();
  const [imgError, setImgError] = React.useState(false);

  const isConsistencyBlog =
    pathname === "/blog/consistency-over-intensity" ||
    pathname?.startsWith("/blog/consistency-over-intensity/");

  const isTradingPage =
    pathname === "/blog/trading-vs-investing" ||
    pathname?.startsWith("/blog/trading-vs-investing/");

  const isWhyFailPage =
    pathname === "/blog/why-over-74-percent-of-traders-fail" ||
    pathname?.startsWith("/blog/why-over-74-percent-of-traders-fail/");

  // If on the specific blog pages in local dev, use the explicit localhost URL.
  const useDevLogo = isConsistencyBlog || isTradingPage || isWhyFailPage;
  const primarySrc = useDevLogo
    ? DEV_LOGO_URL
    : `${getImagePrefix()}images/logo/nav_logo2.svg`;

  const fallbackSrc = "/images/logo/logo.svg";

  return (
    <Link href="/">
      {/* Use a plain <img> when loading an explicit localhost URL to avoid next/image remote host config issues during local dev. */}
      {!imgError ? (
        useDevLogo ? (
          <img
            src={primarySrc}
            alt="Vaultmont logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
            onError={() => setImgError(true)}
            style={{ display: "block" }}
          />
        ) : (
          <Image
            src={primarySrc}
            alt="Vaultmont logo"
            width={160}
            height={50}
            style={{ width: "auto", height: "auto" }}
            quality={100}
            onError={() => setImgError(true)}
            priority={true}
          />
        )
      ) : (
        <img
          src={fallbackSrc}
          alt="Vaultmont logo fallback"
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          style={{ display: "block" }}
        />
      )}
    </Link>
  );
};

export default Logo;
