"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import buttonImg from "@/assets/join/downloadbutton.png";
import heroBgEffect from "@/assets/Circle.png";
import joinCover from "@/assets/join/pdfimg.png";
import telegramImg from "@/assets/join/telegram.png";
import cartBgImg from "@/assets/offer-img-by-s/cart-bg.png";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RoadmapStep = {
  number: string;
  title: string;
  highlight?: boolean;
};

type RoadmapGroup = {
  steps: RoadmapStep[];
  boxed?: boolean;
};

const originalRoadmap: RoadmapGroup[] = [
  {
    steps: [
      { number: "01", title: "NEW MATRIX PROGRAM" },
      { number: "02", title: "SINGLE LEG PROGRAM" },
      { number: "03", title: "GLOBAL AUTOPOOL BONUS 2" },
    ],
  },
  {
    steps: [
      { number: "04", title: "C3 COIN LAUNCH", highlight: true },
      { number: "05", title: "STAKING & MINING" },
      { number: "06", title: "NFT & GAMING PROGRAM" },
    ],
  },
  {
    steps: [
      { number: "07", title: "DAILY GAME EARNING" },
      { number: "08", title: "EXCHANGER" },
      { number: "09", title: "AI TRADING" },
    ],
  },
  {
    steps: [
      { number: "10", title: "E-COMMERCE PLATFORM" },
      { number: "11", title: "SOCIAL MEDIA & OTHER APPS" },
      { number: "12", title: "WEB 3.0 PROJECTS" },
    ],
  },
  {
    steps: [
      { number: "13", title: "Global tournament" },
      { number: "14", title: "Lucky Draw" },
    ],
    boxed: false,
  },
];

// Function to transform roadmap for mobile (7 sections with 2 cards each)
const transformRoadmapForMobile = (roadmap: RoadmapGroup[]): RoadmapGroup[] => {
  const allSteps: RoadmapStep[] = [];
  roadmap.forEach((group) => {
    allSteps.push(...group.steps);
  });

  const mobileGroups: RoadmapGroup[] = [];
  for (let i = 0; i < allSteps.length; i += 2) {
    mobileGroups.push({
      steps: allSteps.slice(i, i + 2),
      boxed: true, // All mobile groups will be boxed
    });
  }

  return mobileGroups;
};

