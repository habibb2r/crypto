"use client";

import image from "@/assets/download.png";
import { motion } from "framer-motion";
// import image from "@/assets/about-image.png";
import Image from "next/image";
import { SecondaryButton } from "../ui/Button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="mx-4 xl:mx-0">
      <div className="bg-gradient-to-b lg:bg-gradient-to-l from-[#0d0d0d] from-25% to-[#1a1a1a] px-4 pb-8 lg:pb-0 container mx-auto max-w-[1320px] rounded-2xl mt-8 lg:mt-20">
        <div className="lg:pl-16">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-12 lg:p-12">
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src={image}
                alt="About Global Crypto Alliance"
                width={200}
                height={200}
                className=" w-44 sm:w-[200px] rounded-lg object-cover"
              />
            </motion.div>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-white text-center lg:text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl lg:text-5xl font-bold text-orange-500 mb-3 lg:mb-8"
              >
                About Global Crypto Alliance
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 text-base lg:text-lg leading-relaxed mb-5 lg:mb-8 max-w-2xl"
              >
                Global Crypto Alliance is the leading decentralized platform of
                the world, designed to transform the landscape of blockchain
                technology through innovation, transparency, and financial
                empowerment. Built on the robust BNB Chain through opbnb network
                and seamlessly integrated with USDT, it offers a secure,
                scalable, and globally accessible ecosystem that places users in
                full control of their digital assets.
              </motion.p>

              <Link href="/aboutus">
                <SecondaryButton title="View more" className="w-full lg:w-auto" />
              </Link>
            </motion.div>
            {/* new code  */}
          </div>
        </div>
      </div>
    </div>
  );
}
