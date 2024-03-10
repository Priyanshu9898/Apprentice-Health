"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  alt: string;
}

const AnimatedCard: React.FC<CardProps> = ({
  imgSrc,
  title,
  description,
  link,
  alt,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: alt === "left" ? -100 : 100 },
  };

  return (
    <Link href={link} passHref>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        whileHover={{ scale: 1.05 }}
        className="flex flex-row h-full lg:h-[282px] px-2 items-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto mb-6 md:mb-0"
      >
        <div className="flex-shrink-0">
          <Image
            src={imgSrc}
            alt={alt}
            width={150}
            height={150}
            className="w-44 h-44"
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-md text-gray-600">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedCard;
