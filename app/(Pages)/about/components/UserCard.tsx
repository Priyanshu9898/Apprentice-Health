/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  bio: string;
  position: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({ imageSrc, name, role, bio, position }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const variants = {
    offscreen: {
      x: position === 'left' ? -300 : 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="relative w-1/2 flex md:flex-row flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img src={imageSrc} alt="" className="w-full md:w-1/3 rounded-full m-4" layoutId={`image-${name}`} />
      <div className="p-4">
        <motion.h3 layoutId={`title-${name}`} className="text-lg font-semibold">{name}</motion.h3>
        <motion.p layoutId={`role-${name}`} className="text-sm">{role}</motion.p>
        {!isExpanded ? (
          <motion.div layoutId={`button-${name}`}>
            <button className="text-blue-500 hover:underline mt-2" onClick={toggleExpand}>Read More</button>
          </motion.div>
        ) : (
          <motion.div layoutId={`bio-${name}`} className="absolute inset-0 bg-white p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p>{bio}</p>
            <button className="text-blue-500 hover:underline mt-4" onClick={toggleExpand}>x Close</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
