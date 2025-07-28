"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import whatsapp from "../../../public/whatsapp.svg";
import facebook from "../../../public/facebook.svg";
import youtubemusic from "../../../public/youtubemusic.svg";
import telegram from "../../../public/telegram.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 40, rotate: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={footerRef}
      className="bg-[#1a1a1a] text-white py-6 px-4 w-full flex flex-col justify-center items-center"
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          variants={slideUpVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: false, amount: 0.5 }}
          style={{ scale }}
        >
          <Image
            src={logo}
            width={120}
            height={60}
            alt="logo"
            className="md:w-[200px] md:h-[100px] w-[120px] h-[60px]"
          />
        </motion.div>

        <motion.p
          className="text-center mt-3 text-sm md:text-base"
          variants={slideUpVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: false, amount: 0.5 }}
        >
          Terms & Conditions - Privacy Policy
        </motion.p>

        <motion.div
          className="flex gap-3 md:gap-5 mt-4 flex-wrap justify-center"
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[telegram, youtubemusic, facebook, whatsapp].map((icon, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9, rotate: -5 }}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                className="bg-white rounded-full p-3 w-14 h-14 md:w-20 md:h-20"
                src={icon}
                alt="social media icon"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="bg-[#1a1a1a] text-white text-center py-5 w-full mt-6 border-t border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.p
          className="text-center text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.8,
            },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          ©copyright2025@Globalcryptoallaiance.com
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
