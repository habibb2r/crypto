"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import lifetimeImg from "@/assets/lifetime.png";

export default function LifetimeIncomeSection() {
  return (
    <div className="py-10 xl:py-16 px-4">
      <div className="container max-w-[1320px] mx-auto">
        <div className="bg-[#1A1A1A]  rounded-2xl p-6 lg:p-12 px-8 relative overflow-hidden">
          <div className="absolute top-50 left-50 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 relative">
              {/* Orange accent line */}
              {/* <div className="absolute left-0 top-0 w-1 h-32 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" /> */}

              <div
                className="lg:pl-8 text-center lg:text-left"
                style={{
                  background:
                    "radial-gradient(circle, rgba(253, 135, 33, 1) 60%, rgba(75,74,74,1) 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-lg lg:text-3xl font-bold mb-8 leading-tight"
                >
                  <span>
                    Imagine LIFETIME Income Simply By Growing Your Community!
                    You Build Once, and Earn FOREVER!
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl"
                >
                  There are no limits, no middlemen. Begin your business journey
                  with C3 Crypto Global Alliance - a platform that is fully
                  decentralized, transparent, and 100% secured by blockchain
                  technology on opBNB, a Layer 2 blockchain by Binance.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-gray-300 text-base lg:text-lg"
                >
                  Because freedom is not just a dream - it is a system that
                  works for you.
                </motion.p>
              </div>
            </div>

            {/* Right Orbital Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0 relative size-48 lg:size-80"
            >
              {/* Outer orbital ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-orange-500/30"
              >
                {/* First orbiting dot */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/50" />
              </motion.div>

              {/* Inner orbital ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-12 rounded-full border border-orange-500/40"
              >
                {/* Second orbiting dot */}
                <div className="absolute -bottom-2 right-1/2 translate-x-1/2 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/50" />
              </motion.div>

              {/* Center cube container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  // animate={{
                  //   rotateX: [0, 360],
                  //   rotateY: [0, 360],
                  // }}
                  // transition={{
                  //   duration: 12,
                  //   repeat: Number.POSITIVE_INFINITY,
                  //   ease: "linear",
                  // }}
                  className="relative"
                >
                  {/* 3D Cube effect */}
                  <div className="w-24 h-24 overflow-hidden">
                    <Image
                      src={lifetimeImg}
                      alt="lifetime"
                      width={1000}
                      height={1000}
                      className="object-cover"
                    />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg blur-xl scale-150" />
                </motion.div>
              </div>

              {/* Additional glow rings */}
              <div className="absolute inset-8 rounded-full border border-orange-500/20 animate-pulse" />
              <div className="absolute inset-16 rounded-full border border-orange-500/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
