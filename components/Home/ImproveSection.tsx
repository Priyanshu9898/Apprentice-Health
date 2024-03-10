"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ImproveSection = () => {
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
  return (
    <div>
      <Image
        src={"/assets/images/divider-footer.png"}
        alt="Line1"
        width={900}
        height={300}
        className="w-full h-full"
      />
      <div className="section w-full bg-[#313c4c] ">
        <div className="text-center">
          <motion.div
            className="py-20 opacity-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-4xl text-white  px-4 md:px-10 lg:px-24 font-semibold">
              See how Apprentice Health can help improve your clinical workflows
            </p>

            {/* <p className="text-lg mt-6 text-white  px-4 md:px-10 lg:px-24 font-semibold">
            Improve your workflow with Apprentice Health
            </p> */}
            <motion.div className="mt-10 flex w-full items-center justify-center">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                initial="initial"
                className={`inline-block ${buttonStyle}`}
              >
                Schedule a Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImproveSection;
