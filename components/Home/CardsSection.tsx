"use client";

import React from "react";
import AnimatedCard from "../shared/AnimatedCard";
import { motion } from "framer-motion";

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
    </div>
  );
};

export default CardsSection;
