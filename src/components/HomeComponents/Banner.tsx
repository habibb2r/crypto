"use client";

import { motion } from "framer-motion";
import logo from "@/assets/alliance-logo.png";
import logo2 from "@/assets/logo-2.png";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import { FaVideo } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[1320px] rounded-3xl border border-[#fee50172] overflow-hidden backdrop-blur lg:py-10"
      >
        {/* Background gradient effects */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" /> */}

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
              <SecondaryButton
                title="Watch Tutorial"
                icon={FaVideo}
                className="w-full lg:w-auto"
              />

              <PrimaryButton
                title="Connect Wallet"
                className="w-full lg:w-auto"
              />
            </motion.div>
          </div>

          {/* Right Logo */}
          <motion.div
            // initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
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
