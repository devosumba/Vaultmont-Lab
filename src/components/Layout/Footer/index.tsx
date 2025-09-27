import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
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
            <h3 className="text-white text-24 font-medium sm:mt-20 mt-12">
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
          <div className="lg:col-span-4 md:col-span-4 col-span-6 lg:col-start-9 md:col-start-9 sm:col-start-7">
            <h3 className="text-24 font-medium" style={{ color: '#13db7a' }}>Subscribe</h3>
            <p className="text-muted text-opacity-60 text-18 mt-5">
              Subscribe to get the latest
              <br /> news form us
            </p>
            <div className="relative lg:w-80%">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter Email"
                className="bg-transparent border border-dark_border border-opacity-60 py-4 text-white rounded-lg w-full mt-6 px-6"
              />
              <Icon
                icon="tabler:send"
                width="24"
                height="24"
                className="text-primary absolute right-7 bottom-4"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
