"use client";

import React from "react";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <Link href="/">
      {!imgError ? (
        <Image
          src={`${getImagePrefix()}images/logo/nav_logo2.svg`}
          alt="logo"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
          quality={100}
          onError={() => setImgError(true)}
        />
      ) : (
        <Image
          src="/images/logo/logo.svg"
          alt="logo fallback"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
          quality={100}
        />
      )}
    </Link>
  );
};

export default Logo;
