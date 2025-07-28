"use client";

import midel from "@/assets/offer-img-by-s/medil-1.png";
import user from "@/assets/offer-img-by-s/user-1.jpg";
import Image from "next/image";
import { TableButton } from "../ui/TableButton";

import { motion } from "framer-motion";

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
      position: "02",
      name: "Macro jems",
      id: "648294",
      weeklyProfit: "$910",
      avatar: user,
    },
    {
      position: "03",
      name: "Macro jems",
      id: "648295",
      weeklyProfit: "$880",
      avatar: user,
    },
    {
      position: "04",
      name: "Macro jems",
      id: "648296",
      weeklyProfit: "$850",
      avatar: user,
    },
    {
      position: "05",
      name: "Macro jems",
      id: "648297",
      weeklyProfit: "$820",
      avatar: user,
    },
    {
      position: "06",
      name: "Macro jems",
      id: "648298",
      weeklyProfit: "$800",
      avatar: user,
    },
    {
      position: "07",
      name: "Macro jems",
      id: "648299",
      weeklyProfit: "$780",
      avatar: user,
    },
    {
      position: "08",
      name: "Macro jems",
      id: "648300",
      weeklyProfit: "$750",
      avatar: user,
    },
    {
      position: "09",
      name: "Macro jems",
      id: "648301",
      weeklyProfit: "$730",
      avatar: user,
    },
    {
      position: "10",
      name: "Macro jems",
      id: "648302",
      weeklyProfit: "$700",
      avatar: user,
    },
  ];

  return (
    <div className="m-4 md:mx-0">
      <div className="container max-w-[800px] mx-auto  px-4 pt-8 md:mt-28 mb-8 bg-[#1a1a1a] rounded-2xl">
        {/* first table here  */}
        <div className="w-full mx-auto">
          {/* Title */}

          <h1
            className="text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,_#FF7800_0%,_#FF7800_54%,_#FFC800_62%,_#FFE601_100%)]
 text-center mb-12"
          >
            All Time Top Earners
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Table Header */}
            <div className=" flex  justify-between gap-4 px-4 md:px-8 py-4 text-gray-400 text-sm font-medium  mb-2">
              <div>Position</div>
              <div>User</div>
              <div className="text-center">Weekly Profit</div>
              <div className="text-center">Profile</div>
            </div>

            {/* Earners List */}
            <div className="space-y-2 pb-6">
              {earners.map((earner, index) => (
                <div
                  key={index}
                  className="flex  justify-between gap-3 items-center px-3 py-3 rounded-full bg-[#242526] hover:bg-gray-750 transition-colors duration-200"
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
                  <div className="flex justify-center">
                    <TableButton
                      title="Join our team"
                      className="w-full sm:w-auto"
                      icon={false}
                    />
                  </div>
                </div>
              ))}
              {/* <div className="block md:hidden mt-4">
                <SecondaryButton title="View more" className="w-full" />
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopEarners;
