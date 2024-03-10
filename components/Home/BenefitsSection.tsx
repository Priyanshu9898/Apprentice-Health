/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import BenefitsBox from "../shared/BenefitsBox";
import { motion } from "framer-motion";
import BenefitItem from "../shared/BenefitsBox";

const BenefitsSection = () => {
  return (
    <>
      <Image
        src={"/assets/images/divider-1.png"}
        alt="Line1"
        width={900}
        height={300}
        className="w-full h-full"
      />
      <div className="section w-full bg-[#fbfbfa]">
        <div className="text-center">
          <BenefitItem
            imgSrc="/assets/images/icon-improved-access.svg"
            title="Improved Patient Access"
            listItems={[
              "Increase exam room capacity by 20-30%",
              "Reduce patient flow bottlenecks",
            ]}
            alt="Improved Patient Access"
          />
          <BenefitItem
            imgSrc="/assets/images/icon-better-patient-experience.svg"
            title="Better Patient Experience"
            listItems={[
              "Reduce patient wait times up to 50%",
              "Eliminate the waiting room",
            ]}
            alt="Better Patient Experience"
          />
          <motion.div
            className="mt-20 py-20 opacity-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-[#828D9C]  px-4 md:px-10 lg:px-24 font-semibold">
              Breakthrough clinical impact made possible by Apprentice Health's
              proprietary use of ambient sensors, simulation, and artificial
              intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      <Image
        src={"/assets/images/divider-2.png"}
        alt="Line1"
        width={900}
        height={300}
        className="w-full h-full"
      />
    </>
  );
};

export default BenefitsSection;
