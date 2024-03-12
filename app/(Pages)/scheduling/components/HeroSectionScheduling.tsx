"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
      transformOrigin: "center",
    },

    initial: {
      scale: 1,
    },
  };

  const buttonStyle = `
  bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-6 rounded-md
  hover:from-teal-400 hover:to-blue-500 shadow-md
  transform transition-transform duration-200 ease-in-out
  transform-origin:center
`;

const handleEmailOpen = () => {
    window.location.href = "mailto:priyanshumalaviya9210@gmail.com?subject=Reach Out to me";
  };

  return (
    <>
      <motion.div
        className="mt-4 flex flex-col-reverse items-center justify-start w-full md:flex-row text-left md:items-center md:justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text Section */}
        <motion.div
          className="px-4 py-6 md:px-6 lg:px-12 xl:px-32 w-full md:w-1/2"
          variants={textMotionVariants}
        >
          <motion.h3
            className="text-4xl md:text-5xl font-semibold"
            variants={childVariants}
          >
            <motion.span className="text-[#00c3ff]" variants={childVariants}>
            Transformative scheduling{" "}
            </motion.span>
            solutions that improve the entire care experience
          </motion.h3>

          <motion.p
            className="text-base md:text-lg text-[#828d9c] my-4 md:my-6"
            variants={childVariants}
          >
            Apprentice Health ambient sensors, process mining, simulation, and optimization create personalized scheduling templates that reduce wait times without exceeding waiting room occupancy limits or lengthening clinician workdays.
          </motion.p>
         
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          initial="initial"
          onClick={handleEmailOpen}
          className={`inline-block ${buttonStyle}`}
        >
          Learn More
        </motion.button>
     
        </motion.div>

        {/* Hero Image Section */}
        <motion.div className="w-full md:w-1/2" variants={imageVariants}>
          <Image
            src="/assets/images/bg-schedule.png"
            alt="HERO"
            width={700}
            height={900}
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroSection;
