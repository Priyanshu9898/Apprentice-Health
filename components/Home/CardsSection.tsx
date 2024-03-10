"use client";

import React from "react";
import AnimatedCard from "../shared/AnimatedCard";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const cardsData = [
  {
    imgSrc: "/assets/images/icon-intelligent-patient-scheduling.svg",
    title: "Optimized Scheduling Templates",
    description:
      "Reduce patient wait times without exceeding waiting room occupancy limits or prolonging clinician workdays.",
    link: "/scheduling",
    alt: "left",
  },
  {
    imgSrc: "/assets/images/icon-smart-workflow-notifications.svg",
    title: "Ambient Workflows",
    description:
      "Revolutionize real-time workflow orchestration, room allocation, and patient communication.",
    link: "/workflow",
    alt: "right",
  },
  {
    imgSrc: "/assets/images/icon-smart-hospital.svg",
    title: "Smart Hospital",
    description:
      "Collect, analyze, and act on IoT sensor data with Apprentice Health RTLS.",
    link: "/smartHospital",
    alt: "left",
  },
  {
    imgSrc: "/assets/images/icon-analytics.svg",
    title: "Analytics",
    description:
      "A trusted dataset that unites stakeholders, and workflow simulations that illuminate opportunity areas within your clinical operations.",
    link: "/analytics",
    alt: "right",
  },
];

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
  window.location.href =
    "mailto:priyanshumalaviya9210@gmail.com?subject=Reach Out to me";
};

const CardsSection = () => {
  return (
    <div className="container mx-auto px-4 xl:px-32 py-8 overflow-hidden">
      <motion.div
        className="px-4 py-6  w-full text-center"
        variants={textMotionVariants}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-semibold"
          variants={childVariants}
        >
          Achieve better clinical workflow with our{" "}
          <motion.span className="text-[#00c3ff]" variants={childVariants}>
            powerful modules
          </motion.span>
        </motion.h3>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardsData.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>

      <motion.div
        className="mt-20 py-5 opacity-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-base md:text-2xl  text-[#828D9C] text-center font-semibold">
          Apprentice Health modules are designed for clinics, infusion suites,
          peri-operative units, emergency departments and inpatient units of all
          sizes. Start with a single module at an individual clinic or rapidly
          deploy across an entire enterprise.
        </p>
      </motion.div>

      <motion.div className="flex w-full items-center justify-center">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          initial="initial"
          onClick={handleEmailOpen}
          className={`inline-block ${buttonStyle}`}
        >
          Talk To Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CardsSection;
