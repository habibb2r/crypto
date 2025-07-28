"use client";
import cartBgImg from "@/assets/offer-img-by-s/cart-bg.png";

import member from "@/assets/offer-img-by-s/member.png";
import memberRrecived from "@/assets/offer-img-by-s/member-recived.png";
import total from "@/assets/offer-img-by-s/total.png";
import Image from "next/image";
import { motion } from "framer-motion";

import { TableButton } from "../ui/TableButton";
import Link from "next/link";
// start work here
const Activity = () => {
  const incomeStreams = [
    {
      title: "Members Total",
      icon: member,
      sub: "876,32,658",
    },
    {
      title: "Members Received",
      icon: memberRrecived,
      sub: "876 326 258.64 ",
    },
    {
      title: "Members Received",
      icon: total,
      sub: "876,32,658",
    },
  ];
  // for table
  const activityData = [
    {
      id: "85639",
      profit: "+10 USDT",
      time: "26 Minutes",
      program: "Starter",
      isNew: true,
      isActive: true,
    },
    {
      id: "85639",
      profit: "+10 USDT",
      time: "26 Minutes",
      program: "Royalty",
      isNew: false,
      isActive: false,
    },
    {
      id: "85639",
      profit: "+10 USDT",
      time: "26 Minutes",
      program: "Partner",
      isNew: false,
      isActive: true,
    },
    {
      id: "85639",
      profit: "+10 USDT",
      time: "26 Minutes",
      program: "Generation",
      isNew: false,
      isActive: true,
    },
    {
      id: "00000",
      profit: "00 USDT",
      time: "00 Minutes",
      program: "Bonus",
      isNew: false,
      isActive: false,
    },
  ];

  return (
    <div className="container mt-20 max-w-[1320px] mx-auto px-4 ">
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pb-10">
          {incomeStreams.map((stream, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-t-4xl rounded-b-2xl"
            >
              <div
                className="bg-black mb-1 rounded-4xl relative h-full bg-contain overflow-hidden"
                style={{
                  backgroundImage: `url(${cartBgImg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-gray-50/10 rounded-2xl"></div>

                <div className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                  {/* Icon Container */}
                  <div className="mb-6 size-32 p-1 rounded-full mx-auto overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="rounded-full overflow-hidden w-full h-full">
                      <Image
                        src={stream.icon.src}
                        alt={stream.title}
                        width={1000}
                        height={1000}
                        className=" w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xs font-bold  mb-1 ">
                    {stream.title}
                  </h3>
                  <h3 className="text-white font-bold text-lg mb-1 tracking-wide">
                    {stream.sub}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* table here  */}

        <div className="flex flex-col max-w-[1320px] mx-auto h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-t-4xl rounded-b-2xl">
          <section className="py-10 pb-5 px-0 md:px-6 flex flex-col items-center justify-center container mx-auto max-w-[1320px] rounded-2xl relative overflow-hidden bg-[#1A1A1A] mb-1 md:mb-2">
            {/* <div className="absolute top-20 left-30 size-[600px] bg-gradient-to-br from-[#FF7800]/50  rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}
            <div className="hidden md:block absolute top-20 left-30 size-[600px] bg-gradient-to-br from-[#FF7800]/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="w-full md:w-[80%] mx-auto">
              {/* Header */}
              {/* Show only on md and up */}
              <h1 className="hidden md:block text-white text-2xl font-semibold text-center mb-8">
                User Activity
              </h1>

              {/* Show only on mobile */}
              <h1 className="block md:hidden text-3xl font-bold text-transparent bg-clip-text text-center mb-12 bg-gradient-to-r from-[#FF7800] from-20% to-[#FFE601]">
                 User Activity
              </h1>
              {/* Responsive Wrapper */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full">
                  {/* Table Header */}
                  <div className="grid grid-cols-5 gap-4 mb-6 px-2 sm:px-4">
                    <div className="text-gray-300 font-medium text-xs sm:text-xs">
                      User ID
                    </div>
                    <div className="text-gray-300 font-medium text-xs sm:text-xs">
                      Profit
                    </div>
                    <div className="text-gray-300 font-medium text-xs sm:text-xs">
                      Time
                    </div>
                    <div className="text-gray-300 font-medium text-xs sm:text-xs">
                      Program
                    </div>
                    <div className="text-gray-300 text-center font-medium text-xs sm:text-xs">
                      User Profile
                    </div>
                  </div>

                  {/* Activity Rows */}
                  <div className="space-y-4 mb-8">
                    {activityData.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 gap-2 md:gap-4 items-center px-2 sm:px-2 py-2"
                      >
                        {/* User ID */}
                        <div className="relative w-full">
                          <div
                            className={`px-1 w-full lg:w-1/2 py-2 sm:px-3 sm:py-3 whitespace-nowrap rounded-lg text-xs sm:text-sm font-medium ${
                              item.isActive
                                ? "bg-[#FF7800] text-white"
                                : "bg-[#2E2E2E] text-gray-500"
                            }`}
                          >
                            ID: {item.id}
                          </div>
                          {item.isNew && (
                            <div className="absolute -top-3 sm:-top-4 left-10 transform -translate-x-1/2 bg-green-500 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full">
                              New
                            </div>
                          )}
                        </div>

                        {/* Profit */}
                        <div
                          className={`font-medium text-xs sm:text-sm ${
                            item.isActive ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {item.profit}
                        </div>

                        {/* Time */}
                        <div
                          className={`font-medium text-xs sm:text-sm ${
                            item.isActive ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {item.time}
                        </div>

                        {/* Program */}
                        <div
                          className={`font-medium text-xs sm:text-sm ${
                            item.isActive ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {item.program}
                        </div>

                        {/* View Profile Button */}
                        <div className="">
                          {item.isActive ? (
                            <TableButton
                              title="View Profile"
                              className="w-full md:text-xs text-[6px]"
                              icon={false}
                            />
                          ) : (
                            <button
                              className="block w-full text-[9px] px-2 py-3 sm:px-3 sm:text-sm whitespace-nowrap overflow-hidden text-[#1A1A1A] bg-[#2E2E2E] rounded-full duration-400 cursor-not-allowed"
                              disabled
                            >
                              View Profile
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* See More Button */}
              <Link href="/user-activity" className="flex justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <button className="hidden md:block w-full text-b cursor-pointer bg-gradient-to-l from-yellow-500 via-orange-500 to-orange-600 text-white font-normal py-3 rounded-full hover:from-orange-500 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                    See More
                  </button>
                  <button className="block md:hidden w-full text-b cursor-pointer bg-gradient-to-l from-yellow-500 via-orange-500 to-orange-600 text-black font-normal py-3 rounded-full hover:from-orange-500 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                    See More
                  </button>
                </motion.div>
              </Link>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Activity;
