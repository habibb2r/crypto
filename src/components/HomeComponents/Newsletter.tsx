"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import supportimg from "@/assets/helpcontact/contact support team.png";
import { SecondaryButton } from "../ui/Button";

// Variants
const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const Newsletter = () => {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    if (inViewLeft) controlsLeft.start("visible");
    if (inViewRight) controlsRight.start("visible");
  }, [inViewLeft, inViewRight, controlsLeft, controlsRight]);

  return (
    <div className=" lg:py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-8 items-stretch">
        {/* Left Side */}
        <motion.div
          ref={refLeft}
          className="w-full lg:w-1/2 flex flex-col justify-between  bg-[#2f2218] p-6 sm:p-12 shadow-2xl rounded-2xl lg:min-h-[400px]"
          variants={slideUpVariants}
          initial="hidden"
          animate={controlsLeft}
        >
          <div className="text-center">
            <h1 className="font-bold text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent">
              Need Help With Using The Platform?
            </h1>
            <p className="mt-4 text-base font-normal text-white">
              Get qualified support from Global Crypto Alliance experts via
              online chat
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              
            >
              <SecondaryButton title="Contact our support team" className="w-full" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={refRight}
          className="w-full lg:w-1/2 flex items-center justify-center lg:min-h-[400px]"
          variants={slideUpVariants}
          initial="hidden"
          animate={controlsRight}
        >
          <div className="w-full flex items-center justify-center ">
            <Image
              src={supportimg}
              alt="Support Team"
              width={400}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
