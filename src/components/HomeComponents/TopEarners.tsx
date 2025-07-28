"use client";


import rocket from "@/assets/offer-img-by-s/rocket.png";
import Image from "next/image";
import user from "@/assets/offer-img-by-s/user-1.jpg";
import midel from "@/assets/offer-img-by-s/medil-1.png";
import { TableButton } from "../ui/TableButton";

import { motion } from "framer-motion";
import { SecondaryButton } from "../ui/Button";
import Link from "next/link";

const TopEarners = () => {
  const earners = [
    {
      position: "01",
      name: "Macro jems",
      id: "648293",
      weeklyProfit: "$942",
      avatar: user,
    },
    {
      position: "01",
      name: "Macro jems",
      id: "648293",
      weeklyProfit: "$942",
      avatar: user,
    },
    {
      position: "01",
      name: "Macro jems",
      id: "648293",
      weeklyProfit: "$942",
      avatar: user,
    },
    {
      position: "01",
      name: "Macro jems",
      id: "648293",
      weeklyProfit: "$942",
      avatar: user,
    },
    {
      position: "01",
      name: "Macro jems",
      id: "648293",
      weeklyProfit: "$942",
      avatar: user,
    },
  ];

  return (
    <div className="container  mt-10   mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1, // Slower than before
            ease: "easeInOut", // Smoother easing
          }}
        >
          <Image src={rocket} alt="Top Earner" height={1000} width={1000} />
        </motion.div>
      </div>
      {/* first table here  */}
      <div className="max-w-6xl mx-auto mt-10">
        {/* Title */}

        <h1
          className="text-3xl font-bold text-transparent bg-clip-text text-center mb-12 bg-gradient-to-r from-[#FF7800] from-20% to-[#FFE601]"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to right, #FF7800 80%, #FFE601 20%)",
          // }}
        >
          Monthly Top Earners
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Table Header */}
            <div className=" flex  justify-between gap-4 px-8 py-4 text-gray-400 text-sm font-medium  mb-2">
            <div>Position</div>
            <div>User</div>
            <div className="text-center">Weekly Profit</div>
            <div className="text-center">Profile</div>
          </div>

          {/* Earners List */}
          <div className="space-y-2">
            {earners.map((earner, index) => (
              <div
                key={index}
                className="flex  justify-between gap-3 items-center px-3 py-3 rounded-full bg-[#1A1A1A] hover:bg-gray-750 transition-colors duration-200"
              >
                {/* Position */}
                <div className="text-white ml-1 md:ml-6 font-bold text-sm md:text-xl">
                  {earner.position}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5  ">
                  <Image
                    height={24}
                    width={24}
                    src={earner.avatar}
                    alt={earner.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm sm:text-base">
                        {earner.name}
                      </span>
                      <Image
                        src={midel}
                        alt="Verified"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      ID: {earner.id}
                    </span>
                  </div>
                </div>

                {/* Weekly Profit */}
                <div className="text-white font-bold text-sm md:text-xl text-center">
                  {earner.weeklyProfit}
                </div>

                {/* Profile Button */}
                <Link href="/monthly-top-earners" className="flex justify-center">
                  <TableButton
                    title="Join our team"
                    className="w-full sm:w-auto"
                    icon={false}
                  />
                </Link>
              </div>
            ))}
            <Link href="/monthly-top-earners" className="block md:hidden mt-4">
               <SecondaryButton title="View more" className="w-full" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* second table here */}
      <div className="max-w-6xl mx-auto mt-22 relative overflow-hidden rounded-2xl py-6 px-2">
         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Title */}
        <h1
          className="text-3xl font-bold text-transparent bg-clip-text text-center mb-12 bg-gradient-to-r from-[#FF7800] from-20% to-[#FFE601]"
        >
          All Time Top Earners
        </h1>
        {/* Table Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Table Header */}
          <div className=" flex  justify-between gap-4 px-8 py-4 text-gray-400 text-sm font-medium  mb-2">
            <div>Position</div>
            <div>User</div>
            <div className="text-center">Weekly Profit</div>
            <div className="text-center">Profile</div>
          </div>

          {/* Earners List */}
          <div className="space-y-2">
            {earners.map((earner, index) => (
              <div
                key={index}
                className="flex  justify-between gap-3 items-center px-3 py-3 rounded-full bg-[#1A1A1A] hover:bg-gray-750 transition-colors duration-200"
              >
                {/* Position */}
                <div className="text-white ml-1 md:ml-6 font-bold text-sm md:text-xl">
                  {earner.position}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5  ">
                  <Image
                    height={24}
                    width={24}
                    src={earner.avatar}
                    alt={earner.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm sm:text-base">
                        {earner.name}
                      </span>
                      <Image
                        src={midel}
                        alt="Verified"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      ID: {earner.id}
                    </span>
                  </div>
                </div>

                {/* Weekly Profit */}
                <div className="text-white font-bold text-sm md:text-xl text-center">
                  {earner.weeklyProfit}
                </div>

                {/* Profile Button */}
                <Link href="/alltime-top-earners" className="flex justify-center">
                  <TableButton
                    title="Join our team"
                    className="w-full sm:w-auto"
                    icon={false}
                  />
                </Link>
              </div>
            ))}
            <Link href="/alltime-top-earners" className="block md:hidden mt-4">
               <SecondaryButton title="View more" className="w-full" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopEarners;
