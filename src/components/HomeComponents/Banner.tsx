"use client";

import { motion } from "framer-motion";
import logo from "@/assets/alliance-logo.png";
import logo2 from "@/assets/logo-2.png";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import { FaVideo } from "react-icons/fa6";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[1320px] rounded-3xl border border-[#fee50172] overflow-hidden backdrop-blur lg:py-10"
      >
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-16 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg font-medium mb-4"
            >
             <span className=" text-3xl md:text-xl font-bold text-center md:text-left"> Welcome To</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <div className="lg:w-[50%] ">
                <Image
                  src={logo}
                  alt="logo"
                  width={1000}
                  height={500}
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-center md:text-left text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
            >
              Unique and revolutionary business model of 21st century
              sustainability- scalability transparency & security limitless
              opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
             <Link href="/wallettutorial">
               <SecondaryButton
                title="Watch Tutorial"
                icon={FaVideo}
                className="w-full lg:w-auto"
              />
             </Link>

              <Link href="/wallettutorial">
                <PrimaryButton
                  title="Get Started"
                  className="w-full lg:w-auto"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right Logo */}
          <motion.div
           animate={{ y: [-15, 15] }} // Move up, center, down, center
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
            className="lg:w-[40%]"
          >
            <div className=" h-38 lg:h-auto">
              <Image
                src={logo2}
                alt="logo"
                width={1000}
                height={1000}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
