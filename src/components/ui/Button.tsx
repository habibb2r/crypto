"use client";

import wallet from "@/assets/wallet-logo.svg";
import Image from "next/image";
import buttonBg from "@/assets/button-bg.png";
import React from "react";
import { motion } from "framer-motion";

interface SecondaryButtonProps {
  title: string;
  icon?: React.ElementType;
  className?: string;
  onClick?: () => void;
}

interface PrimaryButtonProps {
  title: string;
  className?: string;
  icon?: boolean;
}

export const PrimaryButton = ({
  title,
  className = "",
  icon = true,
}: PrimaryButtonProps) => {
  return (
    <div
      className={`relative p-[1px] inline-flex items-center justify-center cursor-pointer hover:scale-105 duration-500 font-bold overflow-hidden group rounded-full ${className}`}
    >
      {/* Gradient background */}
      <span className="w-full h-full bg-gradient-to-r from-[#FE7801] to-[#FFE702] absolute"></span>

      {/* Button inner content */}
      <span className="relative px-3 md:px-6 py-3 sm:py-4 transition-all ease-out bg-black/85 rounded-full group-hover:bg-opacity-0 duration-400 w-full">
        <span className="bg-gradient-to-r from-[#FF7800] to-[#FFE601] bg-clip-text text-transparent flex items-center justify-center gap-2 w-full">
          {icon && (
            <span className="overflow-hidden size-5">
              <Image
                src={wallet}
                alt="wallet"
                className="object-cover w-full h-full"
              />
            </span>
          )}

          {title}
        </span>
      </span>
    </div>
  );
};

export const SecondaryButton = ({
  onClick,
  title,
  icon: Icon,
  className = "",
}: SecondaryButtonProps) => {
  return (
    <div onClick={onClick}
      className={`relative p-[1px] inline-flex items-center justify-center cursor-pointer hover:scale-105 duration-500 font-bold overflow-hidden group rounded-full text-black ${className}`}
    >
      {/* Gradient background */}
      <span className="w-full h-full bg-gradient-to-r from-[#FE7801] to-[#FFE702] absolute inset-0 z-0"></span>

      {/* Main button content */}
      <span className="relative px-12 py-4 transition-all ease-out rounded-full group-hover:bg-opacity-0 duration-400 z-10 flex items-center justify-center gap-2 w-full">
        {/* Decorative background image */}

        {/* Rotate animating image */}
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -right-3 -top-2 z-0 pointer-events-none"
        >
          <Image src={buttonBg} alt="" />
        </motion.span>

        {/* ✅ Optional Icon */}
        {Icon && <Icon className="size-6" />}

        {/* Title */}
        <span className="relative z-10">{title}</span>
      </span>
    </div>
  );
};
