"use client";

import { motion } from "framer-motion";
import React from "react";

const InfoSection = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 xl:px-32 flex items-center justify-center w-full h-screen bg-[url('/assets/images/background_workflow.svg')] bg-no-repeat bg-auto bg-center">
      <motion.div
        className=" opacity-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      > <p className="text-base md:text-4xl text-[#313D4D] text-center font-bold">
     Eliminate the waiting room
      </p>
        <p className="mt-6 text-base md:text-2xl text-[#828D9C] text-center font-semibold">
        Studies show that the efficiency of clinic workflows is the #1 predictor of patient satisfaction, and has a large impact on perceptions of clinician quality. When combined, our Workflow modules and Schedule modules drastically cut waiting room occupancy without decreasing patient volume.
        </p>
      </motion.div>
    </div>
  );
};

export default InfoSection;
