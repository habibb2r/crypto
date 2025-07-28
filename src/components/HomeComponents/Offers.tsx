
"use client";
import Image from "next/image";
import cartBgImg from "@/assets/offer-img-by-s/cart-bg.png";
import of1 from "@/assets/offer-img-by-s/of-1.png";
import of2 from "@/assets/offer-img-by-s/of-2.png";
import of3 from "@/assets/offer-img-by-s/of-3.png";
import of4 from "@/assets/offer-img-by-s/of-4.png";
import of5 from "@/assets/offer-img-by-s/of-5.png";
import of6 from "@/assets/offer-img-by-s/of-6.png";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Offers = () => {
  const incomeStreams = [
    {
      title: "PRIME STARTER BONUS",
      icon: of1,
      bgColor: "from-blue-500 to-purple-600",
    },
    {
      title: "PERSONAL PARTNER BOUNUS",
      icon: of2,
      bgColor: "from-yellow-500 to-orange-500",
    },
    {
      title: "LIMITELESS GENERATION REWARDS",
      icon: of3,
      bgColor: "from-yellow-400 to-yellow-600",
    },
    {
      title: "PRIME STARTER BONUS",
      icon: of4,
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      title: "ELITE LEVEL REAWARDS",
      icon: of5,
      bgColor: "from-yellow-500 to-orange-600",
    },
    {
      title: "ROYALTY CROWN BOUNUS",
      icon: of6,
      bgColor: "from-red-500 to-orange-500",
    },
  ];

  // State for current slide index on mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? incomeStreams.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === incomeStreams.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="  mb-2 py-10 xl:py-16 px-4">
        <div className="container max-w-[1320px] mx-auto">
          {/* Header */}
          <div className="text-center mb-6   xl:mb-16">
            <h1 className=" text-2xl md:text-5xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-orange-500  to-yellow-500 bg-clip-text text-transparent">
                Our Platform Offers{" "}
              </span>
              <span>6 </span>
              <span className="bg-gradient-to-r from-orange-400  to-yellow-400 bg-clip-text text-transparent">
                Types
              </span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold bg-gradient-to-r from-orange-500  to-yellow-400 bg-clip-text text-transparent">
              Of Income Streams
            </h2>
          </div>

          {/* Desktop+ grid (md and up) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pb-10">
            {incomeStreams.map((stream, index) => (
              <motion.div
                key={index}
                className="flex flex-col h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-t-4xl rounded-b-2xl"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div
                  key={index}
                  className="flex flex-col h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-t-4xl rounded-b-2xl"
                >
                  <div
                    className="bg-black mb-1 rounded-2xl relative h-full bg-contain"
                    style={{
                      backgroundImage: `url(${cartBgImg.src})`,

                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-gray-50/10 rounded-2xl"></div>

                    <div className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                      {/* Icon Container */}
                      <div className="mb-6  size-32 mx-auto overflow-hidden">
                        <Image
                          src={stream.icon.src}
                          alt={stream.title}
                          width={1000}
                          height={1000}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-lg mb-1 tracking-wide">
                        {stream.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile slider (only show on mobile) */}

          {/* Mobile slider (only show on mobile) */}
          <div className="md:hidden relative   max-w-md mx-auto">
            {/* pagination code  */}
            <div className="flex justify-center gap-4 mt-4 mb-8 bg-[#232425] py-4 rounded-full">
              {incomeStreams.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
        font-semibold text-lg px-3 pb-1
        cursor-pointer
        ${
          currentIndex === index
            ? "border-b-4 border-[#FF7800] text-[#FF7800]"
            : "border-b-4 border-transparent text-white hover:text-gray-300 hover:border-gray-500"
        }
        transition
      `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            {/* main cart here  */}

            <div className="flex flex-col h-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 rounded-t-4xl rounded-b-2xl relative overflow-hidden">
              <div
                className="bg-black mb-1 rounded-2xl relative h-full bg-contain"
                style={{
                  backgroundImage: `url(${cartBgImg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-gray-50/10 rounded-2xl"></div>

                <div className="p-8 text-center relative z-10 h-full flex flex-col justify-between">
                  {/* Icon Container */}
                  <div className="mb-6 size-32 mx-auto overflow-hidden">
                    <Image
                      src={incomeStreams[currentIndex].icon.src}
                      alt={incomeStreams[currentIndex].title}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-1 tracking-wide">
                    {incomeStreams[currentIndex].title}
                  </h3>
                </div>

                {/* Navigation Buttons inside card */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous"
                  className="absolute top-1/2 left-4 -translate-y-1/2 z-10 border-2 border-[#FF7800] bg-opacity-70 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                >
                  <ArrowLeft width={16} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next"
                  className="absolute top-1/2 right-4 z-10 -translate-y-1/2 border-2 border-[#FF7800] bg-opacity-70 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                >
                  <ArrowRight width={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
