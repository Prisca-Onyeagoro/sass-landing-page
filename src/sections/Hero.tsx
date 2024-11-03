"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinder from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="mt-6 tracking-tight text-xl text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts and celebrate your success
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-2">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative ">
            <motion.img
              src={cogImage.src}
              alt={"cog image"}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: easeInOut,
              }}
            />
            <motion.img
              src={cylinder.src}
              width={220}
              height={220}
              alt="cylinderimage"
              className="hidden md:block -top-8 -left-32 absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodle.src}
              width={220}
              alt="noodle"
              className="hidden rotate-[30deg] lg:block absolute top-[524px] left-[448px]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