const Test = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleResize = () => {
      // Consider 'md' breakpoint (768px) as the threshold for mobile vs desktop layout
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentRoadmap = isMobile
    ? transformRoadmapForMobile(originalRoadmap)
    : originalRoadmap;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute top-5/12 xl:top-3/12 left-0 w-full -z-20">
        <Image src={heroBgEffect} alt="bg" className="w-[25%] object-cover" />
      </div>
      {/* Join */}
      <div className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-stretch">
          {/* -------- Left Section (PDF) -------- */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col space-y-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                alt="Join cover image"
                src={joinCover || "/placeholder.svg"}
                height={300}
                width={400}
                className="rounded-lg mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </motion.div>
            <motion.div
              className="bg-[#2f2218] p-6 shadow-2xl rounded-2xl flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h1
                  className="text-center font-bold text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  PDF
                </motion.h1>
                <motion.p
                  className="mt-4 text-base font-normal text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Global Crypto Alliance aims to build a safe, transparent, and
                  accessible digital ecosystem for all. Our platform empowers
                  individuals to achieve financial freedom, data privacy, and
                  career growth through blockchain technology. Download our
                  official document to learn how the C3 community operates
                  automatically and sustainably.
                </motion.p>
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                viewport={{ once: true }}
              >
                <Link href="/">
                  {/* <motion.p
                  className="flex-1 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More
                </motion.p>
                <Image
                  src={buttonImg || "/placeholder.svg"}
                  height={28}
                  width={28}
                  alt="Download Icon"
                /> */}
                  <SecondaryButton
                    title="View More"
                    className="w-full lg:w-auto"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* -------- Right Section (Telegram) -------- */}
          {/* -------- Right Section (Telegram) -------- */}
          <motion.div
            className="w-full lg:w-1/2 p-4 sm:p-12 mt-2  shadow-2xl rounded-2xl flex flex-col justify-between h-80 md:translate-y-66 lg:translate-y-60 relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background Image and Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 "
              style={{
                backgroundImage: `url(${cartBgImg.src})`, // Replace with your image URL
                // filter: "brightness(30%)", // Adjust overlay darkness here
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              
            />

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  width={80}
                  height={80}
                  src={telegramImg || "/placeholder.svg"}
                  alt="Telegram Icon"
                  className="mx-auto  h-42 w-42  md:h-32 md:w-32"
                />
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-2xl font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              >
                Join Our Telegram
              </motion.h1>
            </motion.div>
            <motion.div
              className="mt-10 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
              viewport={{ once: true }}
            >
              <PrimaryButton
                title="Click Here "
                className="w-full"
                icon={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Roadmap */}
      <div className="relative overflow-hidden w-full px-3">
        {/* The frosted-glass overlay */}
        <motion.section
          ref={sectionRef}
          className="relative text-white py-4 lg:py-20 px-4 md:px-12 max-w-screen-xl mx-auto w-full backdrop-blur border border-[#fee50172] rounded-3xl"
          style={{ y, opacity }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#FF7800] mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Future Road Map
          </motion.h2>

          <motion.div
            className=""
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {currentRoadmap.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                variants={groupVariants}
                className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3  gap-8 px-6 py-8 space-y-12 lg:p-8 relative ${
                  // Border condition based on device
                  isMobile
                    ? `border border-dashed border-[#FF7800] ${
                        groupIdx % 2 === 0
                          ? "border-l-0 border-b-0"
                          : "border-b-0 border-r-0"
                      }` // Alternating borders for mobile
                    : `
                  ${
                    group.boxed !== false
                      ? "border border-dashed border-[#FF7800]"
                      : ""
                  }
                  ${groupIdx === 0 ? "border-l-0 border-b-0" : ""}
                  ${groupIdx === 1 ? "border-b-0 border-r-0" : ""}
                  ${groupIdx === 2 ? "border-l-0 border-b-0" : ""}
                  ${groupIdx === 3 ? "border-r-0 border-b-0" : ""}
                  ${
                    groupIdx === 4
                      ? "border border-dashed border-[#FF7800] border-l-0"
                      : ""
                  }
                `
                }`}
              >
                {group.steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col  items-center
                ${
                  !isMobile && groupIdx === 0
                    ? "md:ml-[-50px] lg:ml-[-100px]"
                    : ""
                }
                ${
                  !isMobile && groupIdx === 1
                    ? "md:ml-[50px] lg:ml-[100px]"
                    : ""
                }
                ${
                  !isMobile && groupIdx === 2
                    ? "md:ml-[-50px] lg:ml-[-100px]"
                    : ""
                }
                ${
                  !isMobile && groupIdx === 3
                    ? "md:ml-[50px] lg:ml-[100px]"
                    : ""
                }
                 ${
                   !isMobile && groupIdx === 4
                     ? "md:ml-[150px] lg:ml-[400px]"
                     : ""
                 }
               `}
                  >
                    {/* Dot and step number container */}
                    <motion.div
                      className="absolute -top-[60px] flex flex-col items-center text-orange-400 font-bold text-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: i * 0.1 },
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      {step.number}
                      <motion.div
                        className="w-3.5 h-3.5 rounded-full bg-[#FF7800] shadow-[0_0_10px_4px_rgba(255,123,0,0.8)] mt-px"
                        variants={dotVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.5 }}
                        whileHover={{
                          scale: 1.2,
                          boxShadow: "0_0_15px_6px_rgba(255,123,0,1)",
                          transition: { duration: 0.3 },
                        }}
                      />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="bg-[#1a1a1a] border border-neutral-800 text-center px-2 md:px-8 py-5 rounded-xl w-[140px] sm:w-[160px] h-[87px] md:w-[250px] md:h-[150px] lg:w-[307px] lg:h-[177px] flex items-center justify-center shadow-[0_4px_0px_0px_rgb(255,120,0)]"
                      whileHover={{
                        boxShadow: "0_6px_0px_0px_rgb(255,120,0)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.p
                        className={`font-semibold text-sm md:text-base leading-tight ${
                          step.highlight ? "text-orange-400" : "text-white"
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 0.6, delay: 0.3 },
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                      >
                        {step.title}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Test;
