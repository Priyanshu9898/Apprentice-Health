"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const BenefitItem: React.FC<{
  imgSrc: string;
  title: string;
  listItems: string[];
  alt: string;
}> = ({ imgSrc, title, listItems, alt }) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <motion.div
      className="w-2/5 inline-block align-top m-3 opacity-100"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="circle mb-4 flex justify-center py-10 px-4 items-center bg-white rounded-full w-24 h-24 mx-auto">
        <Image src={imgSrc} alt={alt} width={100} height={100} />
      </div>
      <h2 className="text-2xl lg:text-4xl mb-4 text-center font-bold">
        {title}
      </h2>
      <div className=" text-center flex items-center justify-center">
        <ul className="text-lg text-left list-none pl-0">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="mb-2 before:content-['•'] before:mr-2 text-[#828D9C] before:text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BenefitItem;
