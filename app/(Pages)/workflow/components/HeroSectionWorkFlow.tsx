"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


const HeroSectionWorkflow = () => {
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
            className="text-4xl md:text-5xl font-bold text-[#313D4D]"
            variants={childVariants}
          >
            Effectively utilize exam room space{" "}
            <motion.span className="text-[#00c3ff]" variants={childVariants}>
            and{" "}
            </motion.span>
            decrease waiting room occupancy
          </motion.h3>

          <motion.p
            className="text-base md:text-lg text-[#828d9c] my-4 md:my-6"
            variants={childVariants}
          >
           The Apprentice Health Workflow solution decreases waiting room occupancy and increases revenue without making clinicians busier.


          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#828d9c] my-4 md:my-6"
            variants={childVariants}
          >
           Revolutionize workflow orchestration, clinic room allocation, and patient communication with our Workflow Core real-time views, and enhance efficiency even more with Workflow Pro SMS alerting.


          </motion.p>
         
        </motion.div>

        {/* Hero Image Section */}
        <motion.div className="w-full md:w-1/2" variants={imageVariants}>
          <Image
            src="/assets/images/hero_workflow.svg"
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

export default HeroSectionWorkflow;
