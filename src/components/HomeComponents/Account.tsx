"use client";

import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import Link from "next/link";

export default function AccountPreviewSection() {
  return (
    <section className="py-16 px-6 flex flex-col items-center justify-center container mx-auto max-w-[1320px] xl:rounded-2xl relative overflow-hidden bg-[#1A1A1A] mt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" /> */}
      {/* Title */}
      <h2 className="text-white text-3xl md:text-4xl font-semibold mb-10">
        Account Preview Mode
      </h2>

      {/* Wrapper for the two cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* LEFT CARD - Enter User ID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-xl p-6 bg-gradient-to-br from-[#101010] to-[#181818] border border-gray-700/50 shadow-lg"
        >
          <h3 className="text-[#898989] text-lg mb-4 text-center font-semibold">
            Enter User ID Number
          </h3>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Example:97463"
            className="w-full px-4 py-3 mb-5 rounded-full bg-black/70 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE7801]"
          />

          {/* Preview Button */}
          <Link href="/auth">
          <PrimaryButton title="Preview" className="w-full" icon={false} />
          </Link>
        </motion.div>

        {/* RIGHT CARD - Random Account */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-xl flex flex-col justify-between p-6 border border-[#FE7801]/50 shadow-lg bg-gradient-to-tr from-[#1a1a1a] via-[#1b1b1b] to-[#222222] overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <h3 className="bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent text-[22px] text-center font-bold mb-4">
            View a Random Account
          </h3>

          {/* Click Demo Button */}
          <Link href="/auth">
          <SecondaryButton title="Click Demo" className="w-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
