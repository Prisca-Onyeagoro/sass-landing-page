"use client";
import acme from "@/assets/logo-acme.png";
import quantum from "@/assets/logo-quantum.png";
import echo from "@/assets/logo-echo.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-5"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acme} alt="acme-logo" className="logo-ticker" />
            <Image src={quantum} alt="quantum-logo" className="logo-ticker" />
            <Image src={echo} alt="echo-logo" className="logo-ticker" />
            <Image
              src={celestial}
              alt="celestial-logo"
              className="logo-ticker"
            />
            <Image src={pulse} alt="pulse-logo" className="logo-ticker" />
            <Image src={apex} alt="apex-logo" className="logo-ticker" />
            {/* second motion */}
            <Image src={acme} alt="acme-logo" className="logo-ticker" />
            <Image src={quantum} alt="quantum-logo" className="logo-ticker" />
            <Image src={echo} alt="echo-logo" className="logo-ticker" />
            <Image
              src={celestial}
              alt="celestial-logo"
              className="logo-ticker"
            />
            <Image src={pulse} alt="pulse-logo" className="logo-ticker" />
            <Image src={apex} alt="apex-logo" className="logo-ticker" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
