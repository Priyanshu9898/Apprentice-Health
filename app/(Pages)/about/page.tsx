"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CardsContainer from "./components/CardsContainer";

const AboutUS = () => {
  const textMotionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
    <Image src={"/assets/images/about_hero.svg"} alt="hero" width={400} height={500} className="w-full absolute top-0 h-full z-[-1]" />
      <motion.div
        className="px-4 py-6  w-full text-center"
        variants={textMotionVariants}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-[#313D4D]"
          variants={childVariants}
        >
          About US
        </motion.h3>

        <motion.h3
          className="text-xl md:text-2xl font-semibold mt-2"
          variants={childVariants}
        >
          Created by{" "}
          <motion.span className="text-[#00c3ff]" variants={childVariants}>
            health care providers,
          </motion.span>{" "}
          for health care providers.
        </motion.h3>
      </motion.div>
      <CardsContainer />
    </>
  );
};

export default AboutUS;
