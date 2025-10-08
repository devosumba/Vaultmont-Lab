import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20" id="upgrade">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="text-primary sm:text-28 text-18 mb-3"></p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              2)Wealth & Investment
              <span style={{ color: '#13db7a' }}> Track</span>
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-7">
              
              Designed for investors serious about long-term wealth, Vaultmont equips you with proven frameworks, expert mentorship, and long-term strategies.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-muted text-opacity-60">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src= {`${getImagePrefix()}images/upgrade/img-upgrade.svg`}
                alt="image"
                width={625}
                height={580}
                className="-mr-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
