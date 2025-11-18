"use client";

import React from "react";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);
  const primarySrc = "/images/logo/nav_logo2.svg";
  const fallbackHttp = "http://localhost:3000/images/logo/nav_logo2.svg";

  return (
    <Link href="/">
      {!imgError ? (
        <Image
          src={primarySrc}
          alt="logo"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
          quality={100}
          onError={() => setImgError(true)}
        />
      ) : (
        // Use a plain <img> for the fallback HTTP URL to avoid next/image external optimizations
        <img
          src={fallbackHttp}
          alt="logo fallback"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
          onError={(e) => {
            // as a last resort, show bundled logo
            (e.currentTarget as HTMLImageElement).src = "/images/logo/logo.svg";
          }}
        />
      )}
    </Link>
  );
};

export default Logo;
